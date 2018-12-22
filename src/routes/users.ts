import * as express from 'express';
import * as resjson from 'commonResJson'
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')

  const response: resjson.OK = {
    code: 0,
    message: 'This is TEST-API from Vertrek_Tokyo(USERS-API)',
    app: 'users',
    ver: 'v1'
  };
  res.send(response);

});

module.exports = router;
