var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.header('Content-Type', 'application/json; charset=utf-8');
    var response = { code: 0, message: 'This is TEST-API from Vertrek_Tokyo' };
    res.send(response);
});
module.exports = router;
//# sourceMappingURL=index.js.map