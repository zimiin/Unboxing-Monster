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
    paddingTop: 18,
    paddingBottom: 19,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  }
})