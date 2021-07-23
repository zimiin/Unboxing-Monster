import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import HorizontalBoxList from '../../components/horizontalBoxList';
import boxItems from '../../data/boxItems';

const HotBoxList = () => {
    return (
        <View>
            <Text
                style={{
                    marginTop: 57,
                    marginLeft: 24,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >
                인기 박스
            </Text>

            {/* 데이터 넘겨주기 */}
            <HorizontalBoxList items={boxItems}/>
        </View>
    );
}

export default HotBoxList;