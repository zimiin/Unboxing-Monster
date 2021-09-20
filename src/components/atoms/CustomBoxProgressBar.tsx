import { scale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
} from 'react-native'

interface Props extends ViewProps{
  progress: number,
}

const CustomBoxProgressBar = (props: Props) => {
  const { progress, style, ...rest } = props

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
            progress ? {width: scale(progress * 312)} : null
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