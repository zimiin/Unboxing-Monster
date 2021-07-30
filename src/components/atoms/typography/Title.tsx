import React from 'react';
import {
    Text,
} from 'react-native';

const Title = ({content}: {content: string}) => {
    return (
        <Text
            style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}
        >
            {content}
        </Text>
    );
}

export default Title;
