import CustomBoxInitTemplate from "@components/templates/CustomBoxInitTemplate"
import { CustomBoxInitProps } from "@constants/navigationTypes"
import { CartContext } from "@src/stores/CartContext"
import { getAccessTokenFromAsyncStorage } from "@src/utils/asyncStorageUtils"
import React, { useContext } from "react"
import { hasLoggedIn } from "@src/utils/loginUtils"

const CustomBoxInitPage = ({ route, navigation }: CustomBoxInitProps) => {
  const [{cart}, {}] = useContext(CartContext)

  const startCustomBoxMaking = async () => {
    if (await hasLoggedIn()) {
      navigation.navigate('BoxMakingStep1')
    } else {
      navigation.navigate('Auth', { screen: 'LoginRequest' })
    }
  }

  const moveToMyCustomBox = async () => {
    if (await hasLoggedIn()) {
      navigation.navigate('MyCustomBox')
    } else {
      navigation.navigate('Auth', { screen: 'LoginRequest' })
    }
  }

  return (
    <CustomBoxInitTemplate
      screenTitle='커스텀 박스'
      hasPreviousScreen={false}
      cartItemCount={cart.size}
      onPressMakeCustomBox={startCustomBoxMaking}
      onPressMyCustomBox={moveToMyCustomBox}
      onPressCart={() => navigation.navigate('Cart')}
    />
  )
}

export default CustomBoxInitPage