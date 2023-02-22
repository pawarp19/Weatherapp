function getWeather(city) {
    const apiKey = '6749b473489d22ecc921d0a32b66302e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const element = document.getElementById(city.toLowerCase());

        element.innerHTML = `Temperature in ${city}: ${temperature} &deg;C<br>Min Temperature: ${minTemperature} &deg;C<br>Max Temperature: ${maxTemperature} &deg;C<br>Weather: ${description}`;
      })
      .catch(error => console.log(error));
  }

  // Call the getWeather function for Pune and Mumbai
  getWeather('Pune');
  getWeather('Mumbai');
  getWeather('Delhi');