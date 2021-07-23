import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Main from './screens/Main';
import { RootStackParamList } from './types';

import {
  View,
  Text,
} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

// const TestTitle = () => {
//   return (
//     <View style={{backgroundColor: 'red', width: '100%'}}>
//       <Text>This is header!</Text>
//     </View>
//   );
// }

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
        // 헤더에 검색창 넣는법을 모르겠다...!! 꼭 헤더에 넣어야할지도
        // 아래처럼 코드짜면 TestTitle에 타입 에러가 나는데 뭔지 잘 모르겠음
        // options={{ headerTitle: props => <TestTitle {...props} />}}
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
