import React from 'react';
import {
    Text,
} from 'react-native';

const SubTitle = ({content}: {content: string}) => {
    return (
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
            }}
        >
            {content}
        </Text>
    );
}

export default SubTitle;