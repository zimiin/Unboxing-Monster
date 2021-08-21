import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

import BoxItem from '@components/molecules/BoxItem'

import { Box } from '@constants/types'

const windowWidth = Dimensions.get('window').width;

const TwoColumnBoxList = ({ items }: { items: Box[] }) => {
  const boxItems = items.map((item) => {
    return (
      <View
        key={item.id}
        style={styles.boxContainer}
      >
        <BoxItem item={item} />
      </View>
    )
  })

  return (
    <View style={styles.container}>
      {boxItems}
    </View>
  )
}

export default TwoColumnBoxList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: windowWidth * (324 / 360),
    alignSelf: 'center',
    marginTop: 32,
  },
  boxContainer: {
    width: '50%',
    marginBottom: 28,
    alignItems: 'center',
  }
});
