import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import { CONTENT_WIDTH } from '@constants/figure'

const ToProbabilityButton = ({ onPress }:  { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        자세한 확률 알아보기
      </Text>
    </TouchableOpacity>
  )
}

export default ToProbabilityButton

const styles = StyleSheet.create({
  container: {
    width: CONTENT_WIDTH,
    height: 48,
    backgroundColor: '#eef1f2',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#060606',
    fontSize: 14,
  }
})