import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import CustomBox from './CustomBox';
import Storage from './Storage';
import MyPage from './MyPage';
import TabIcon from '../atoms/TabIcon';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName= "Home"
            screenOptions={({route}) => ({
              tabBarIcon: ({ focused, color, size }) => 
                <TabIcon tabName={route.name} /> 
            })}
            tabBarOptions={{
                showLabel: false,
                tabStyle: {
                    height: 50,
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="CustomBox" component={CustomBox} />
            <Tab.Screen name="Storage" component={Storage} />
            <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
    );
}

export default Main;