import React from "react";
import {
    View,
    StyleSheet,
} from 'react-native';

import BoxItem from "../../atoms/BoxItem";

import { boxProductInfo } from "../../../constants/types";

const BoxItemContainer = (item: boxProductInfo) => {
    return (
        <View
            style={styles.container}
        >
            <BoxItem item={item} />
        </View>
    );
}

export default BoxItemContainer;

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