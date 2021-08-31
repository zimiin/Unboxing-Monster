import Header from "@components/organisms/header/Header"
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
      <Header
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