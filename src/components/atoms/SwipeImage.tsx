import React from 'react'
import {
    Image, ImageSourcePropType,
} from 'react-native'

const SwipeImage = (props: {source: ImageSourcePropType}) => {
    return (
            <Image
                source={props.source}
                style={{
                    bottom: 72,
                }}
            />
    );
}

export default SwipeImage
