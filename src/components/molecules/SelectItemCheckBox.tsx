import { IMAGES } from '@constants/images'
import React, { ReactNode } from 'react'
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  checked?: boolean,
  children?: ReactNode
  style?: ViewStyle,
}

const SelectItemCheckBox = (props: Props) => {
  return (
    <TouchableOpacity
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
      },
      props.style
      ]}
    >
      <Image
        source={props.checked === true ? IMAGES.checkBox_checked : IMAGES.checkBox_unchecked}
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

export default SelectItemCheckBox
