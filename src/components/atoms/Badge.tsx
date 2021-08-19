import { COLORS } from '@constants/colors'
import React from 'react'
import {
  View,
  Text,
  ViewProps,
  StyleSheet,
} from 'react-native'
import Bold from './typography/Bold'

interface Props extends ViewProps {
  count?: number,
}

const Badge = (props: Props) => {
  const { count, style, ...rest } = props

  return (
    <View style={[styles.badge, style]}>
      <Bold style={styles.count}>
        {count ? count.toString() : ''}
      </Bold>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.main,
    height: 14,
    paddingHorizontal: 3,
    minWidth: 14,
    borderRadius: 7,
  },
  count: {
    fontSize: 8,
    color: 'white',
  }
})