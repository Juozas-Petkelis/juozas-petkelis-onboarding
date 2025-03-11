import { WeatherListResponse } from '@typings/weatherTypes';
import { weatherBaseUrl, weatherUrl } from 'constants/weatherConstants';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { generateWeatherDataList } from './mockWeatherData';

export const server = setupServer(
  http.get(`${weatherBaseUrl}/${weatherUrl.list}`, async () => {
    const weatherDataList = generateWeatherDataList(10);
    return HttpResponse.json<WeatherListResponse>({
      cnt: weatherDataList.length,
      list: weatherDataList,
    });
  })
);
