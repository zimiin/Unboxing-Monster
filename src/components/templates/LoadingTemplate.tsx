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
import * as Animatable from 'react-native-animatable'

interface Props {
  modalVisible: boolean,
  switchImage: number,
  openFailedModalVisible: boolean,
  onRequestModalClose: () => void,
}

const LoadingTemplate = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.switchImage === 0 ?
        <Image
          source={IMAGES.box_making}
          style={{
            width: scale(312),
            height: scale(312)
          }}
        />
        :
        <Animatable.Image
          animation="jello"
          iterationCount={'infinite'}
          duration={1700}
          source={IMAGES.unopen_box}
          style={{
            width: scale(312),
            height: scale(238),
            marginTop: scale(74)
          }}
        />
      }

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
          ask.unboxing.monster@gmail.com
        </Text>
      </NoticeModal>

      <NoticeModal
        visible={props.openFailedModalVisible}
        onRequestClose={props.onRequestModalClose}
      >
        <Image
          source={IMAGES.notice}
          style={styles.modalImage}
        />

        <Bold>박스 오픈에 문제가 발생했습니다.</Bold>
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