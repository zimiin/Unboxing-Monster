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
      <Text style={styles.count}>
        {count ? count.toString() : ''}
      </Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.main,
    height: 11,
    minWidth: 11,
    borderRadius: 5,
    paddingHorizontal: 3,
  },
  count: {
    fontFamily: 'NotoSansCJKkr-Bold',
    lineHeight: 10,
    fontSize: 8,
    color: 'white',
  }
})