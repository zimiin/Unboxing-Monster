import React from 'react'
import {
  View,
  Modal,
  StyleSheet,
} from 'react-native'
import GreyButton from "@components/atoms/button/GreyButton"
import { scale } from "@src/constants/figure"
import { COLORS } from '@constants/colors'
import HalfWidthButton from '@components/atoms/button/HalfWidthButton'

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
            <HalfWidthButton
              onPress={props.onRequestClose}
              buttonStyle={styles.cancelButton}
              text={'취소'}
              textStyle={styles.cancelText}
            />

            <HalfWidthButton
              onPress={() => {
                props.onConfirm()
                props.onRequestClose()
              }}
              buttonStyle={styles.confirmButton}
              text={'확인'}
            />
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
  cancelButton: {
    width: scale(140),
    marginHorizontal: scale(4),
    marginBottom: 12,
    backgroundColor: COLORS.grey_box,
  },
  cancelText: {
    color: 'black',
  },
  confirmButton: {
    width: scale(140),
    marginHorizontal: scale(4),
    marginBottom: 12,
  }
})