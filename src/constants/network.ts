const weatherApiVersion = 2.5;
export const openWeatherBaseUrl = `https://api.openweathermap.org/data/${weatherApiVersion}`;

export const openWeatherUrls = {
  list: 'group',
  details: 'weather',
};

console.log('openWeatherBaseUrl ', openWeatherBaseUrl);
