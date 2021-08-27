import BaseHeader from "@components/organisms/header/BaseHeader"
import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

interface Props {
  onPressLogout: () => void,
}

const MyPageTemplate = (props: Props) => {
  return (
    <>
      <BaseHeader
        canGoBack={false}
        title={'마이페이지'}
      />
      <View>

        <TouchableOpacity
          onPress={props.onPressLogout}
        >
          <Text>LET ME LOGOUT!!!!</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default MyPageTemplate