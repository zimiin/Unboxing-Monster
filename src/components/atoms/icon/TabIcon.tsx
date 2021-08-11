import React from 'react';
import {
    Image
} from 'react-native';

import { ICONS } from '@constants/icons';

const TabIcon = ({ tabName, focused }: {tabName: string, focused: boolean }) => {
    let icon;
    if (tabName === 'Home') {
        icon = focused ? ICONS.home_focused : ICONS.home;
    } else if (tabName === 'CustomBox') {
        icon = focused ? ICONS.customBox_focused : ICONS.customBox;
    } else if (tabName === 'Storage') {
        icon = focused ? ICONS.storage_focused : ICONS.storage;
    } else if (tabName === 'MyPage') {
        icon = focused ? ICONS.myPage_focused : ICONS.myPage;
    }

    return (
        <Image 
            source={icon}
            resizeMethod={'auto'}
            style={{
                width: 20,
                height: 20,
            }}
        />
    );
}

export default TabIcon;