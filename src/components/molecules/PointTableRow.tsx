import { SCREEN_WIDTH } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
  ViewProps,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props extends ViewProps {
  left?: React.ReactNode,
  center?: React.ReactNode,
  right?: React.ReactNode
}

const PointTableRow = (props: Props) => {
  const { style, left, center, right, ...rest } = props

  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        {left}
      </View>
      
      <View style={styles.center}>
        {center}
      </View>

      <View style={styles.right}>
        {right}
      </View>
    </View>
  )
}

export default PointTableRow

const styles = StyleSheet.create({
  container: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    width: SCREEN_WIDTH * 44 / 360,
  },
  center: {
    width: SCREEN_WIDTH * 152 / 360,
  },
  right: {
    width: SCREEN_WIDTH * 116 / 360,
  }
})
