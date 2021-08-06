import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { ICONS } from '../../../constants/icons'

const CartIcon = () => {
    return (
        <Image
            source={ICONS.cart}
            style={{
                width: 20,
                height: 20,
            }}
        />
    )
}

export default CartIcon