var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.header('Content-Type', 'application/json; charset=utf-8');
    var response = { code: 0, message: 'This is TEST-API from Vertrek_Tokyo(USERS)' };
    res.send(response);
});
module.exports = router;
//# sourceMappingURL=users.js.map