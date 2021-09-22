import UnboxingMonster from '@components/atoms/icon/UnboxingMonster'
import Bold from '@components/atoms/typography/Bold'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

const MonsterNotice = ({notice}: {notice?: string}) => {
  return (
    <View style={styles.emptyComponent}>
      <UnboxingMonster />

      <Bold style={styles.emptyText}>
        {notice || ''}
      </Bold>
    </View>
  )
}

export default MonsterNotice

const styles = StyleSheet.create({
  emptyComponent: {
    width: '100%',
    height: verticalScale(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: scale(13),
    marginTop: scale(10),
  }
})