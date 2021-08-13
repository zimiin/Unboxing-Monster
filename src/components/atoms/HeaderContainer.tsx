import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
}

const HeaderContainer = (props: Props) => {
  const statusBarHeight = useSafeAreaInsets().top

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          { marginTop: statusBarHeight }
        ]}
      >
        {props.children}
      </View>
    </View>
  )
}

export default HeaderContainer


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  }
})
