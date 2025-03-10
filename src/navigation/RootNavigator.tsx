import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { WeatherDetailsScreen } from '@screens/WeatherDetailsScreen';
import { WeatherListScreen } from '@screens/WeatherListScreen';
import { RootStackParamList, Screens } from '@typings/navigation.types';
import React from 'react';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const WeatherListOptions: NativeStackNavigationOptions = {
  title: 'Weather',
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={WeatherListOptions}
          name={Screens.WeatherList}
          component={WeatherListScreen}
        />
        <RootStack.Screen
          name={Screens.WeatherDetails}
          component={WeatherDetailsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
