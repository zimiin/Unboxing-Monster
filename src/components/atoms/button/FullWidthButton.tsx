import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

interface Props {
  onPress: () => void,
  content: string
}

const FullWidthButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <Text style={styles.text}>
        {props.content}
      </Text>
    </TouchableOpacity>
  )
}

export default FullWidthButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29a3ff',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  text: {
    lineHeight: 26,
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: 16,
    color: 'white',
  }
})