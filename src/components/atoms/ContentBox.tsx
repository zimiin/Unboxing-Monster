import Bold from '@components/atoms/typography/Bold'
import { SCREEN_WIDTH } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
  ViewProps,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props extends ViewProps {
  title: string,
  children: React.ReactNode,
}

const ContentBox = (props: Props) => {
  const { title, children, style, ...rest } = props
  return (
    <View style={[styles.container, style]}>
      <Bold style={styles.title}>
        {title}
      </Bold>
      {children}
    </View>
  )
}

export default ContentBox

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: SCREEN_WIDTH * 24 / 360,
    paddingTop: 14,
  },
  title: {
    fontSize: 15,
    lineHeight: 22,
  }
})
