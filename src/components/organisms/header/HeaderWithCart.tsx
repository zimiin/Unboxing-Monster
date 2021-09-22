import React from 'react'
import {
  TouchableOpacity,
  View,
} from 'react-native'
import CartIcon from '@components/atoms/icon/CartIcon'
import Header from '@components/organisms/header/Header'
import Badge from '@components/atoms/Badge'
import globalStyles from '@constants/globalStyles'

interface Props {
  title?: string
  canGoBack: boolean
  goBackAction?: () => void
  onPressCart: () => void
  cartItemCount?: number,
}

const HeaderWithCart = (props: Props) => {
  const cartButton = (
    <View>
      <TouchableOpacity onPress={props.onPressCart}>
        <CartIcon />

        {props.cartItemCount ? 
          <Badge
            style={globalStyles.badge}
            count={props.cartItemCount}
          />
        : null}
        
      </TouchableOpacity>
    </View>
  )

  return (
    <Header
      canGoBack={props.canGoBack}
      goBackAction={props.goBackAction}
      title={props.title}
      right={cartButton}
    />
  )
}

export default HeaderWithCart