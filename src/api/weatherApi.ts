import { queryOptions } from '@tanstack/react-query';
import type { WeatherListResponse } from '@typings/weatherTypes';
import axios from 'axios';
import { CITIES_GEO_IDS } from 'constants/geoLocations';
import { weatherBaseUrl, weatherUrl } from 'constants/weatherConstants';
import Config from 'react-native-config';

const weatherApi = axios.create({
  baseURL: weatherBaseUrl,
  params: {
    appId: Config.OPEN_WEATHER_API_KEY,
    units: 'metric',
  },
});

export enum WeatherQueryKeys {
  WeatherList = 'WeatherList',
}

export const weatherQueries = {
  weatherList: () =>
    queryOptions({
      queryKey: [WeatherQueryKeys.WeatherList],
      queryFn: fetchWeatherList,
    }),
};

const fetchWeatherList = async () => {
  const response = await weatherApi.get<WeatherListResponse>(weatherUrl.list, {
    params: {
      id: CITIES_GEO_IDS.join(','),
    },
  });

  return response.data;
};
