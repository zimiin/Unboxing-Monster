import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import CartTemplate from '../templates/CartTemplate'

const CartPage = ({navigation}) => {
    return (
        <CartTemplate navigation={navigation} />
    )
}

export default CartPage
