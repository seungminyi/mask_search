// // node.js의 http모듈을 변수 http로 추출합니다.
// const http = require('http');
// var fs = require('fs');
 
// const hostname = '127.0.0.1';
// const port = '1337';
 
// // http모듈의 createServer 함수를 호출하여 서버를 생성합니다.
// // req: request. 웹 요청 매개변수, res: response. 웹 응답 매개변수
// http.createServer(function (req, res) {
    
//     fs.readFile('./index.html', 'utf8', function(err, data) {
//         // the data is passed to the callback in the second argument
//         //console.log(data);
//         // writeHead: 응답 헤더를 작성합니다.
//         // 200: 응답 성공, text/html: html문서
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         // end: 응답 본문을 작성합니다.
//         res.end(data);
//     });
//     // listen: 매개변수로 포트와 호스트를 지정합니다.
// }).listen(port);


var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});