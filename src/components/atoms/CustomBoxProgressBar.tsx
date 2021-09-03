import { scale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
} from 'react-native'

interface Props extends ViewProps{
  step: number,
}

const CustomBoxProgressBar = (props: Props) => {
  const { step, style, ...rest } = props

  return (
    <>
      <View 
        style={[
          styles.bar,
          style
        ]}
        {...rest}
      >
        <View 
          style={[
            styles.progress,
            step ? {width: scale(step / 4 * 312)} : null
          ]}
        />
      </View>
    </>
  )
}

export default CustomBoxProgressBar

const styles = StyleSheet.create({
  bar: {
    width: scale(312),
    height: 4,
    borderRadius: 4,
    backgroundColor: '#f8f8f8',
  },
  progress: {
    backgroundColor: '#29bdff',
    height: '100%'
  }
})