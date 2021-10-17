import UnboxingMonster from '@components/atoms/icon/UnboxingMonster'
import Bold from '@components/atoms/typography/Bold'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
} from 'react-native'

interface Props {
  notice?: string,
  style?: ViewStyle
}

const MonsterNotice = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <UnboxingMonster />

      <Text style={styles.emptyText}>
        {props.notice || ''}
      </Text>
    </View>
  )
}

export default MonsterNotice

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 13,
    marginTop: 10,
    fontFamily: 'NotoSansCJKkr-Medium',
    color: '#4F4F4F',
    lineHeight: 20,
  }
})