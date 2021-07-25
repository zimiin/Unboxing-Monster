import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import HorizontalBoxList from '../molecules/HorizontalBoxList';

import boxItems from '../../assets/data/boxItems';

const CustomBoxList = () => {
    return (
        <View>
            <Text style={styles.title}>
                실시간 커스텀 박스
            </Text>

            <HorizontalBoxList items={boxItems}/>
        </View>
    );
}

export default CustomBoxList;

const styles = StyleSheet.create({
    title: {
        marginTop: 36,
        marginLeft: 24,
        fontSize: 18,
        fontWeight: 'bold',
    }
});