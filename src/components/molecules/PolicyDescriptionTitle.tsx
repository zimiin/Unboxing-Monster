import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { CONTENT_WIDTH } from '../../constants/figure';
import { ICONS } from '../../constants/icons';
import SubTitle from '../atoms/typography/SubTitle';

const PolicyDescriptionTitle = ({title}: {title: string}) => {
    return (
        <TouchableOpacity
            style={{
                width: CONTENT_WIDTH,
                paddingTop: 21,
                paddingBottom: 20,
                // backgroundColor: 'orange',
                borderBottomColor: 'rgba(6, 6, 6, 0.15)',
                borderBottomWidth: 1,
                justifyContent: 'center',
            }}
            activeOpacity={1}
        >
            <SubTitle
            // TODO 실제 타이틀로
                subTitle={title} 
            />

            <Image
                source={ICONS.downArrow}
                style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    right: 0,
                }}
            />
        </TouchableOpacity>
    );
}

export default PolicyDescriptionTitle;
