// Set up a form that will let users input their location and will fetch the weather info (still just console.log() it).
// Display the information on your webpage!
// Add any styling you like!
// Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API. Use DevTools to test for low-end devices.

// autocall fetch for current IP forecast, add search

// WEATHER_API_KEY = ad93355e721349a09c8150136242801
// url = http://api.weatherapi.com/v1
// Current API: http://api.weatherapi.com/v1/current.json?key={API_KEY_HERE}&q={LOCATION_HERE}
// Forecast API: http://api.weatherapi.com/v1/forecast.json?key={API_KEY_HERE}&q={LOCATION_HERE}&days={NUMBER_OF_FORECAST_DAYS (always = 3)}
//  Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
//  city name e.g.: q=Paris
//  auto:ip IP lookup e.g: q=auto:ip

async function fetchWeather(selectedLocation) {
  // introduce try catch
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ad93355e721349a09c8150136242801&q=${selectedLocation}&days=3`,
      { mode: 'cors' }
    );
    const responseData = await response.json();
    const {
      location: {
        name: locationName,
        region: locationRegion,
        country: locationCountry,
        localtime: locationTime,
      },
      forecast: {
        forecastday: [
          {
            day: {
              avgtemp_c: firstDayTempC,
              avgtemp_f: firstDayTempF,
              maxwind_kph: firstDayWind,
              avghumidity: firstDayHumidity,
              daily_chance_of_rain: firstDayRain,
              condition: { text: firstDayCondition, icon: firstDayIcon },
            },
            astro: { sunrise, sunset },
          },
          {
            day: {
              avgtemp_c: secondDayTempC,
              avgtemp_f: secondDayTempF,
              maxwind_kph: secondDayWind,
              avghumidity: secondDayHumidity,
              daily_chance_of_rain: secondDayRain,
              condition: { text: secondDayCondition, icon: secondDayIcon },
            },
          },
          {
            day: {
              avgtemp_c: thirdDayTempC,
              avgtemp_f: thirdDayTempF,
              maxwind_kph: thirdDayWind,
              avghumidity: thirdDayHumidity,
              daily_chance_of_rain: thirdDayRain,
              condition: { text: thirdDayCondition, icon: thirdDayIcon },
            },
          },
        ],
      },
    } = responseData;

    const weatherData = {
      location: { locationName, locationRegion, locationCountry, locationTime },
      firstDay: {
        firstDayTempC,
        firstDayTempF,
        firstDayWind,
        firstDayHumidity,
        firstDayRain,
        firstDayCondition,
        firstDayIcon,
        sunrise,
        sunset,
      },
      secondDay: {
        secondDayTempC,
        secondDayTempF,
        secondDayWind,
        secondDayHumidity,
        secondDayRain,
        secondDayCondition,
        secondDayIcon,
      },
      thirdDay: {
        thirdDayTempC,
        thirdDayTempF,
        thirdDayWind,
        thirdDayHumidity,
        thirdDayRain,
        thirdDayCondition,
        thirdDayIcon,
      },
    };
    return weatherData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
}

const updateUI = (weather) => {
  const location = document.querySelector('#location');

  location.textContent = `${weather.location.locationName}, ${
    weather.location.locationRegion
  }, ${
    weather.location.locationCountry
  } at ${weather.location.locationTime.slice(-5)} local time`;
};

// TODO: separate fetch from UI display so that it's not a constant refresh/fetch, only get new data after a time, or after a refresh

// Initialize UI with IP address weather

document.querySelector('#search_button').addEventListener('click', () => {
  const searchValue = document.querySelector('#search_location').value;
  fetchWeather(searchValue).then((weather) => {
    updateUI(weather);
  });
});

fetchWeather('azpeitia').then((weather) => {
  updateUI(weather);
});
// function fetchWeather() {
//   return (response = new Promise((resolve, reject) =>
//     fetch(
//       'http://api.weatherapi.com/v1/forecast.json?key=ad93355e721349a09c8150136242801&q=auto:ip&days=3',
//       { mode: 'cors' }
//     )
//       .then((response) => response.json())
//       .then((response) =>
//         console.log(`${response.location.name}, ${response.current.temp_c}Cº`)
//       )
//   ));
// }
