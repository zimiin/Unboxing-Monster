import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import HorizontalBoxList from './horizontalBoxList';

import boxItems from '../../assets/data/boxItems';

const HotBoxList = () => {
    return (
        <View>
            <Text style={styles.title}>
                인기 박스
            </Text>
        
            <HorizontalBoxList items={boxItems}/>
        </View>
    );
}

export default HotBoxList;

const styles = StyleSheet.create({
    title: {
        marginTop: 57,
        marginLeft: 24,
        fontSize: 18,
        fontWeight: 'bold',
    }
});