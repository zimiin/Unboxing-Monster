import React from 'react';
import {
    View,
} from 'react-native';

import { boxProductInfo } from '../../types';
import boxItem from './BoxItem';
import BoxItem from './BoxItem';

interface verticalBoxListProps {
    items: boxProductInfo[];
}

const VerticalBoxList: React.FunctionComponent<verticalBoxListProps> = props => {
    // const makeRows = () => {
    //     let result = [];

        
    //     props.items.map((item)=>{
    //         result.push(
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     marginBottom: 25,
    //                 }}
    //             >
    //                 <BoxItem item={item}/>
    //             </View>
    //         )
    //     });
        
    //     return result;
    // }

    // const rowsOfBoxes = makeRows();

    const boxItems = props.items.map((item)=><BoxItem item={item}/>)

    return (
        // <View
        //     style={{
        //         marginTop: 41,
        //         alignItems: 'center',
        //     }}
        // >
        //     {rowsOfBoxes}
        // </View>

        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 300,
                alignSelf: 'center',
                marginTop: 60,
            }}
        >
            {boxItems}

        </View>
    );
}

export default VerticalBoxList;