import React from 'react';
import {
    View,
} from 'react-native';
import SubTitle from '@components/atoms/typography/SubTitle';
import Body from '@components/atoms/typography/Body';

const BoxInfoDetail = ({title, detail}: {title: string, detail: string}) => {
    return (
        <View>
            <SubTitle
                content={title}
            />

            <View
                style={{
                    marginTop: 4,
                }}
            >
                <Body
                    content={detail}
                />

            </View>
        </View>
    );
}

export default BoxInfoDetail;
