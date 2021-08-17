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
  const [animation, setAnimation] = useState<number>(0)

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      {animation == 0 ? 
        <Animatable.Image
          animation="slideInDown"
          iterationCount={3}
          duration={500}
          direction="alternate"
          source={IMAGES.unopen_box}
          style={{
            width: scale(312),
            height: scale(238)
          }}
          onAnimationEnd={() => setAnimation(1)}
        />
      : <Animatable.Image
          animation="tada"
          source={IMAGES.open_box}
          style={{
            width: scale(312),
            height: scale(308)
          }}
          onAnimationEnd={props.onAnimationEnd}
        />
      }
      
    </View>
  )
}

export default OpeningTemplate
