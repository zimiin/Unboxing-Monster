import React from 'react';
import {
    View,
} from 'react-native';

import { CONTENT_WIDTH } from '../../constants/figure';

const GreyHr = () => {
    return (
        <View
            style={{
                width: CONTENT_WIDTH,
                borderBottomColor: '#060606',
                borderBottomWidth: 1,
            }}
        />
    );
}

export default GreyHr;
