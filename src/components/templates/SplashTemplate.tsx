import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
} from 'react-native'
import Logo from "@components/atoms/Logo"
import { scale, verticalScale } from "react-native-size-matters"
import { SCREEN_HEIGHT } from "@constants/figure"
import { IMAGES } from "@constants/images"

interface Props {
  animating: boolean,
}

const SplashTemplate = (props: Props) => {
  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={IMAGES.unboxing_logo}
        style={styles.logo}
      />

      <ActivityIndicator
        animating={props.animating}
        color="slategray"
        size="large"
        style={styles.activityIndicator}
      />
    </SafeAreaView>
  )
}

export default SplashTemplate

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  activityIndicator: {
    alignSelf: 'center',
    height: scale(80),
    position: 'absolute',
    bottom: verticalScale(130),
  },
  logo: {
    width: scale(120),
    height: scale(167),
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    top: verticalScale(228),
  }
})
