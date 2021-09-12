import React from 'react'
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
import { PieChart } from 'react-native-chart-kit'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  boxImage: ImageSourcePropType,
  boxPrice: number,
  boxName: string,
  onPressGoBack: () => void,
  onPressNext: () => void,
}

const BoxMakingStep3Template = (props: Props) => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ]

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
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
              data={data}
              width={280}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 50]}
              absolute
              hasLegend={false}
            />
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
  }
})
