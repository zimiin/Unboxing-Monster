import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import { SCREEN_WIDTH } from '../../constants/figure';

const BoxInfoImage = ({image}: {image: string}) => {
    return (
        
            <Image
                source={{uri: image}}
                style={{
                    flex: 1,
                    width: undefined,
                    height: undefined,
                }}
                resizeMode='contain'
            />
    );
}

export default BoxInfoImage;
