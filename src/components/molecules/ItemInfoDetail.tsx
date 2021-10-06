import { scale } from '@constants/figure';
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native'
import RenderHTML, { HTMLSourceInline } from 'react-native-render-html'

const ItemInfoDetail = ({ detail }: { detail: string }) => {
  const source: HTMLSourceInline = {
    html: detail
  }

  return (
    <View style={styles.container}>
      <RenderHTML
        contentWidth={scale(312)}
        source={source}
      />
    </View>
  )
}

export default ItemInfoDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: scale(24),
    paddingTop: 22,
    paddingBottom: 39,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: -0.37,
    color: '#060606',
    marginBottom: 1,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#060606',
    marginTop: 12,
    lineHeight: 20,
  },
  text: {
    fontSize: 12,
    width: Dimensions.get('window').width * 0.9,
    letterSpacing: -0.3,
    color: '#060606',
    marginTop: 4,
    lineHeight: 20,
  }
})