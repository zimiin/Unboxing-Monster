import React from 'react'
import {
    Image,
    ImageSourcePropType,
} from 'react-native'
import FastImage from 'react-native-fast-image';
import { SCREEN_WIDTH } from '@constants/figure';

const BoxInfoImage = ({ image }: { image: string}) => {
    return (
        <FastImage
            source={{uri: image}}
            style={{
                flex: 1,
                width: SCREEN_WIDTH,
                height: SCREEN_WIDTH,
            }}
            resizeMode='contain'
        />
    );
}

export default BoxInfoImage
