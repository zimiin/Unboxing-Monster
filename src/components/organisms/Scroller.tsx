import React from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native'

import TextTicker from 'react-native-text-ticker'

const SCROLLER_WIDTH = Dimensions.get('window').width - 48

const Scroller = () => {
  const content = () => {
    // 차후 여기서 디비에서 데이터 가져옴
    return 'User***님이 최상급 한우에 당첨되셨습니다.      User***님이 최상급 한우에 당첨되셨습니다.      User***님이 최상급 한우에 당첨되셨습니다.'
  }

  return (
    <View style={styles.container}>
      <TextTicker
        style={styles.text}
        duration={10000}
        loop
        repeatSpacer={50}
        bounce={false}
        bouncePadding={{
          left: 30,
        }}
      >
        {content()}
      </TextTicker>
    </View>
  )
}

export default Scroller

const styles = StyleSheet.create({
    container: {
        width: SCROLLER_WIDTH,
        height: 48,
        backgroundColor: '#535353',
        alignSelf: 'center',
        position: 'absolute',
        top: 228,
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
        color: '#fffffc',
        fontSize: 15,
    }
});