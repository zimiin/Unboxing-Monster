import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Main from './screens/main';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      
      <Stack.Screen 
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'powderblue',
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
