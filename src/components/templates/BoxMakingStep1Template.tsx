import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import ItemRadioButton, { ItemRadioButtonProps } from '@components/molecules/ItemRadioButton'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  error: string,
  itemRadioButtonData?: ItemRadioButtonProps[],
  onPressGoBack: () => void,
  onPressNext: () => void,
  onPressItemRadioButton: (id: number) => void,
}

const BoxMakingStep1Template = (props: Props) => {
  const renderItem = ({item}: {item: ItemRadioButtonProps}) => {
    return (
      <ItemRadioButton
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        checked={item.checked}
        onPress={() => props.onPressItemRadioButton(item.id)}
      />
    )
  }

  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <CustomBoxProgressBar 
          progress={1 / 3}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'박스에 넣을 상품을 선택해주세요.'}
        </Bold>

        <Text style={styles.error}>
          {props.error}
        </Text>

        <FlatList
          renderItem={renderItem}
          data={props.itemRadioButtonData || []}
        />
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'다음'}
      />
    </>
  )
}

export default BoxMakingStep1Template

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(24)
  },
  progressBar: {
    marginTop: verticalScale(12),
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6,
    marginTop: verticalScale(32),
  },
  error: {
    fontSize: 13,
    color: '#ec4f47',
    letterSpacing: -0.32,
    marginTop: verticalScale(2),
    height: 19,
  }
})
