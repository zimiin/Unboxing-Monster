import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../atoms/icon/TabIcon';
import HomeStack from './HomeStack';
import CustomBoxStack from './CustomBoxStack';
import StorageStack from './StorageStack'
import MyPageStack from './MyPageStack';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName= "Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => 
                    <TabIcon tabName={route.name} focused={focused} />,
                }
            )}
            tabBarOptions={{
                showLabel: false,
                tabStyle: {
                    height: 50,
                }
            }}
            
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="CustomBox" component={CustomBoxStack} />
            <Tab.Screen name="Storage" component={StorageStack} />
            <Tab.Screen name="MyPage" component={MyPageStack} />
        </Tab.Navigator>
    );
}

export default Main;