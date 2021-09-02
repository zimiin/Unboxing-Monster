import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewProps,
  ImageSourcePropType,
} from 'react-native'

interface Props extends ViewProps{
  onPress: () => void,
  image: ImageSourcePropType,
  checked: boolean,
}

const BoxPriceCheckButton = (props: Props) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        props.checked ? styles.buttonBorder : null
      ]}
      onPress={props.onPress}
    >
      <Image
        source={props.image}
      />

      {props.checked ? 
        <View style={styles.checkCircle}>
          <Image
            source={IMAGES.check_circle}
            style={styles.checkIcon}
          />
        </View>
      : null}
      
    </TouchableOpacity>
  )
}

export default BoxPriceCheckButton

const styles = StyleSheet.create({
  button: {
    width: scale(258),
    height: scale(258),
    backgroundColor: '#f6fbff',
    borderRadius: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: '#29bdff',
  },
  checkCircle: {
    position: 'absolute',
    zIndex: 10,
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    backgroundColor: '#29bdff',
    bottom: scale(20),
    right: scale(20),
    paddingTop: scale(5),
    paddingLeft: scale(6),
  },
  checkIcon: {
    width: scale(24),
    height: scale(24),
  }
})
