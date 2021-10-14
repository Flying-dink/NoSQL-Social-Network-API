const router = require('express').Router();
const apiRoutes = require('./api/');
const thoughtsRoutes= require('./thoughts-routes');
router.use('/api', apiRoutes);
router.use('/users',userRoutes);
router.use('/thoughts',thoughtsRoutes);

router.use((req,res) => {
    res.status(404).send('<h1>404 Error!<h1>');
})

module.exports - router;