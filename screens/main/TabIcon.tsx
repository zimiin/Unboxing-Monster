import React from 'react';
import {
    Image
} from 'react-native';

interface TabIconProps {
    tabName: string;
}

const TabIcon: React.FunctionComponent<TabIconProps> = (props) => {
    let iconPath;
    if (props.tabName === 'Home') {
        iconPath = require('../../data/tabIcon/Home.png');
    } else if (props.tabName === 'CustomBox') {
        iconPath = require('../../data/tabIcon/CustomBox.png');
    } else if (props.tabName === 'Storage') {
        iconPath = require('../../data/tabIcon/Storage.png');
    } else if (props.tabName === 'MyPage') {
        iconPath = require('../../data/tabIcon/MyPage.png');
    }

    return (
        <Image 
            source={iconPath}
            resizeMethod={'auto'}
            style={{
                width: 20,
                height: 20,
            }}
        />
    );
}

export default TabIcon;