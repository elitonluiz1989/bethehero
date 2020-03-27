import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import Logo from '../../components/Logo';

function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setNGOState] = useState('');

  async function handleRegister(evt) {
    evt.preventDefault();

    try {
      const data = {
        name,
        email,
        whatsapp,
        city,
        state
      };

      const response = await api.post('ngo', data);

      alert(`Your access ID is: ${response.data.id}`);

      history.push('/');
    } catch (ex) {
      alert('Error on register the NGO. Try again.');
    }
  }

  return (
    <div className="register-page page">
      <div className="register-content">
        <section>
          <Logo />

          <h1>Registration</h1>

          <p>Do your registration, access the platform and help the people find the incidents of your NGO</p>

          <Link to="/" className="route-link">
            <FiArrowLeft size={16} color="#e02041" />
            I already have a registration
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="NGO's name"
            value={name}
            onChange={evt => setName(evt.target.value)} />

          <input type="email"
            placeholder="E-mail"
            value={email}
            onChange={evt => setEmail(evt.target.value)} />

          <input placeholder="WhatsApp"
            value={whatsapp}
            onChange={evt => setWhatsapp(evt.target.value)} />

          <div className="input-group">
            <input placeholder="City"
              value={city}
              onChange={evt => setCity(evt.target.value)} />

            <input placeholder="ST"
              maxLength="2"
              style={{ width: 80 }}
              value={state}
              onChange={evt => setNGOState(evt.target.value)} />
          </div>

          <button className="btn-default" type="submit">Resgiter</button>
        </form>
      </div>
    </div>
  );
}

export default Register;