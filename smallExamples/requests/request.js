// One way of making HTML Requests
// const request = require('request');
// request('http://www.google.com',function(error,response,body){
//   if(!error && response.statusCode==200){
//     console.log(body);
//   }
// });

//Request HTML - Another way
// var request=require('request');
// request('http://google.com',function(error,response,body){
//   //Error holds any potential error we may recieve.
//   if(error){
//     console.log("Something wen't wrong.");
//     console.log(error());
//   }else{
//     if(response.statusCode==200)
//     //Things worked. Print html.
//     console.log(body)
//   }
// })

// API Requests
// Sunset time in Hawaii - JSON
var request=require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',function(error,response,body){
  if(!error && response.statusCode==200){
    var parsedData=JSON.parse(body);
    console.log(parsedData);
    var time=parsedData["query"]["results"]["channel"]["astronomy"]["sunset"];
    console.log(time);
  }
});
