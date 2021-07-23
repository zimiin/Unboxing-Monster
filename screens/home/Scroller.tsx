import React from 'react';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';

const SCROLLER_WIDTH = Dimensions.get('window').width - 48;

const Scroller = () => {
    return (
        <View
            style={{
                width: SCROLLER_WIDTH,
                height: 48,
                backgroundColor: '#535353',
                alignSelf: 'center',
                position: 'absolute',
                top: 228,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#29a3ff',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    color: '#fffffc',
                    fontSize: 15,
                }}
            >
                User***님이 최상급 한우에 당첨되셨습니다.
            </Text>
        </View>
    );
}

export default Scroller;