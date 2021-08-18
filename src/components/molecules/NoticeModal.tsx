import React from 'react'
import {
  View,
  Modal,
  StyleSheet,
} from 'react-native'
import GreyButton from "@components/atoms/button/GreyButton"
import { scale } from "react-native-size-matters"

interface Props {
  visible: boolean,
  onRequestClose: () => void,
  children: React.ReactNode
}

const NoticeModal = (props: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {props.children}

          <GreyButton
            onPress={props.onRequestClose}
            style={styles.button}
          >
            확인
          </GreyButton>
        </View>
      </View>
    </Modal>
  )
}

export default NoticeModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modalView: {
    width: scale(312),
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  button: {
    width: scale(288),
    marginBottom: 12,
  }
})