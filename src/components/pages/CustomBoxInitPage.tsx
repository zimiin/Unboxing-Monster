import CustomBoxInitTemplate from "@components/templates/CustomBoxInitTemplate"
import { CustomBoxInitProps } from "@constants/navigationTypes"
import React from "react"

const CustomBoxInitPage = ({ route, navigation }: CustomBoxInitProps) => {
  const startCustomBoxMaking = async () => {
    navigation.navigate('Auth', { screen: 'LoginRequest' })
    
    // navigation.navigate('BoxMakingStep1')
  }

  return (
    <CustomBoxInitTemplate
      screenTitle='커스텀 박스'
      hasPreviousScreen={false}
      onPressMakeCustomBox={startCustomBoxMaking}
      onPressMyCustomBox={() => { }}
    />
  )
}

export default CustomBoxInitPage