import UnboxingMonster from '@components/atoms/icon/UnboxingMonster'
import Bold from '@components/atoms/typography/Bold'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native'

interface Props {
  notice?: string,
  style?: ViewStyle
}

const MonsterNotice = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <UnboxingMonster />

      <Bold style={styles.emptyText}>
        {props.notice || ''}
      </Bold>
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
    fontSize: scale(13),
    marginTop: scale(10),
  }
})