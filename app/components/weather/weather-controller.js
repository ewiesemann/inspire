function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		console.log(weather.weather[0].icon)
		var tempF = Math.floor((9 / 5) * (weather.main.temp) - 459.67)
		var img = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
		var template = `
		<h1>Current Temp: ${tempF}°<img src="${img}"></h1>
		
		<h2>City: ${weather.name}</h2>
		<h3>Humidity: ${weather.main.humidity}<h3>
		<h3>WindSpeed: ${weather.wind.speed}</h3>
		
		`
		document.getElementById("weather").innerHTML = template
		//What can you do with this weather object?
	})

}
