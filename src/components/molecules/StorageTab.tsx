import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import Bold from '@components/atoms/typography/Bold'

interface Props {
  title: string,
  focused: boolean,
  onPress: () => void,
}

const StorageTabTitle = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container, 
        props.focused ?
         styles.blueBottomBorder 
          : styles.transparentBottomBorder
      ]}
      onPress={props.onPress}
    >
      <Bold style={styles.title}>
        {props.title}
      </Bold>
    </TouchableOpacity>
  )
}

export default StorageTabTitle

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: scale(150),
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBottomBorder: {
    borderBottomWidth: 4,
    borderBottomColor: '#29a3ff',
  },
  transparentBottomBorder: {
    borderBottomWidth: 4,
    borderBottomColor: 'rgba(255, 255, 255, 1)'
  },
  title: {
    fontSize: 14,
  }
})