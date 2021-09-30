import React, { useState, useEffect} from "react"
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native'
import { Item } from '@constants/types'
import { PieChart } from "react-native-chart-kit";
import HorizontalRule from "@components/atoms/HorizontalRule";
import { URLS } from "@constants/urls";
import { parseDate } from "@src/utils/utils";

const WIDTH = Dimensions.get('window').width;
const COLORS = [
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8",
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8"
]

const RealtimeProbView = ({items, boxId}: { items: Item[], boxId: number }) => {

  const [openResult, setOpenResult] =  useState<any[]>([])
  const [template, setTemplate] = useState<{id: number, title: string, count: number, color: string}[]>(items.map((item, idx) => {
    return {
      id: item.id,
      title: item.title,
      count: 0,
      color: COLORS[idx]
    }
  }))

  useEffect(() => {
    fetch(URLS.unboxing_api + `open-result/distribution/${boxId}`)
    .then(res => res.json())
    .then(json => {
      json.forEach((element: { itemId: number; _count: number; }) => {
        template.forEach((temp) => {
          if (temp.id == element.itemId) {
            temp.count = element._count
          }
        })
      });
      setTemplate(template)
    })
    fetch(URLS.unboxing_api + `open-result/${boxId}`)
    .then(res => res.json())
    .then(json => {
      setOpenResult(json)
    })
  }, [])

  let total_count = template.reduce((prev, curr) => {return {count: prev.count + curr.count, id: 0, title:'', color: ''}}).count

  return (
    <View>
      <View style={{
        marginLeft: WIDTH * (24 / 360),
        marginRight: WIDTH * (24 / 360),
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
        paddingBottom: 14,
        marginBottom: 28
      }}>
        <PieChart
          backgroundColor="#f9f9f9"
          data={template}
          width={Dimensions.get('window').width * (312 / 360)}
          height={Dimensions.get('window').width * (150 / 360)}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          paddingLeft={"241"}
          accessor={"count"}
          center={[-150, 0]}
          hasLegend={false}
          absolute
        />
          <FlatList
            numColumns={2}
            renderItem={
              ({item}) => (
                <View style={{height: 32, width: WIDTH * (156 / 360), paddingLeft: WIDTH * (25 / 360)}}>
                  <View style={{alignContent: 'flex-start', flex: 1, flexDirection: 'row'}}>
                    <View style={{alignItems: 'center', marginTop: 3}}>
                      <View style={{height: WIDTH * (7 / 360), width: WIDTH * (7 / 360), backgroundColor: item.color}}>
                    </View>
                    </View>
                    <Text style={{fontSize: 11, marginLeft: WIDTH * (5/ 360)}}>{item.title}</Text>
                  </View>
                  <Text style={{fontSize: 11, marginLeft: WIDTH * (12 / 360), position: 'relative', top: -5, fontWeight: 'bold'}}>{(100 * item.count / total_count).toFixed(2)} %</Text>
                </View>
              )}
            data={template}
            centerContent={true}
          />
      </View>
      </View>
      <HorizontalRule/>
      <View style={{
        marginLeft: WIDTH * (24 / 360),
        marginRight: WIDTH * (24 / 360),
      }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 22, marginBottom: 7}}>최근 1등 당점자 현황</Text>
        <ScrollView>
          {
            openResult.map((result) => (
              <View style={{marginTop: 22}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>{`${result.user.nickname} 님이 ${result.item.title}에 당첨되었습니다!`}</Text>
                <View style={{flex: 1, alignItems: 'flex-end', marginTop: 9}}>
                  <Text style={{fontSize: 11, opacity: 0.5}}>{parseDate(new Date(result.openAt))}</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default RealtimeProbView

const styles = StyleSheet.create({

})