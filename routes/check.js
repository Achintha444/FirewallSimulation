var express = require('express');
var router = express.Router();
var check = require('./conversion');

/* GET users listing. */
router.post('/', function (req, res, next) {
    const sourceIp = req.body.sourceIp;
    const destinationIp = req.body.destinationIp;
    const sourcePort = req.body.sourcePort;
    const destinationPort = req.body.destinationPort;
    const dataStr = [sourceIp,destinationIp,sourcePort,destinationPort];

    if(check.check(dataStr)){
        res.status(200).render('index', { dataStr: dataStr, ans: 'Security Test Passed!' });
    }else{
        res.status(404).render('index', { dataStr: dataStr, error: 'Security Test Failed! Therefore Connection Aborted!' });
    }
});

module.exports = router;
