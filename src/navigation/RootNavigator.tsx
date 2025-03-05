import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WeatherListScreen } from '@screens/WeatherListScreen';
import { Screens } from '@typings/navigation.types';
import React from 'react';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            title: 'Weather',
          }}
          name={Screens.WeatherList}
          component={WeatherListScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
