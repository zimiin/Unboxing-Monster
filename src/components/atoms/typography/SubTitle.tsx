import React from 'react';
import {
    Text,
} from 'react-native';

const SubTitle = ({subTitle}: {subTitle: string}) => {
    return (
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
            }}
        >
            {subTitle}
        </Text>
    );
}

export default SubTitle;