import React from "react"
import { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { Item } from '@constants/types'
import BoxProbView from "@components/molecules/BoxProbView";
import { PieChart } from "react-native-chart-kit";
import HorizontalRule from "@components/atoms/HorizontalRule";

const WIDTH = Dimensions.get('window').width;

const ProbViewTab = ({ items, probs, boxId } : { items: Item[], probs: number[], boxId: number }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <View style={styles.tab}>
        <TouchableOpacity style={styles.tabLeftButton} onPress={() => setSelected(0)}>
          <View style={selected == 0 ? styles.tabSelectedContainer: styles.tabNotSelectedContainer}>
            <Text style={selected == 0 ? styles.tabButtonSelectedText: styles.tabButtonNotSelectedText}>
              상품 제공 확률
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabRightButton} onPress={() => setSelected(1)}>
          <View style={selected == 1 ? styles.tabSelectedContainer: styles.tabNotSelectedContainer}>
            <Text style={selected == 1 ? styles.tabButtonSelectedText: styles.tabButtonNotSelectedText}>
              실시간 현황
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalRule}/>
      {selected == 0 ? 
      (
        <BoxProbView probs={probs} items={items}/>
      ) : (
        <View>
          <View style={{
            marginLeft: 24,
            marginRight: 24,
          }}>
          <Text style={{
            marginTop: 25,
            fontSize: 14,
            fontWeight: 'bold'
          }}>실시간 현황</Text>
          <View style={{
            backgroundColor: "#f9f9f9",
            paddingTop: 16,
            marginTop: 13,
            marginBottom: 28,
          }}>
            <PieChart
              backgroundColor="#f9f9f9"
              data={[
                {
                  name: "Seoul",
                  population: 1,
                  color: "rgba(131, 167, 234, 1)",
                },
                {
                  name: "Toronto",
                  population: 1,
                  color: "#F00",
                }]}
              width={Dimensions.get('window').width * (312 / 360)}
              height={Dimensions.get('window').width * (150 / 360)}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              paddingLeft={"241"}
              accessor={"population"}
              center={[-150, 0]}
              hasLegend={false}
              absolute
            />
            <Text>asdf</Text>
            <Text>asdf</Text>

            <Text>asdf</Text>
            <Text>asdf</Text>
          </View>
          </View>
          <HorizontalRule/>
          <View style={{
            marginLeft: 24,
            marginRight: 24,
          }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 22, marginBottom: 7}}>최근 1등 당점자 현황</Text>
          </View>
        </View>
      )}
    </>
  )
}

export default ProbViewTab

const styles = StyleSheet.create({
  horizontalRule: {
    width: '100%',
    height: 2,
    backgroundColor: '#f9f9f9',
  },
  tab: {
    flexDirection: "row",
    height: 52,
  },
  tabLeftButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: WIDTH * (10 / 360),
  },
  tabRightButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: WIDTH * (10 / 360),
  },
  tabSelectedContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: WIDTH * (10 / 360),
    marginRight: WIDTH * (10 / 360),
    width: WIDTH * (150 / 360),
    height: 50,
    borderBottomWidth: 4,
    borderBottomColor: '#29a3ff',
  },
  tabNotSelectedContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: WIDTH * (10 / 360),
    marginRight: WIDTH * (10 / 360),
    width: WIDTH * (150 / 360),
  },
  tabButtonSelectedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#060606',
    letterSpacing: -0.35,
  },
  tabButtonNotSelectedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(143, 143, 143)',
    letterSpacing: -0.35,
  },
})