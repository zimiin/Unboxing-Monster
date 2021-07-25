import React from 'react';
import {
    Image
} from 'react-native';

import { ICONS } from '../../constants/icons';

const TabIcon = ({ tabName }: {tabName: string}) => {
    let icon;
    if (tabName === 'Home') {
        icon = ICONS.homeTab;
    } else if (tabName === 'CustomBox') {
        icon = ICONS.customBoxTab;
    } else if (tabName === 'Storage') {
        icon = ICONS.storageTab;
    } else if (tabName === 'MyPage') {
        icon = ICONS.myPageTab;
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