import MyCustomBoxTemplate from '@components/templates/MyCustomBoxTemplate'
import { MyCustomBoxProps } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import React, { useState, useEffect, useContext } from 'react'

const MyCustomBoxPage = ({ route, navigation }: MyCustomBoxProps) => {
  const [{cart}, {}] = useContext(CartContext)

  return (
    <MyCustomBoxTemplate
      hasPrevScreen={true}
      cartItemCount={cart.size}
      onPressGoBack={() => navigation.goBack()}
      onPressCart={() => {}}
    />
  )
}

export default MyCustomBoxPage

