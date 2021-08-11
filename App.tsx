import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashPage from '@components/pages/SplashPage'
import Auth from '@components/pages/Auth'
import Main from '@components/navigations/Main'
import { RootStackParamList } from '@constants/types'
import { useState } from 'react'
import AppContext from '@src/AppContext'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  const [cart, setCart] = useState(new Map())
  
  // 질문) 여기 어떤 방식으로 cart 값을 업데이트 하는게 좋을까?
  // curCart = cart는 cart state을 직접적으로 바꾸는 것 같고,
  // Object.assign() 을 쓰는게 맞나?
  const addBoxToCart = (boxId: number, count: number) => {
    let curCart = cart

    if (curCart.has(boxId)) {
        curCart.set(boxId, curCart.get(boxId) + count)
        if (curCart.get(boxId) < 0) {
          curCart.set(boxId, 0)
        }
    } else {
      curCart.set(boxId, count)
    }

    setCart(curCart)
    // console.log(cart)
  }

  const globalStates = {
    cart: cart,
    addBoxToCart,
  }

  return (
    <AppContext.Provider value={globalStates}>
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
            component={SplashPage}
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
    </AppContext.Provider>
  )
}

export default App
