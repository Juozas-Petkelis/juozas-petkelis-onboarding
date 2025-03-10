import { RouteProp } from '@react-navigation/native';

import { WeatherData } from './weatherTypes';

export const enum Screens {
  WeatherList = 'WeatherList',
  WeatherDetails = 'WeatherDetails',
}

export type RootStackParamList = {
  [Screens.WeatherList]: undefined;
  [Screens.WeatherDetails]: { weatherData: WeatherData };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type TypedRoute<Screen extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Screen
>;
