import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import CartTemplate from '@components/templates/CartTemplate'
import AppContext from 'AppContext'
import { useContext } from 'react'

const CartPage = ({navigation}) => {
    

    return (
        <CartTemplate 
            onPressBack={() => navigation.goBack()}
        />
    )
}

export default CartPage
