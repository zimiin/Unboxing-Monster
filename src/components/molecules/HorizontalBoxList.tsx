import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native'
import BoxItem from '@components/molecules/BoxItem'
import { Box } from '@constants/types'

interface Props {
  items: Box[]
}

const windowWidth = Dimensions.get('window').width;

const HorizontalBoxList = (props: Props) => {
  const boxItems = props.items.map((item) => {
    return (
      <View
        key={item.id}
        style={styles.container}
      >
        <BoxItem item={item} />
      </View>
    )
  })

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={{
          marginTop: 26,
          marginLeft: windowWidth * (12 / 360)
        }}
        showsHorizontalScrollIndicator={false}
      >
        {boxItems}
      </ScrollView>

    </View>
  )
}

export default HorizontalBoxList

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginLeft: windowWidth * (12 / 360)
    },
});