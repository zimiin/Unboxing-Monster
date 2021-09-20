import React from 'react'
import { IMAGES } from '@constants/images'
import { scale } from '@constants/figure'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageProps,
  ImageStyle,
} from 'react-native'

interface Props {
  style?: ImageStyle
}

const EditIcon = (props: Props) => {
  return (
    <Image
      source={IMAGES.edit}
      style={[styles.editIcon, props.style]}
    />
  )
}

export default EditIcon

const styles = StyleSheet.create({
  editIcon: {
    width: scale(16),
    height: scale(16),
  },
})
