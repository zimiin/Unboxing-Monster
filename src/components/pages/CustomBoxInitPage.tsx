import CustomBoxInitTemplate from "@components/templates/CustomBoxInitTemplate"
import { CustomBoxInitProps } from "@constants/navigationTypes"
import React from "react"

const CustomBoxInitPage = ({ route, navigation }: CustomBoxInitProps) => {
  const startCustomBoxMaking = async () => {
    // 로그인 확인해서
      // 로그인 안돼있으면
      navigation.navigate('Auth', { screen: 'LoginRequest' })
    
    // 돼있으면
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