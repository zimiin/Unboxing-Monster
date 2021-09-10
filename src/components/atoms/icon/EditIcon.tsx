import React from 'react'
import { ICONS } from '@constants/icons'
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
      source={ICONS.edit}
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
