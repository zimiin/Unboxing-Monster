import React from 'react'
import {
    TouchableOpacity,
    Text,
    Image,
} from 'react-native'

import { ICONS } from '../../../constants/icons'

const ToIntroButton = () => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    color: '#29a3ff',
                }}
            >
                어떻게 언박싱이 공정함을 갖나요?
            </Text>

            <Image
                source={ICONS.info}
                style={{
                    width: 16,
                    height: 16,
                    marginLeft: 6,
                }}
            />

        </TouchableOpacity>
    );
}

export default ToIntroButton;