import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PolicyDescriptionTitle from '../molecules/PolicyDescriptionTitle';
import { CONTENT_MARGIN } from '../../constants/figure';

const PolicyDescriptionList = () => {
    return (
        <View
            style={{
                backgroundColor: '#eef1f2',
                paddingLeft: CONTENT_MARGIN,
                paddingRight: CONTENT_MARGIN,
                paddingTop: 7,
                paddingBottom: 31,
            }}
        >
            {/* 상품안내 */}
            <PolicyDescriptionTitle
                title='상품안내'
            />

            {/* 환불안내 */}
            <PolicyDescriptionTitle
                title='환불안내'
            />

            {/* 결제안내 */}
            <PolicyDescriptionTitle
                title='결제안내'
            />
            
            {/* 문의 */}
            <PolicyDescriptionTitle
                title='문의'
            />
        </View>
    );
}

export default PolicyDescriptionList;
