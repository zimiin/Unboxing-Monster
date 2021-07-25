import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import { boxProductInfo } from '../../types';

import BoxItem from './BoxItemContainer';

interface horizontalBoxListProps {
    items: boxProductInfo[];
}

const HorizontalBoxList: React.FunctionComponent<horizontalBoxListProps> = props => {
    const boxItems = props.items.map((item) =>
        <BoxItem
            key={item.id}
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