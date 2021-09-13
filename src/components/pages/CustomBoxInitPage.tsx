import CustomBoxInitTemplate from "@components/templates/CustomBoxInitTemplate"
import { CustomBoxInitProps } from "@constants/navigationTypes"
import { getAccessToken } from "@src/utils/asyncStorageUtils"
import React from "react"

const CustomBoxInitPage = ({ route, navigation }: CustomBoxInitProps) => {
  const hasLoggedIn = async () => {
    const access_token = await getAccessToken()
    if (access_token !== null) {
      return true
    } else {
      return false
    }
  }

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
      onPressMakeCustomBox={startCustomBoxMaking}
      onPressMyCustomBox={moveToMyCustomBox}
    />
  )
}

export default CustomBoxInitPage