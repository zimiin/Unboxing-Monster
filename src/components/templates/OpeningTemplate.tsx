import { IMAGES } from '@constants/images'
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { scale } from 'react-native-size-matters'

interface Props {
  onAnimationEnd: () => void
}

const OpeningTemplate = (props: Props) => {

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}
    > 
      <Animatable.Image
        animation="tada"
        source={IMAGES.open_box}
        style={{
          width: scale(312),
          height: scale(308)
        }}
        onAnimationEnd={props.onAnimationEnd}
      />
    </View>
  )
}

export default OpeningTemplate
