import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import HorizontalBoxList from '../../components/horizontalBoxList';
import boxItems from '../../data/boxItems';

const CustomBoxList = () => {
    return (
        <View>
            <Text
                style={{
                    marginTop: 36,
                    marginLeft: 24,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >
                실시간 커스텀 박스
            </Text>

            <HorizontalBoxList items={boxItems}/>
        </View>
    );
}

export default CustomBoxList;