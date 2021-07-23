import React from 'react';
import {
    FlatList,
    View,
} from 'react-native';

import VerticalBoxList from '../../components/verticalBoxList';
import BoxItem from '../../components/verticalBoxList/BoxItem';
import boxItems from '../../data/boxItems';

const BoxProductList = () => {
    return (
        
        // <VerticalBoxList 
        //     items={boxItems}
        // />
        // <FlatList
        //     nestedScrollEnabled={true}
        //     data={boxItems}
        //     renderItem={boxItem}
        //     numColumns={2}
        //     contentContainerStyle={{
        //         alignItems: 'center',
        //     }}
        // />
        <VerticalBoxList items={boxItems} />
    );
}

export default BoxProductList;