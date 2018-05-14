function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		var tempF = Math.floor((9 / 5) * (weather.main.temp) - 459.67)
		var img = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
		var template = `
		<h3>${tempF}°<img src="${img}"></h3>
		<h4>${weather.name}</h4>
		<p>Humidity: ${weather.main.humidity}<p>
		<p>WindSpeed: ${weather.wind.speed}</p>
		
		`
		document.getElementById("weather").innerHTML = template
		//What can you do with this weather object?
	})

}
