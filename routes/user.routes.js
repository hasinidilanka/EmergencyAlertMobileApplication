/**
 * Created by Hasini on 4/22/2017.
 */
var express = require('express');
var userController = require('../controllers/user.controller');

var usersRouter = express.Router();



usersRouter.post('/register',userController.register);
// usersRouter.get('/getTelephone/:num',userController.getTelephoneVerified);
// usersRouter.post('/')

//
//usersRouter.route('/login')
//    .post(userController.login);
//
//usersRouter.route('/profile/:id')
//    .get(userController.getById);

module.exports = usersRouter;