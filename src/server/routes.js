const router = require('express').Router();
const controller = require('./controller/index.js');

console.log('in routes')

router.post('/create', controller.create);

module.exports = router;