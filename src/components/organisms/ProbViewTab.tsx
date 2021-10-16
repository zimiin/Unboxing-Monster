import React from "react"
import { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native'
import { Item } from '@constants/types'
import BoxProbView from "@components/molecules/BoxProbView";
import RealtimeProbView from "@components/molecules/RealtimeBoxProbView";

const WIDTH = Dimensions.get('window').width;

const ProbViewTab = ({ items, probs, boxId } : { items: Item[], probs: number[], boxId: number }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <View style={styles.tab}>
        <TouchableOpacity style={styles.tabLeftButton} onPress={() => setSelected(0)}>
          <View style={selected == 0 ? styles.tabSelectedContainer: styles.tabNotSelectedContainer}>
            <Text style={[styles.tabButtonText, selected == 0 ? styles.tabButtonSelectedText: styles.tabButtonNotSelectedText]}>
              상품 제공 확률
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabRightButton} onPress={() => setSelected(1)}>
          <View style={selected == 1 ? styles.tabSelectedContainer: styles.tabNotSelectedContainer}>
            <Text style={[styles.tabButtonText, selected == 1 ? styles.tabButtonSelectedText: styles.tabButtonNotSelectedText]}>
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
        <RealtimeProbView items={items} boxId={boxId}/>
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
    color: '#060606',
  },
  tabButtonNotSelectedText: {
    color: 'rgb(143, 143, 143)',
  },
  tabButtonText: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: 14,
    letterSpacing: -0.35,
  }
})