import React from 'react'
import {
  View, 
  ViewProps, 
  StyleSheet,
} from 'react-native'

interface Props extends ViewProps {
  
}

const HorizontalRule = (props: Props) => {
  const { style, ...rest } = props

  return (
    <View
      style={[styles.HorizontalRule, style]}
      {...rest}
    />
  )
}

export default HorizontalRule

const styles = StyleSheet.create({
  HorizontalRule: {
    width: '100%',
    height: 8,
    backgroundColor: '#f9f9f9',
  }
})