import { addDays, format } from 'date-fns';
import './style.css';

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

function parseTimeTo24HourFormat(timeString) {
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}

function formatTime(timeString) {
  const time24Hour = parseTimeTo24HourFormat(timeString);
  const [hours, minutes] = time24Hour.split(':');

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return format(date, 'H:mm');
}
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
  document.querySelector('#sunrise').textContent = `${formatTime(
    weather.firstDay.sunrise
  )}`;
  document.querySelector('#sunset').textContent = `${formatTime(
    weather.firstDay.sunset
  )}`;

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
    document.querySelectorAll('.temperature_texts').forEach((temperature) => {
      temperature.textContent = `${convertTemperature(
        parseFloat(temperature.textContent.slice(0, -2)),
        'C'
      )}ºF`;
    });
  } else {
    e.target.textContent = 'Celsius';
    document.querySelectorAll('.temperature_texts').forEach((temperature) => {
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
