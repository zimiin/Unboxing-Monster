import React from 'react';
import {
    Text,
} from 'react-native';

const HeaderTitle = ({ content }: { content: string }) => {
    return (
        <Text
            style={{
                fontWeight: 'bold',
                fontSize: 17,
            }}
        >
            {content}
        </Text>
    );
}

export default HeaderTitle;
