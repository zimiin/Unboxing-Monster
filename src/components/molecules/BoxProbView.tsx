import React from "react"
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Item } from '@constants/types'
import ProbStackedBarChart from "@components/atoms/ProbStackedBarChart";

const WIDTH = Dimensions.get('window').width;
const COLORS = [
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8",
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8"
]



const BoxProbView = ({probs, items}: {probs: number[], items: Item[]}) => {
  return (
    <View>  
    <ProbStackedBarChart 
      data={{
        labels: [],
        legend: [],
        data: [
          probs.slice().reverse()
        ],
        barColors: COLORS
      }}
      style={styles.barchart}
    />
    <View style={styles.barchartLegendTop}>
      <Text style={styles.barcharLegendText}>
        100 %
      </Text>
    </View>
    <View style={styles.barchartLegendBottom}>
      <Text style={styles.barcharLegendText}>
        0 %
      </Text>
    </View>
    <View style={styles.tableLeftCategory}>
      <Text style={styles.tableLeftCategoryText}>
        구성 상품
      </Text>
    </View>
    <View style={styles.tableRightCategory}>
      <Text style={styles.tableRightCategoryText}>
        확률
      </Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tableview}>
      {items.map((item, index) => (
        <View key={index} style={index % 2 == 1 ? 
          styles.oddEntry : styles.evenEntry}>
          <View style={styles.leftEntry}>
            <View style={{backgroundColor: COLORS[items.length - index - 1], ...styles.entryBlock}}/>
            <Text style={styles.entryText}>
              {item.title}
            </Text>
          </View>
          <View style={styles.rightEntry}>
            <Text style={{textAlign: 'right', ...styles.entryText}}>
              {(probs[index] * 100).toFixed(2) + '% '}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
    <View style={styles.tableBottomBorder}/>
  </View>
  )
}

export default BoxProbView

const styles = StyleSheet.create({
  barchart: {
    position: 'absolute',
    top: 50,
    left: -15
  },
  barchartLegendTop: {
    position: 'absolute', 
    width: WIDTH * (36 / 360), 
    top: 44, 
    left: WIDTH * (24 / 360), 
    borderBottomColor: 'rgb(143, 143, 143)', 
    borderBottomWidth: 1, 
    paddingBottom: 5
  },
  barchartLegendBottom: {
    position: 'absolute', 
    width: WIDTH * (36 / 360), 
    top: 298, 
    left: WIDTH * (24 / 360), 
    borderBottomColor: 'rgb(143, 143, 143)', 
    borderBottomWidth: 1, 
    paddingBottom: 5
  },
  barcharLegendText: {
    fontSize: 12, 
    color: 'rgb(143, 143, 143)', 
    textAlign: 'right'
  },
  tableLeftCategory: {
    position: 'absolute', 
    paddingLeft: 10, 
    width: WIDTH * (204 / 360), 
    top: 36, 
    left: WIDTH * (140 / 360), 
    borderBottomColor: 'rgb(160, 160, 160)', 
    borderBottomWidth: 1, 
    paddingBottom: 13
  },
  tableLeftCategoryText: {
    fontSize: 14, 
    color: '#060606', 
    fontWeight: 'bold', 
    textAlign: 'left'
  },
  tableRightCategory: {
    position: 'absolute', 
    paddingRight: 30, 
    width: WIDTH * (204 / 360), 
    top: 36, 
    left: WIDTH * (140 / 360), 
    borderBottomColor: 'rgb(160, 160, 160)', 
    borderBottomWidth: 1, 
    paddingBottom: 13
  },
  tableRightCategoryText: {
    fontSize: 14, 
    color: '#060606', 
    fontWeight: 'bold', 
    textAlign: 'right'
  },
  tableview: {
    position: 'absolute', 
    width: WIDTH * (204 / 360), 
    top: 64, 
    left: WIDTH * (140 / 360), 
    height: 256, 
    backgroundColor: '#FFF'
  },
  oddEntry: {
    backgroundColor: '#f9f9f9', 
    height: 48, 
    justifyContent: "center", 
    alignItems: 'center', 
    flex: 1, 
    flexDirection: 'row'
  },
  evenEntry: {
    backgroundColor: 'white', 
    height: 48, 
    justifyContent: "center", 
    alignItems: 'center', 
    flex: 1, 
    flexDirection: 'row'
  },
  leftEntry: {
    flex: 2, 
    marginLeft: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  rightEntry: {
    flex: 1, 
    marginRight: 30
  },
  entryBlock: {
    width: 6, height: 6, marginRight: 7
  },
  entryText: {
    letterSpacing: -0.8, 
    fontSize: 12
  },
  tableBottomBorder: {
    position: 'absolute', 
    paddingRight: 30, 
    width: WIDTH * (204 / 360), 
    top: 305, 
    left: WIDTH * (140 / 360), 
    borderBottomColor: 'rgb(160, 160, 160)', 
    borderBottomWidth: 1, 
    paddingBottom: 13
  }
})