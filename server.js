var express = require('express');
var app = express();
app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for'];
    var language = req.acceptedLanguages[0];
    var browser = getBrowser(req.headers['user-agent']);
    res.end(JSON.stringify({'ip':ip, 'language':language, 'browser':browser}));
})
app.listen(process.env.PORT, process.env.IP);

function getBrowser(list){
    var ua = list;
    var browser;
    if( /firefox/i.test(ua) )
    browser = 'firefox';
    else if( /chrome/i.test(ua) )
      browser = 'chrome';
    else if( /safari/i.test(ua) )
      browser = 'safari';
    else if( /msie/i.test(ua) )
      browser = 'msie';
    else
      browser = 'unknown';
    return browser;
}