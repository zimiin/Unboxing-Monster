import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HeaderContainer = (props) => {
    const statusBarHeight = useSafeAreaInsets().top

    return (
        <View
            style={{
                backgroundColor: 'white',
            }}
        >
            <View
                style={{
                    marginTop: statusBarHeight,
                    height: 56,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
            {props.children}
            </View>
        </View>
    )
}

export default HeaderContainer