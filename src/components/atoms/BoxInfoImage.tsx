import React from 'react'
import {
    Image,
} from 'react-native'

const BoxInfoImage = ({image}: {image: string}) => {
    return (
        <Image
            source={{uri: image}}
            style={{
                flex: 1,
                width: undefined,
                height: undefined,
            }}
            resizeMode='contain'
        />
    );
}

export default BoxInfoImage
