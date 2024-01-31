import { addDays, format, getDate } from 'date-fns';
import './style.css';
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

// async function fetchWeather(selectedLocation) {
//   // introduce try catch
//   try {
//     const response = await fetch(
//       `http://api.weatherapi.com/v1/forecast.json?key=ad93355e721349a09c8150136242801&q=${selectedLocation}&days=3`,
//       { mode: 'cors' }
//     );
//     const responseData = await response.json();
//     const {
//       location: {
//         name: locationName,
//         region: locationRegion,
//         country: locationCountry,
//         localtime: locationTime,
//       },
//       forecast: {
//         forecastday: [
//           {
//             day: {
//               avgtemp_c: firstDayTempC,
//               avgtemp_f: firstDayTempF,
//               maxwind_kph: firstDayWind,
//               avghumidity: firstDayHumidity,
//               daily_chance_of_rain: firstDayRain,
//               condition: { text: firstDayCondition, icon: firstDayIcon },
//             },
//             astro: { sunrise, sunset },
//           },
//           {
//             day: {
//               avgtemp_c: secondDayTempC,
//               avgtemp_f: secondDayTempF,
//               maxwind_kph: secondDayWind,
//               avghumidity: secondDayHumidity,
//               daily_chance_of_rain: secondDayRain,
//               condition: { text: secondDayCondition, icon: secondDayIcon },
//             },
//           },
//           {
//             day: {
//               avgtemp_c: thirdDayTempC,
//               avgtemp_f: thirdDayTempF,
//               maxwind_kph: thirdDayWind,
//               avghumidity: thirdDayHumidity,
//               daily_chance_of_rain: thirdDayRain,
//               condition: { text: thirdDayCondition, icon: thirdDayIcon },
//             },
//           },
//         ],
//       },
//     } = responseData;

//     const weatherData = {
//       location: { locationName, locationRegion, locationCountry, locationTime },
//       firstDay: {
//         firstDayTempC,
//         firstDayTempF,
//         firstDayWind,
//         firstDayHumidity,
//         firstDayRain,
//         firstDayCondition,
//         firstDayIcon,
//         sunrise,
//         sunset,
//       },
//       secondDay: {
//         secondDayTempC,
//         secondDayTempF,
//         secondDayWind,
//         secondDayHumidity,
//         secondDayRain,
//         secondDayCondition,
//         secondDayIcon,
//       },
//       thirdDay: {
//         thirdDayTempC,
//         thirdDayTempF,
//         thirdDayWind,
//         thirdDayHumidity,
//         thirdDayRain,
//         thirdDayCondition,
//         thirdDayIcon,
//       },
//     };
//     return weatherData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return undefined;
//   }
// }

async function fetchWeather(selectedLocation) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ad93355e721349a09c8150136242801&q=${selectedLocation}&days=3`,
      { mode: 'cors' }
    );
    const responseData = await response.json();

    const processDayData = (dayData) => ({
      tempC: dayData.day.avgtemp_c,
      wind: dayData.day.maxwind_kph,
      humidity: dayData.day.avghumidity,
      rain: dayData.day.daily_chance_of_rain,
      condition: dayData.day.condition.text,
      icon: dayData.day.condition.icon,
      ...(dayData.astro
        ? { sunrise: dayData.astro.sunrise, sunset: dayData.astro.sunset }
        : {}),
    });

    const weatherData = {
      location: {
        locationName: responseData.location.name,
        locationRegion: responseData.location.region,
        locationCountry: responseData.location.country,
        locationTime: responseData.location.localtime,
      },
      firstDay: processDayData(responseData.forecast.forecastday[0]),
      secondDay: processDayData(responseData.forecast.forecastday[1]),
      thirdDay: processDayData(responseData.forecast.forecastday[2]),
    };

    return weatherData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch weather data');
  }
}

// const updateUI = (weather) => {
//   const now = new Date();
//   const tomorrow = addDays(now, 1);
//   const dayAfterTomorrow = addDays(now, 2);
//   const location = document.querySelector('#location');

//   const title1 = document.querySelector('#first_day_title');
//   const icon1 = document.querySelector('#first_day_icon');
//   const condition1 = document.querySelector('#first_day_condition');
//   const temp1 = document.querySelector('#temp_first');
//   const wind1 = document.querySelector('#wind_first');
//   const humidity1 = document.querySelector('#humidity_first');
//   const rain1 = document.querySelector('#rain_first');
//   const sunriseP = document.querySelector('#sunrise');
//   const sunsetP = document.querySelector('#sunset');

//   const title2 = document.querySelector('#second_day_title');
//   const icon2 = document.querySelector('#second_day_icon');
//   const condition2 = document.querySelector('#second_day_condition');
//   const temp2 = document.querySelector('#temp_second');
//   const wind2 = document.querySelector('#wind_second');
//   const humidity2 = document.querySelector('#humidity_second');
//   const rain2 = document.querySelector('#rain_second');

//   const title3 = document.querySelector('#third_day_title');
//   const icon3 = document.querySelector('#third_day_icon');
//   const condition3 = document.querySelector('#third_day_condition');
//   const temp3 = document.querySelector('#temp_third');
//   const wind3 = document.querySelector('#wind_third');
//   const humidity3 = document.querySelector('#humidity_third');
//   const rain3 = document.querySelector('#rain_third');

//   location.textContent = `${weather.location.locationName}, ${
//     weather.location.locationRegion
//   }, ${
//     weather.location.locationCountry
//   } at ${weather.location.locationTime.slice(-5)} local time`;

//   title1.textContent = `Today ${format(now, 'iii d MMM')}`;
//   icon1.src = weather.firstDay.firstDayIcon;
//   condition1.textContent = weather.firstDay.firstDayCondition;
//   temp1.textContent = `${weather.firstDay.firstDayTempC}ºC`;
//   wind1.textContent = `${weather.firstDay.firstDayWind} Km/h`;
//   humidity1.textContent = `${weather.firstDay.firstDayHumidity} %`;
//   rain1.textContent = `${weather.firstDay.firstDayRain} %`;
//   sunriseP.textContent = `${weather.firstDay.sunrise}`;

//   title2.textContent = `${format(tomorrow, 'iii d MMM')}`;
//   icon2.src = weather.secondDay.secondDayIcon;
//   condition2.textContent = weather.secondDay.secondDayCondition;
//   temp2.textContent = `${weather.secondDay.secondDayTempC}ºC`;
//   wind2.textContent = `${weather.secondDay.secondDayWind} Km/h`;
//   humidity2.textContent = `${weather.secondDay.secondDayHumidity} %`;
//   rain2.textContent = `${weather.secondDay.secondDayRain} %`;

//   title3.textContent = `${format(dayAfterTomorrow, 'iii d MMM')}`;
//   icon3.src = weather.thirdDay.thirdDayIcon;
//   condition3.textContent = weather.thirdDay.thirdDayCondition;
//   temp3.textContent = `${weather.thirdDay.thirdDayTempC}ºC`;
//   wind3.textContent = `${weather.thirdDay.thirdDayWind} Km/h`;
//   humidity3.textContent = `${weather.thirdDay.thirdDayHumidity} %`;
//   rain3.textContent = `${weather.thirdDay.thirdDayRain} %`;
//   sunsetP.textContent = `${weather.firstDay.sunset}`;
// };

const updateDailyWeather = (weatherDay, elements, dayLabel) => {
  elements.title.textContent = `${format(dayLabel, 'iii d MMM')}`;
  elements.icon.src = weatherDay.icon;
  elements.condition.textContent = weatherDay.condition;
  elements.temperature.textContent = `${weatherDay.tempC}ºC`;
  elements.wind.textContent = `${weatherDay.wind} Km/h`;
  elements.humidity.textContent = `${weatherDay.humidity} %`;
  elements.rain.textContent = `${weatherDay.rain} %`;
};

const updateUI = (weather) => {
  const now = new Date();
  const tomorrow = addDays(now, 1);
  const dayAfterTomorrow = addDays(now, 2);

  // Update location and times
  document.querySelector('#location').textContent = `${
    weather.location.locationName
  }, ${weather.location.locationRegion}, ${
    weather.location.locationCountry
  } at ${weather.location.locationTime.slice(-5)} local time`;
  document.querySelector('#sunrise').textContent =
    `${weather.firstDay.sunrise}`;
  document.querySelector('#sunset').textContent = `${weather.firstDay.sunset}`;

  // Daily updates
  const days = [weather.firstDay, weather.secondDay, weather.thirdDay];
  const dayLabels = [now, tomorrow, dayAfterTomorrow];
  const elementsArray = [
    {
      title: document.querySelector('#first_day_title'),
      icon: document.querySelector('#first_day_icon'),
      condition: document.querySelector('#first_day_condition'),
      temperature: document.querySelector('#temp_first'),
      wind: document.querySelector('#wind_first'),
      humidity: document.querySelector('#humidity_first'),
      rain: document.querySelector('#rain_first'),
    },
    {
      title: document.querySelector('#second_day_title'),
      icon: document.querySelector('#second_day_icon'),
      condition: document.querySelector('#second_day_condition'),
      temperature: document.querySelector('#temp_second'),
      wind: document.querySelector('#wind_second'),
      humidity: document.querySelector('#humidity_second'),
      rain: document.querySelector('#rain_second'),
    },
    {
      title: document.querySelector('#third_day_title'),
      icon: document.querySelector('#third_day_icon'),
      condition: document.querySelector('#third_day_condition'),
      temperature: document.querySelector('#temp_third'),
      wind: document.querySelector('#wind_third'),
      humidity: document.querySelector('#humidity_third'),
      rain: document.querySelector('#rain_third'),
    },
  ];

  days.forEach((day, index) => {
    updateDailyWeather(day, elementsArray[index], dayLabels[index]);
  });
};

// Example structure for weatherDay
// weatherDay = {
//   icon: 'url_to_icon',
//   condition: 'Sunny',
//   tempC: 20,
//   wind: 10,
//   humidity: 50,
//   rain: 10
// };

// Initialize UI with IP address weather

document.querySelector('#search_button').addEventListener('click', () => {
  const searchValue = document.querySelector('#search_location').value;
  try {
    fetchWeather(searchValue).then((weather) => {
      updateUI(weather);
    });
  } catch (error) {}
});

document.querySelector('#temperature_toggle').addEventListener('click', (e) => {
  if (e.target.textContent === 'Celsius') {
    e.target.textContent = 'Farhenheit';
    document.querySelectorAll('.temperatures').forEach((temperature) => {
      temperature.textContent = `${convertTemperature(
        parseFloat(temperature.textContent.slice(0, -2)),
        'C'
      )}ºF`;
    });
  } else {
    e.target.textContent = 'Celsius';
    document.querySelectorAll('.temperatures').forEach((temperature) => {
      temperature.textContent = `${convertTemperature(
        parseFloat(temperature.textContent.slice(0, -2)),
        'F'
      )}ºC`;
    });
  }
});

document.querySelector('#search_location').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const searchValue = e.target.value;
    fetchWeather(searchValue).then((weather) => {
      updateUI(weather);
    });
  }
});

fetchWeather('auto:ip').then((weather) => {
  updateUI(weather);
});

function convertTemperature(value, unit) {
  if (unit === 'C') {
    // Convert from Celsius to Fahrenheit
    return Math.round(((value * 9) / 5 + 32) * 10) / 10;
  }
  if (unit === 'F') {
    // Convert from Fahrenheit to Celsius
    return Math.round((((value - 32) * 5) / 9) * 10) / 10;
  }
  // Handle invalid unit
  return 'Invalid unit';
}
