import { DESIGN_HEIGHT, scale, SCREEN_HEIGHT } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import TextTicker from 'react-native-text-ticker'

const Scroller = ({content}: {content: string}) => {
  const defaultContent = '✨ 어서오세요 언박싱 몬스터입니다 ✨       ✨ 어서오세요 언박싱 몬스터입니다 ✨'
  const contentLength = content ? content.length : defaultContent.length

  return (
    <View style={styles.container}>
      <TextTicker
        style={styles.text}
        loop={true}
        duration={150 * contentLength}
        repeatSpacer={50}
      >
        {content || defaultContent}
      </TextTicker>
    </View>
  )
}

export default Scroller

const styles = StyleSheet.create({
  container: {
      width: scale(312),
      height: 48,
      backgroundColor: '#535353',
      alignSelf: 'center',
      position: 'absolute',
      top: 16 / DESIGN_HEIGHT * SCREEN_HEIGHT * -1,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#29a3ff',
      justifyContent: 'center',
      shadowColor: '#29a3ff33',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 1,
  },
  text: {
      color: '#ffea72',
      fontSize: 15,
      fontFamily: 'DungGeunMo'
  }
})