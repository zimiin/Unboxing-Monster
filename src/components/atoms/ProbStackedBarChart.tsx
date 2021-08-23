import React from "react"
import { useState } from "react"
import {
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

import { StackedBarChart } from "react-native-chart-kit"
import { StackedBarChartData } from "react-native-chart-kit/dist/StackedBarChart"
View

const ProbStackedBarChart = ({data, style}: {data: StackedBarChartData, style: Partial<ViewStyle> | undefined}) => {
  return (
    <StackedBarChart
      data={data} 
      height={340} 
      width={200} 
      withVerticalLabels={false} 
      withHorizontalLabels={false} 
      chartConfig={{
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        barPercentage: 1.2,
      }} 
      style={style} 
      hideLegend={true}
    />
  )
}

export default ProbStackedBarChart