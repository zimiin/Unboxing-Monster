import React from "react";
import {
    Image,
    View,
    Text,
} from 'react-native';
import { boxProductInfo } from '../../types';

interface boxItemProps {
    item: boxProductInfo;
}

const boxItem: React.FunctionComponent<boxItemProps> = props => {
    return (
        <View
            style={{
                width: '50%',
                marginBottom: 28,
            }}
        >

        
            <View
                style={{
                    alignItems: 'center',
                    marginRight: 15,
                    width: 150,
                    alignSelf: 'center'
                }}
            >
                <Image
                    source={{uri: props.item.image}}
                    style={{
                        width: 110,
                        height: 81,
                        backgroundColor: 'black',
                    }}
                />

                <Text
                    style={{
                        marginTop: 19,
                        fontWeight: 'bold',
                        fontSize: 14,
                    }}    
                >
                    {props.item.name}
                </Text>

                <Text
                    style={{
                        marginTop: 1,
                        color: '#060606',
                        fontSize: 12,
                    }}
                >
                    {props.item.price}원
                </Text>
            </View>
        </View>
    );
}

export default boxItem;