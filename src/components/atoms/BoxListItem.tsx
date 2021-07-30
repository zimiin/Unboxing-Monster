import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const BoxListItem = ({image, title, price}: {image: string, title: string, price: number}) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                }}
            >
                <Image
                    source={{uri: image}}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginTop: 13,
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        color: 'rgba(6, 6, 6, 0.5)',
                        marginTop: 1,
                    }}
                >
                    정가 {price}원
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default BoxListItem;
