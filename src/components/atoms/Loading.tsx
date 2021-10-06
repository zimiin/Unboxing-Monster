import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native'

const Loading = () => {
  return (
    <View style={styles.background}>
      <View style={styles.square}>
        <ActivityIndicator
          size={'large'}
          color={'#A1A1A1'}
        />
      </View>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
})
