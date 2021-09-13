import React, { useMemo } from 'react'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import FullWidthButton from '@components/atoms/button/FullWidthButton'
import { scale, verticalScale } from '@constants/figure'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageSourcePropType,
} from 'react-native'
import { COLORS } from '@constants/colors'
import { PieChart } from 'react-native-svg-charts'
import SquareDot from '@components/atoms/SquareDot'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  boxImage: ImageSourcePropType,
  boxPrice: number,
  boxName: string,
  probs: number[],
  onPressGoBack: () => void,
  onPressNext: () => void,
}

const BoxMakingStep3Template = (props: Props) => {
  const randomColor = [COLORS.main, 'pink', 'purple', 'grey']

  // console.log('===probs', props.probs)
  const pieData = useMemo(() => 
    props.probs
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor[index % 4],
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    })), [props.probs])

  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <CustomBoxProgressBar
          progress={3 / 3}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'박스 생성 결과를 확인해주세요.'}
        </Bold>

        <ScrollView style={styles.scrollView}>
          <View style={styles.imagePriceContainer}>
            <Image
              source={props.boxImage}
              style={styles.boxImage}
            />

            <Bold style={styles.price}>
              {props.boxPrice?.toLocaleString() + ' 원'}
            </Bold>

            <View style={styles.imageBackground}/>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.boxName}>
              {props.boxName}
            </Text>
          </View>

          <View style={styles.probContainer}>
            <PieChart 
              style={styles.pieChart}
              data={pieData}
              innerRadius={0}
              padAngle={0}
            />

            <View>
              <View style={styles.legendItem}>
                <SquareDot 
                  size={scale(10)}
                  color={COLORS.main}
                />

                <Bold style={styles.legendText}>
                  {'뒷다리살 (50%)'}
                </Bold>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'저장하고 장바구니에 담기'}
      />
    </>
  )
}

export default BoxMakingStep3Template

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
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  imagePriceContainer: {
    height: scale(144),
    alignItems: 'center',
  },
  boxImage: {
    width: scale(102),
    height: scale(97),
  },
  price: {
    fontSize: scale(14),
    letterSpacing: -0.35,
    marginTop: scale(5),
  },
  imageBackground: {
    backgroundColor: COLORS.grey_box,
    width: scale(150),
    height: scale(112),
    borderRadius: scale(12),
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
  },
  priceContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.main,
    alignItems: 'center',
    marginTop: 32,
  },
  boxName: {
    fontSize: 17,
    marginBottom: 12,
  },
  probContainer: {
    backgroundColor: COLORS.grey_box,
    borderRadius: scale(6),
    marginTop: 32,
    paddingHorizontal: scale(24),
    paddingVertical: scale(31),
  },
  pieChart: { 
    height: scale(136) 
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    fontSize: scale(12),
    letterSpacing: -0.3,
    color: '#060606',
    marginLeft: 11,
  }
})
