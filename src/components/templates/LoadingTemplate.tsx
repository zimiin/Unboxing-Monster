import Bold from '@components/atoms/typography/Bold'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import NoticeModal from "@components/molecules/NoticeModal"

interface Props {
  modalVisible: boolean,
  onRequestModalClose: () => void,
}

const LoadingTemplate = (props: Props) => {
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

      <NoticeModal
        visible={props.modalVisible}
        onRequestClose={props.onRequestModalClose}
      >
        <Image
          source={IMAGES.notice}
          style={styles.modalImage}
        />
        
        <Bold>블록체인 서버에 문제가 발생했습니다.</Bold>
        <Bold>관리자에게 연락바랍니다.</Bold>

        <Text style={styles.email}>
          kkureogi.unboxing@gmail.com
        </Text>
      </NoticeModal>
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
  modalImage: {
    width: scale(70),
    height: scale(70),
    marginTop: 15,
    marginBottom: 15,
  },
  email: {
    marginTop: 7,
    marginBottom: 15,
  }
})