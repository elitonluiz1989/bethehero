const express = require('express');

const NGOController = require('./controllers/NGOController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionProfile = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionProfile.create);

routes.get('/ngos', NGOController.index);
routes.post('/ngo', NGOController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incident', IncidentController.store);
routes.delete('/incident/:id', IncidentController.delete);

module.exports = routes;