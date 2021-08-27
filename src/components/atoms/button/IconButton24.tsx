import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native'

interface Props extends TouchableOpacityProps {
  image: ImageSourcePropType,
  onPress: () => void,
}

const IconButton24 = (props: Props) => {
  const { image, onPress, style, ...rest } = props

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...rest}
    >
      <Image
        source={image}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

export default IconButton24

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})
