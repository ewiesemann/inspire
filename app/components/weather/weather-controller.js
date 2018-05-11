function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var tempF = Math.floor((9/5)*(weather.main.temp)-459.67)
		var template = `
		<h1>Current Temp: ${tempF}°</h1>
		<h2>City: ${weather.name}</h2>
		<h3>Humidity: ${weather.main.humidity}<h3>
		<h3>WindSpeed: ${weather.wind.speed}</h3>
		
		`
		document.getElementById("weather").innerHTML = template
		//What can you do with this weather object?
	})
	
}
