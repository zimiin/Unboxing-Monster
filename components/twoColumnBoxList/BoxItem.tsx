import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { boxProductInfo } from '../../types';

const boxItem = ({ item }: {item: boxProductInfo}) => {
    return (
        <View style={styles.container}>
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
        </View>
    );
}

export default boxItem;

const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginBottom: 28,
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 81,
        backgroundColor: 'black',
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
});