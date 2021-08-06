import React from 'react'
import {
    TouchableOpacity,
} from 'react-native'
import CartIcon from '../../atoms/icon/CartIcon'
import BaseHeader from './BaseHeader'


const HeaderWithCart = (props) => {
    const cartButton = (
        <TouchableOpacity
            onPress={() => props.navigation.push('Cart')}
        >
            <CartIcon />
        </TouchableOpacity>
    )

    return (
        <BaseHeader
            canGoBack={props.canGoBack}
            goBackAction={props.goBackAction}
            title={props.title}
            right={cartButton}
        />
    )
}

export default HeaderWithCart