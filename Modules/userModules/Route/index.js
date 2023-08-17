const express   = require('express');
const route     = express.Router();    
const UserController = require('../Controller/UserController')

route.get('/api/getAllUsers', UserController.getAllUsers);

route.get('/api/getUsers/:id',UserController.getUsers);


route.post('/api/create',UserController.create);
route.put('/api/update_user',UserController.update_user);
route.delete('/api/delete_user',UserController.delete_user);

module.exports = route;