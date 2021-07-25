import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import BoxItem from "../../atoms/BoxItem";

import { boxProductInfo } from '../../../constants/types';

const BoxItemContainer = ({ item }: {item: boxProductInfo}) => {
    return (
        <View style={styles.container}>
            <BoxItem item={item} />
        </View>
    );
}

export default BoxItemContainer;

const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginBottom: 28,
        alignItems: 'center',
    },
});