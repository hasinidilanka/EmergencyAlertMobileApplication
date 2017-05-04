// //dependencies:
// var express = require('express');
// var router = express.Router();
//
// //get models:
// var User = require('../models/user.model');
//
// //routes:
// User.methods(['get','post','put','delete']);
// User.register(router,'/user')
//
// //return router
// module.exports=router;

var express = require('express');


var userRouter = require('./users.router');
// var helperRouter =require('./helper.router');
// var categoryRouter = require('./category.router');

var apiRouter = express.Router();

//define api routes

apiRouter.use('/user', userRouter);
// apiRouter.use('/helper',helperRouter);
// apiRouter.use('/category',categoryRouter);

module.exports = apiRouter;