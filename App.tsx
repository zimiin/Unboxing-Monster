import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/components/pages/Splash';
import Auth from './src/components/pages/Auth';
import Main from './src/components/pages/Main';

import { RootStackParamList } from './src/constants/types';
import BoxInfoTemplate from './src/components/templates/BoxInfoTemplate';
import BoxInfoPage from './src/components/pages/BoxInfoPage'

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
    {/* <Stack.Navigator initialRouteName="test">
      <Stack.Screen
        name="test"
        component={BoxInfoPage}
        options={{headerShown: true}}
      /> */}
    
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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
