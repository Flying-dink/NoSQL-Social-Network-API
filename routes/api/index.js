//const router = require('express').Router();

//const userRoutes = require('./user-routes');

//const thoughtRoutes = require('./thought-routes');

//add prefix
//router.use('/users', userRoutes);

//router.use('/thoughts', thoughtRoutes);

//module.exports = router;

const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");
//const validator = require("validator");
const validator = require("node-input-validator");
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;


















