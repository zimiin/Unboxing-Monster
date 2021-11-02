import { IMAGES } from '@constants/images'
import React, { ReactNode } from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  checked?: boolean,
  children?: ReactNode,
  style?: ViewStyle
}

const SelectItemRadio = (props: Props) => {
  return (
    <TouchableOpacity
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
      }, props.style]}
    >
      <Image
        source={props.checked === true ? IMAGES.radio_box_chkd : IMAGES.radio_box_unchkd}
        style={{
          width: 20,
          height: 20,
          marginRight: 10,
        }}
      />

      {props.children}
    </TouchableOpacity>
  )
}

export default SelectItemRadio
