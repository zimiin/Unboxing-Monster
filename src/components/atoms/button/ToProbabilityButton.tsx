import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

import { CONTENT_WIDTH } from '../../../constants/figure';

const ToProbabilityButton = () => {
    return (
        <TouchableOpacity
            style={{
                width: CONTENT_WIDTH,
                height: 48,
                backgroundColor: '#eef1f2',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}
        >
            <Text
                style={{
                    color: '#060606',
                    fontSize: 14,

                }}
            >
                자세한 확률 알아보기
            </Text>

        </TouchableOpacity>
    );
}

export default ToProbabilityButton;