import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import { boxProductInfo } from '../types';

const BoxItem = ({ item }: { item: boxProductInfo }) => {
    const handlePress = () => {
        // TODO
        // 박스 상세 페이지로 이동
        // 스택에 쌓아야 하는데...
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <Image
                source={{uri: item.image}}
                style={styles.image}
            />

            <Text style={styles.name}>
                {item.name}
            </Text>

            <Text style={styles.price}>
                {item.price}원
            </Text>
        </TouchableOpacity>
    );
}

export default BoxItem;

const styles = StyleSheet.create({
    image: {
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