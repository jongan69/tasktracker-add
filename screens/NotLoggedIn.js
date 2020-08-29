// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as React from 'react';

import {SignupScreen} from './SignupScreen';

const Stack = createStackNavigator();

function NotLoggedIn() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NotLoggedIn;
