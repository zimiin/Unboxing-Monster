import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { boxProductInfo } from '../../types';

import BoxItem from './BoxItem';

interface horizontalBoxListProps {
    items: boxProductInfo[];
}

const HorizontalBoxList: React.FunctionComponent<horizontalBoxListProps> = props => {
    const boxItems = props.items.map((item) =>
        <BoxItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
        />
    );
    
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