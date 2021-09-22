import Bold from '@components/atoms/typography/Bold'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewProps,
} from 'react-native'

interface Props extends ViewProps {

}

const NoDataBox = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={IMAGES.notice}
        style={styles.icon}
      />
      
      <Text style={styles.text}>
        No data
      </Text>
    </View>
  )
}

export default NoDataBox

const styles = StyleSheet.create({
  container: {
    width: scale(312),
    height: verticalScale(70),
    backgroundColor: COLORS.grey_box,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: scale(30),
    height: scale(30),
  },
  text: {
    fontSize: scale(12),
    marginTop: scale(5),
  }
})