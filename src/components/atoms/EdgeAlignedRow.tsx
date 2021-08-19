import React from 'react'
import {
  StyleSheet,
  View,
  ViewProps
} from 'react-native'

interface Props extends ViewProps {
  left?: React.ReactNode,
  right?: React.ReactNode
}

const EdgeAlignedRow = (props: Props) => {
  const { left, right, style, ...rest } = props

  return (
    <View
      style={[styles.container, style]}
      {...rest}
    >
      <View style={styles.left}>
        {left}
      </View>

      <View>
        {right}
      </View>
    </View>
  )
}

export default EdgeAlignedRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: { 
    flex: 1 
  }
})