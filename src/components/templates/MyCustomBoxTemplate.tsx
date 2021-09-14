import Bold from '@components/atoms/typography/Bold'
import GreyBackgroundBox from '@components/molecules/GreyBackgroundBox'
import HeaderWithCart from '@components/organisms/header/HeaderWithCart'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import { defaultBox } from '@constants/images'
import { Box } from '@constants/types'
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

interface Props {
  hasPrevScreen: boolean,
  cartItemCount: number,
  boxList?: Box[],
  onPressGoBack: () => void,
  onPressCart: () => void,
  onPressBoxItem: (boxId: number) => void,
}

const MyCustomBoxTemplate = (props: Props) => {
  const boxItem = ({item}: {item: Box}) => {
    return (
      <GreyBackgroundBox
        boxImage={{uri: item.image} || defaultBox}
        style={styles.boxItem}
        onPress={() => props.onPressBoxItem(item.id)}
      >
        <Bold style={styles.boxName}>
          {item.title}
        </Bold>

        <Text style={styles.boxPrice}>
          {item.price.toLocaleString() + ' 원'}
        </Text>
      </GreyBackgroundBox>
    )
  }

  const header = (
    <View style={styles.header} />
  )
  
  return (
    <>
      <HeaderWithCart
        canGoBack={props.hasPrevScreen}
        goBackAction={props.onPressGoBack}
        onPressCart={props.onPressCart}
        title={'나의 커스텀 박스'}
        cartItemCount={props.cartItemCount}
      />

      <View style={styles.screen}>
        <FlatList
          renderItem={boxItem}
          data={props.boxList}
          numColumns={2}
          ListHeaderComponent={header}
        />
      </View>
    </>
  )
}

export default MyCustomBoxTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(18),
  },
  boxItem: {
    marginVertical: scale(20),
    marginHorizontal: scale(6),
  },
  boxName: {
    fontSize: scale(14),
    letterSpacing: -0.35,
    color: '#060606',
    height: scale(20),
  },
  boxPrice: {
    fontSize: scale(13),
    color: '#060606',
    letterSpacing: -0.35,
    height: scale(20),
  },
  list: { 
    alignItems: 'center' 
  },
  header: {
    height: verticalScale(15),
  }
})