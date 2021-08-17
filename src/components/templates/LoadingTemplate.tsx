import Bold from '@components/atoms/typography/Bold'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props {
  
}

const LoadingTemplate = () => {
  return (
    <View style={styles.container}>
      <Bold
        style={{
          fontSize: 17,
          marginBottom: 30,
        }}
      >
        블록체인에 연결 중...
      </Bold>

      <Image
        source={IMAGES.open_loading}
        style={{
          width: scale(278),
          height: scale(256)
        }}
      />
    </View>
  )
}

export default LoadingTemplate

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },

})