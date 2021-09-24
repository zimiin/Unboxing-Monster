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
  Image,
  ImageSourcePropType,
  FlatList,
} from 'react-native'
import { COLORS, PROB_COLORS } from '@constants/colors'
import { PieChart } from 'react-native-svg-charts'
import SquareDot from '@components/atoms/SquareDot'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  boxImage: ImageSourcePropType,
  boxPrice: number,
  boxName: string,
  probs: number[],
  itemInfo: {id: number, name: string}[],
  onPressGoBack: () => void,
  onPressNext: () => void,
}

type ChartData = {
  id: number, 
  name: string,
  prob: number,
  color: string, 
}

const BoxMakingStep3Template = (props: Props) => {
  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
  
  const chartData: ChartData[] = useMemo(() => {
    return props.itemInfo.map(
      (item, index) => {
        return {
          id: item.id,
          name: item.name,
          prob: props.probs[index],
          color: index < PROB_COLORS.length ? PROB_COLORS[index] : randomColor()
        }
      }
    )
  }, [props.itemInfo, props.probs])

  const pieData = useMemo(() =>
    props.probs
      .filter((value) => value > 0)
      .map(
        (value, index) => ({
            value,
            svg: {
              fill: chartData[index].color,
              onPress: () => { },
            },
            key: `pie-${index}`,
          }
        )
      ), [props.probs, chartData])

  const upperComponents = (
    <>
      <View style={styles.imagePriceContainer}>
        <Image
          source={props.boxImage}
          style={styles.boxImage}
        />

        <Bold style={styles.price}>
          {props.boxPrice?.toLocaleString() + ' 원'}
        </Bold>

        <View style={styles.imageBackground} />
      </View>

      <View style={styles.priceContainer}>
        <Bold style={styles.boxName}>
          {props.boxName}
        </Bold>
      </View>

      <View style={styles.pieChartContainer}>
        <PieChart
          style={styles.pieChart}
          data={pieData}
          innerRadius={0}
          padAngle={0}
        />
      </View>
    </>
  )

  const legendItem = ({ item }: { item: ChartData }) => {
    const prob = (item.prob * 100).toFixed(2)

    return (
      <View style={styles.legendItem}>
        <SquareDot
          size={scale(10)}
          color={item.color}
        />

        <Text style={styles.legendText}>
          {item.name + ' (' + prob + '%)'}
        </Text>
      </View>
    )
  }

  const footer = (
    <View style={styles.footer}/>
  )

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

        <FlatList
          ListHeaderComponent={upperComponents}
          renderItem={legendItem}
          data={chartData}
          numColumns={2}
          columnWrapperStyle={styles.legend}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={footer}
        />
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
  pieChartContainer: {
    backgroundColor: COLORS.grey_box,
    borderTopLeftRadius: scale(6),
    borderTopRightRadius: scale(6),
    marginTop: 32,
    paddingHorizontal: scale(24),
    paddingVertical: scale(31),
  },
  pieChart: { 
    height: scale(136) 
  },
  legend: {
    backgroundColor: COLORS.grey_box,
    paddingHorizontal: scale(25),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    width: scale(132),
    paddingLeft: scale(5),
    paddingRight: scale(7),
  },
  legendText: {
    fontSize: scale(12),
    letterSpacing: -0.3,
    color: '#060606',
    marginLeft: 11,
    fontWeight: '500',
  },
  footer: {
    backgroundColor: COLORS.grey_box,
    paddingBottom: 28,
    marginBottom: 32,
    borderBottomLeftRadius: scale(6),
    borderBottomRightRadius: scale(6),
  }
})
