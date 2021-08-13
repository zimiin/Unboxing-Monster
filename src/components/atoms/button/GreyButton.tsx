import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props {
  onPress: () => void,
  content: string
}

const GreyButton = (props: Props) => {
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

export default GreyButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef1f2',
    width: scale(312),
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})