import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import '../../../assets/css/register.css';
import './style.css';

import Logo from '../../../components/Logo';

function NewIncident() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();

  async function handleRegister(evt) {
    evt.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incident', data, {
        headers: {
          Authorization: localStorage.getItem('ngoId')
        }
      });

      history.push('/profile');
    } catch (ex) {
      alert('Error on register the incidente. Try again');
    }
  }

  return (
    <div className="register-page page">
      <div className="register-content">
        <section>
          <Logo />

          <h1>Register the new incident</h1>

          <p>Describe the incident with details to find a hero for revolve it</p>

          <Link to="/profile" className="route-link">
            <FiArrowLeft size={16} color="#e02041" />
            Back to home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="Incident title"
            value={title}
            onChange={evt => setTitle(evt.target.value)} />

          <textarea placeholder="Incident description"
            value={description}
            onChange={evt => setDescription(evt.target.value)}></textarea>

          <input placeholder="Incident value"
            value={value}
            onChange={evt => setValue(evt.target.value)} />

          <button className="btn-default" type="submit">Resgiter</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;