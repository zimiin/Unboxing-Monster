import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BoxItem from './BoxItem';

import { boxProductInfo } from '../../types';

const TwoColumnBoxList = ({ items }: { items: boxProductInfo[] }) => {
    const boxItems = items.map((item) => 
        <BoxItem 
            key={item.id}
            item={item}
        />);

    return (
        <View style={styles.container}>
            {boxItems}
        </View>
    );
}

export default TwoColumnBoxList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        alignSelf: 'center',
        marginTop: 60,
    }
});