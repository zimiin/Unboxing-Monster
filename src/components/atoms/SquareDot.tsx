import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
} from 'react-native'

interface Props extends ViewProps {
  size?: number,
  color?: string,
}

const SquareDot = (props: Props) => {
  return (
    <View 
      style={[
        props.size ? { width: props.size, height: props.size } : styles.defaultSize, 
        props.color ? { backgroundColor: props.color } : styles.defaultColor]}
    />
  )
}

export default SquareDot

const styles = StyleSheet.create({
  defaultSize: {
    width: 10,
    height: 10,
  },
  defaultColor: {
    backgroundColor: 'grey',
  }
})
