async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '1901f906dbb9a3b92cacb3c8fd2a9002'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('container').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {

	console.log(data);
   
    //main
	const temp=document.getElementById('temp');
	const city=document.getElementById('hello');
	//submain
    const weather=document.getElementById('weather');
	const description = data.weather[0].description;
	const wind=document.getElementById('wind');
	const humidity=document.getElementById('humidity');
    const pressure=document.getElementById('pressure');
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

	temp.innerText=data.main.temp;
	city.innerText= data.name;
	weather.innerText=description;
    wind.innerText=`${data.wind.speed} Km/h`;
    pressure.innerText=`${data.main.pressure} mb`;
	humidity.innerText=`${data.main.humidity}%`;
    document.getElementById('weather-icon').src = iconUrl;
}
