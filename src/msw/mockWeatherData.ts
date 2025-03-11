import { faker } from '@faker-js/faker';
import { WeatherData } from '@typings/weatherTypes';

export const generateWeatherData = (): WeatherData => ({
  id: faker.number.int(),
  name: faker.location.city(),
  coord: {
    lon: faker.location.longitude(),
    lat: faker.location.latitude(),
  },
  main: {
    temp: faker.number.float({ min: -30, max: 40 }),
    feels_like: faker.number.float({ min: -30, max: 40 }),
    temp_min: faker.number.float({ min: -30, max: 40 }),
    temp_max: faker.number.float({ min: -30, max: 40 }),
    pressure: faker.number.int({ min: 900, max: 1100 }),
    sea_level: faker.number.int({ min: 900, max: 1100 }),
    grnd_level: faker.number.int({ min: 900, max: 1100 }),
    humidity: faker.number.int({ min: 0, max: 100 }),
  },
  wind: {
    speed: faker.number.float({ min: 0, max: 30 }),
    deg: faker.number.int({ min: 0, max: 360 }),
  },
  clouds: {
    all: faker.number.int({ min: 0, max: 100 }),
  },
  weather: [
    {
      id: faker.number.int(),
      main: faker.lorem.word(),
      description: faker.lorem.sentence(),
      icon: faker.lorem.word(),
    },
    // You can add more weather objects here if needed
  ],
  sys: {
    country: faker.location.countryCode(),
    timezone: faker.number.int({ min: -43200, max: 43200 }), // Timezone in seconds
    sunrise: faker.date.future().getTime() / 1000, // Unix timestamp
    sunset: faker.date.future().getTime() / 1000, // Unix timestamp
  },
  dt: faker.date.future().getTime() / 1000, // Unix timestamp
  visibility: faker.number.int({ min: 0, max: 10000 }),
});

export const generateWeatherDataList = (count: number): WeatherData[] => {
  const weatherDataList: WeatherData[] = [];
  for (let i = 0; i < count; i++) {
    weatherDataList.push(generateWeatherData());
  }
  return weatherDataList;
};
