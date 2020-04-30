const express = require("express");
const https = require("https");
const app = express();
app.get("/", function(req,res){
const url = "https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=f492ea1f6c462fe3352d45d4f61bd208&units=metric";
https.get(url, function(response){
  console.log(response.statusCode);
  response.on("data", function(data){
    const weatherData = JSON.parse(data);
    const object = {
      name:"winnie",
      age : "2"
    }
    console.log(object);
    console.log(JSON.stringify(object));
    console.log(weatherData);
    console.log(JSON.stringify(weatherData));
    const temp = weatherData.main.feels_like;
    console.log(weatherData.weather[0].description);
  })
})



  res.send("Server is up and running.")
});






app.listen(3000, function(){
  console.log("Server running on 3000");
})
