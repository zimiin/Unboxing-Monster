import { IMAGES } from '@constants/images'
import React, { ReactNode } from 'react'
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
  checked?: boolean,
  children?: ReactNode
  style?: ViewStyle,
  onPress?: () => void,
  number?: number,
}

const SelectItemNumbering = (props: Props) => {
  return (
    <TouchableOpacity
      style={[{
        flexDirection: 'row',
      },
      props.style
      ]}
      onPress={props.onPress}
    >
      {props.checked === false ?
        <Image
          source={IMAGES.checkBox_unchecked}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        :
        <View
          style={{
            width: 21,
            height: 21,
            backgroundColor: '#29abff',
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#ebebeb',
            borderWidth: 1,
            borderRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: 'white',
            }}
          >
            {props.number}
          </Text>
        </View>
      }

      {props.children}
    </TouchableOpacity>
  )
}

export default SelectItemNumbering
