import React from 'react'
import {
    TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BackIcon from '../../atoms/icon/BackIcon'
import CartIcon from '../../atoms/icon/CartIcon'
import BaseHeader from './BaseHeader'


const HeaderWithCart = (props) => {
    return (
        <BaseHeader
            canGoBack={props.canGoBack}
            goBackAction={props.goBackAction}
            title={props.title}
            right={
                <TouchableOpacity
                    onPress={() => props.navigation.push('Cart')}
                >
                    <CartIcon />
                </TouchableOpacity>
            }
        />
    )
}

export default HeaderWithCart