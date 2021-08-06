import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import BaseHeader from '../organisms/header/BaseHeader'

const CartTemplate = ({navigation}) => {
    return (
        <>
        <BaseHeader
            canGoBack={true}
            goBackAction={() => navigation.goBack()}
            title={'장바구니'}
        />
        <View>
            <Text>This is CartTemplate.</Text>
        </View>
        </>
    )
}

export default CartTemplate