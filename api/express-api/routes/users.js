var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      firstName: 'John',
      surname: 'Doe',
      emailAddress: 'john@dvt.com',
    },
    {
      firstName: 'Tom',
      surname: 'Doe',
      emailAddress: 'tom@dvt.com',
    }
  ])
});

module.exports = router;
