const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){


  const locName = req.body.cityName;
  const apiKey = "f492ea1f6c462fe3352d45d4f61bd208";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+locName+"&appid="+apiKey+"&units=metric";
  https.get(url, function(weather_api_res){
    // console.log(response.statusCode);
    weather_api_res.on("data", function(data){
      const weatherData = JSON.parse(data);
      const object = {
        name:"winnie",
        age : "2"
       }
      // console.log(object);
      // console.log(JSON.stringify(object));
      console.log(weatherData);
      // console.log(JSON.stringify(weatherData));
      // const temp = weatherData.main.feels_like;
      const weather = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>The weather in "+locName+" is " + weather+"</h1>");
      res.write("<img src="+imageURL+">");
      res.send();

    })
  })
})





app.listen(3000, function(){
  console.log("Server running on 3000");
})
