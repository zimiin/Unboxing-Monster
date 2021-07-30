import React from 'react';
import {
    Text,
    View,
} from 'react-native';

const BoxPriceInfo = ({price}: {price: number}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "500",
                }}
            >
                {price}
            </Text>

            <Text
                style={{
                    fontSize: 16,
                    marginLeft: 3,
                    fontWeight: "500",
                }}
            >
                원
            </Text>
        </View>
    );
}

export default BoxPriceInfo;
