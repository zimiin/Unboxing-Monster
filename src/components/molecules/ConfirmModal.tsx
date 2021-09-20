import React from 'react'
import {
  View,
  Modal,
  StyleSheet,
} from 'react-native'
import GreyButton from "@components/atoms/button/GreyButton"
import { scale } from "@src/constants/figure"
import { COLORS } from '@constants/colors'

interface Props {
  visible: boolean,
  onRequestClose: () => void,
  onConfirm: () => void,
  children?: React.ReactNode
}

const ConfirmModal = (props: Props) => {
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

          <View style={styles.buttonContainer}>
            <GreyButton
              onPress={props.onRequestClose}
              style={[styles.button]}
            >
              취소
            </GreyButton>

            <GreyButton
              onPress={() => {
                props.onConfirm()
                props.onRequestClose()
              }}
              style={[styles.button]}
            >
              확인
            </GreyButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmModal

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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: scale(140),
    marginHorizontal: scale(4),
    marginBottom: 12,
  },
  blueButton: {
    backgroundColor: COLORS.main,
  }
})