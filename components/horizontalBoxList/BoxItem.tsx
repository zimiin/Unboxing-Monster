import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { boxProductInfo } from "../../types";

const BoxItem = (item: boxProductInfo) => {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={{uri: item.image}}
                style={styles.boxImage}
            />

            <Text style={styles.name}>
                {item.name}
            </Text>

            <Text style={styles.price}>
                {/* TODO 콤마 찍어주기 */}
                {item.price}원
            </Text>
        </View>
    );
}

export default BoxItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 15,
    },
    boxImage: {
        width: 110,
        height: 81,
    },
    name: {
        marginTop: 19,
        fontWeight: 'bold',
        fontSize: 14,
    },
    price: {
        marginTop: 1,
        color: '#060606',
        fontSize: 12,
    }
})