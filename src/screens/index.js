import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Here are all the app screens
import Splash from './splash';
import Welcome from './welcome';
import Tapume from './tapume';

const Stack = createStackNavigator();

function Router(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tapume"
          component={Tapume}
          options={{title: 'I am a placeholder', headerLeft: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome, Cyborg \\o/', headerLeft: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
