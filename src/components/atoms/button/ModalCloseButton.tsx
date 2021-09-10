import React from 'react'
import {IMAGES} from '@constants/images'
import {
  StyleSheet,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'

interface Props extends TouchableOpacityProps {

}

const ModalCloseButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[props.style]}
      onPress={props.onPress}
    >
      <Image
        source={IMAGES.close_modal}
        style={{
          width: 32,
          height: 32,
        }}
      />
    </TouchableOpacity>
  )
}

export default ModalCloseButton

const styles = StyleSheet.create({

})
