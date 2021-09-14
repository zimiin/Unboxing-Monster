import FullWidthButton from '@components/atoms/button/FullWidthButton'
import MultipleOpenResultItem from '@components/molecules/MultipleOpenResultItem'
import SingleOpenResultItem, { OpenResultItem } from '@components/molecules/SingleOpenResultItem'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'
import { defaultBox, IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList
} from 'react-native'
import {COLORS} from '@constants/colors'


interface Props {
  onPressGoToStorage: () => void,
  openResultData: OpenResultItem[],
}

const OpenResultTemplate = (props: Props) => {
  const renderItem = ({ item }: { item: OpenResultItem }) => {
    return (
      <MultipleOpenResultItem
        key={item.key}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    )
  }

  const multipleResult = () => (
    <View style={styles.multipleResultContainer}>
      <SafeAreaView style={styles.multipleResultListContainer}>
        <FlatList
          data={props.openResultData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            alignSelf: 'center',
          }}
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{
            height: SCREEN_HEIGHT * 56 / 720,
          }}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: SCREEN_HEIGHT * 56 / 720,
          }}
        />
      </SafeAreaView>
    </View>
  )

  const singleResult = () => (
    <SingleOpenResultItem
      key={props.openResultData[0].key || 0}
      image={props.openResultData[0].image || defaultBox}
      name={props.openResultData[0].name || ''}
      price={props.openResultData[0].price || 0}
    />
  )

  return (
    <>
      <View style={styles.background}>
        <Image
          source={IMAGES.result_box}
          style={styles.backgroundImage}
        />
        { props.openResultData.length === 1 ? singleResult() : multipleResult()}        
      </View>

      <SafeAreaView style={styles.bottomSafeArea}>
        <FullWidthButton
          content="보관함으로 가기"
          onPress={props.onPressGoToStorage}
        />
      </SafeAreaView>
    </>
  )
}

export default OpenResultTemplate

const styles = StyleSheet.create({
  bottomSafeArea: {
    backgroundColor: COLORS.main
  },
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 417 / 720,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 85 / 720,
    zIndex: -100,
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  multipleResultContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    flex: 1,
  },
  multipleResultListContainer: {
    flex: 1,
    alignItems: 'center',
  }
})
