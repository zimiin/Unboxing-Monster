import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native'
import Logo from "@components/atoms/Logo"
import { scale, verticalScale } from "react-native-size-matters"
import { SCREEN_HEIGHT } from "@constants/figure"

interface Props {
  animating: boolean,
}

const SplashTemplate = (props: Props) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logo}>
        <Logo />
      </View>

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

const logoPosition = SCREEN_HEIGHT * 261 / 716

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
    height: scale(100),
    alignSelf: 'center',
    position: 'absolute',
    top: logoPosition,
  }
})
