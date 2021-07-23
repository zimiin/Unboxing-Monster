import React from "react";
import {
    Image,
    View,
    Text,
} from 'react-native';
import { boxProductInfo } from "../../types";

const BoxItem = (item: boxProductInfo) => {
    return (
        <View
            style={{
                alignItems: 'center',
                marginRight: 15,
            }}
        >
            <Image
                source={{uri: item.image}}
                style={{
                    width: 110,
                    height: 81,
                    backgroundColor: 'black',
                }}
            />

            <Text
                style={{
                    marginTop: 19,
                    fontWeight: 'bold',
                    fontSize: 14,
                }}    
            >
                {item.name}
            </Text>

            <Text
                style={{
                    marginTop: 1,
                    color: '#060606',
                    fontSize: 12,
                }}
            >
                {/* 콤마 찍어주기 */}
                {item.price}원
            </Text>
        </View>
    );
}

export default BoxItem;