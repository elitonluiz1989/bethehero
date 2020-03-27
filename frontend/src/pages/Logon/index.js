import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/img/heroes.png';

import Logo from '../../components/Logo';

function Logon() {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(evt) {
    evt.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);

      history.push('/profile');
    } catch (ex) {
      alert('Fail on login. Try again');
    }
  }

  return (
    <div id="logon-page" className="logon-page page">
      <section className="logon-form">
        <Logo />

        <form onSubmit={handleLogin}>
          <h1>Do your logon</h1>

          <input type="text"
            placeholder="Your ID"
            value={id}
            onChange={evt => setId(evt.target.value)} />

          <button type="submit" className="btn-default">Logon</button>

          <a className="route-link" href="/register">
            <FiLogIn size={16} color="#e02041" />
            I don't have a registration
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;