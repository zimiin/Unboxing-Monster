import HorizontalRule from '@components/atoms/HorizontalRule'
import React from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import BaseHeader from '@components/organisms/header/BaseHeader'

const CartTemplate = (props) => {
    return (
        <>
        <BaseHeader
            canGoBack={true}
            goBackAction={props.onPressBack}
            title={'장바구니'}
        />
        <HorizontalRule />
        
        <ScrollView>

        </ScrollView>
        </>
    )
}

export default CartTemplate