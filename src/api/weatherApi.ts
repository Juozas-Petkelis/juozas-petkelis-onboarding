import { queryOptions } from '@tanstack/react-query';
import { WeatherListResponse } from '@typings/weatherTypes';
import axios from 'axios';
import { CITIES_GEO_IDS } from 'constants/geoLocations';
import { weatherBaseUrl, weatherUrls } from 'constants/weatherConstants';
import Config from 'react-native-config';

const apiClientInstance = axios.create({
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
  try {
    const response = await apiClientInstance.get<WeatherListResponse>(
      weatherUrls.list,
      {
        params: {
          id: CITIES_GEO_IDS.join(','),
        },
      }
    );

    return response.data;
  } catch (error) {
    //TODO error handling
  }
};
