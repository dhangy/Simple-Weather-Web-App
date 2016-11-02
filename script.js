var weatherData = {
    city: document.querySelector("#city"),
    weather: document.querySelector("#weather"),
    temperature: document.querySelector("#temperature"),
    temperatureValue: 0,
    units: "°F"
};

    function switchUnits() {
        if (weatherData.units == "°C" ) {
            weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
            weatherData.units = "°F";
        }
        else {
            weatherData.temperatureValue = roundTemperature((weatherData.temperatureValue - 32)* 5/9);
            weatherData.units ="°C";
        }
        weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + ", ";
    }

    function getLocation() {
        var location_xhr = new XMLHttpRequest();
        location_xhr.addEventListener("load", function(){
            var response = JSON.parse(location_xhr.responseText);
            console.log("Fetching location data...");
            console.log(response);
            var position = {
                latitude: response.latitude,
                longitude: response.longitude
            };
            var cityName = response.city;

        });
        location_xhr.open("GET", "http://ip-api.com/json");
        location_xhr.send();

    }

    function getWeather(){

        var weather_xhr = new XMLHttpRequest();
        weather_xhr.addEventListener("load", function () {
            var response = JSON.parse(weather_xhr.responseText);

            console.log("Requesting weather info...");


                //if (cityName == "Earth") {
                    //This will be if IP based location fails we will need to run the function and ask the user for their location
                //    getLocationAndWeather();
                //}
                //else {
                //    var WeathervDescription = response.weather[0].description;
                //    var WeatherTemperature = response.weather[0].temperature;

                //}
        });
        weather_xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5aaddd890594d7ec293c5201aadb9b5f");
        weather_xhr.send();
    }

    getWeather();
    getLocation();
