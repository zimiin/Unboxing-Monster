import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import SubTitle from '../atoms/typography/SubTitle';
import Body from '../atoms/typography/Body';

const BoxInfoDetail = ({title, detail}: {title: string, detail: string}) => {
    return (
        <View>
            <SubTitle
                subTitle={title}
            />

            <View
                style={{
                    marginTop: 4,
                }}
            >
                <Body
                    detail={detail}
                />

            </View>
        </View>
    );
}

export default BoxInfoDetail;
