import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'
import CartIcon from '@components/atoms/icon/CartIcon'
import BaseHeader from '@components/organisms/header/BaseHeader'

interface Props {
  title: string
  canGoBack: boolean
  goBackAction: () => void
  onPressCart: () => void
}

const HeaderWithCart = (props: Props) => {
  const cartButton = (
    <TouchableOpacity onPress={props.onPressCart}>
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