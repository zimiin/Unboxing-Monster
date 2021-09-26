import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabIcon from '@components/atoms/icon/TabIcon'
import HomeStack from '@components/navigations/HomeStack'
import CustomBoxStack from '@components/navigations/CustomBoxStack'
import StorageStack from '@components/navigations/StorageStack'
import MyPageStack from '@components/navigations/MyPageStack'
import { BottomTabParamList } from '@constants/navigationTypes'
import { Platform } from 'react-native'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          <TabIcon tabName={route.name} focused={focused} />,
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          height: 50,
        },
        keyboardHidesTabBar: (Platform.OS === "ios" ? false : true)
      }}
    >
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="CustomBox" component={CustomBoxStack} />
      <BottomTab.Screen name="Storage" component={StorageStack} />
      <BottomTab.Screen name="MyPage" component={MyPageStack} />
    </BottomTab.Navigator>
  )
}

export default MainBottomTab