import CustomBoxInitTemplate from "@components/templates/CustomBoxInitTemplate"
import { CustomBoxInitProps } from "@constants/navigationTypes"
import React from "react"

const CustomBoxInitPage = ({ route, navigation }: CustomBoxInitProps) => {
  return (
    <CustomBoxInitTemplate
      screenTitle='커스텀 박스'
      hasPreviousScreen={false}
      onPressMakeCustomBox={() => navigation.navigate('BoxMakingStep1')}
      onPressMyCustomBox={() => { }}
    />
  )
}

export default CustomBoxInitPage