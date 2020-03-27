import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import Logo from '../../components/Logo';

function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ngo = {
    id: localStorage.getItem('ngoId'),
    name: localStorage.getItem('ngoName')
  };

  useEffect(() => {
    const getIncidents = async () => {
      try {
        const response = await api.get('profile', {
          headers: {
            Authorization: ngo.id
          }
        });

        setIncidents(response.data);
      } catch (ex) {
        alert('Error on list incidents. Try again');
      }
    }

    getIncidents();
  }, [ngo.id]);

  async function handelDetele(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorization: ngo.id
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (ex) {
      //alert('Error on delete incident. Try again');
      alert(ex);
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-page page">
      <header>
        <Logo />

        <span>Welcome, {ngo.name}</span>

        <Link className="btn-default" to="/incidents/new">Register new incident</Link>

        <button onClick={handleLogout}>
          <FiPower size={16} color="#e02041" />
        </button>
      </header>

      <h1>Registered Incidents</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description</strong>
            <p>{incident.description}</p>

            <strong>Value</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handelDetele(incident.id)}>
              <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;