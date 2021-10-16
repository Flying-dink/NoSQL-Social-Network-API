






const router = require('express').Router();
const apiRoutes = require('./api');
//const validator = require('validator');
const {validator} = require('node-input-validator');
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 User Req Error</h1>');
});

module.exports = router;














































