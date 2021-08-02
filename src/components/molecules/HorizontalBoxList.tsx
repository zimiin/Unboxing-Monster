import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

import BoxItem from './BoxItem';

import { boxProductInfo } from '../../constants/types';

interface horizontalBoxListProps {
    items: boxProductInfo[];
}

const HorizontalBoxList: React.FunctionComponent<horizontalBoxListProps> = props => {
    const boxItems = props.items.map((item) => {
        return (
            <View
                key={item.id}
                style={styles.container}
            >
                <BoxItem item={item}/>
            </View>
        );
    });
    
    return (
        <View>
            <ScrollView
                horizontal={true}
                style={{
                    marginTop: 26,
                }}
                showsHorizontalScrollIndicator={false}
            >
                {boxItems}
            </ScrollView>

        </View>
    );
}

export default HorizontalBoxList;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 15,
    },
});