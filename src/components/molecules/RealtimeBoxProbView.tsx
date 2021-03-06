import React, { useState, useEffect, useMemo } from "react"
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
} from 'react-native'
import { Item } from '@constants/types'
import { PieChart } from "react-native-chart-kit";
import HorizontalRule from "@components/atoms/HorizontalRule";
import { URLS } from "@constants/urls";
import { scale, verticalScale } from "@constants/figure";
import Loading from "@components/atoms/Loading";
import MonsterNotice from "./MonsterNotice";

const WIDTH = Dimensions.get('window').width;
const COLORS = [
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8",
  "#ffb400", "#f0573d", "#01becc", "#9a76be", "#566270", "#F8FADD", "#CBA6C3", "#AAABD3", "#519D9E", "#58C9B9", "#9DC8C8"
]

const date_to_string = (date: Date) => {
  return (
    ('0000' + date.getFullYear()).slice(-4) + '.' +
    ('00' + date.getMonth()).slice(-2) + '.' +
    ('00' + date.getDay()).slice(-2) + ' ' +
    ('00' + date.getHours()).slice(-2) + ':' +
    ('00' + date.getMinutes()).slice(-2)
  )
}

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
  const [fetchingDistribution, setFetchingDistribution] = useState<boolean>(false)
  const [fetchingOpenResult, setFetchingOpenResult] = useState<boolean>(true)

  useEffect(() => {
    fetch(URLS.unboxing_api + `open-result/distribution/${boxId}`)
    .then(res => res.json())
    .then(json => {
      let newTemplate = template.slice()

      json.forEach((element: { itemId: number; _count: number; }) => {
        newTemplate.forEach((temp) => {
          if (temp.id == element.itemId) {
            temp.count = element._count
          }
        })
      })

      setTemplate(newTemplate)
    })
    .then(result => setFetchingDistribution(false))

    fetch(URLS.unboxing_api + `open-result/${boxId}`)
    .then(res => res.json())
    .then(json => {
      setOpenResult(json)
    })
    .then(result => setFetchingOpenResult(false))
  }, [])

  let total_count = template.reduce((prev, curr) => {return {count: prev.count + curr.count, id: 0, title:'', color: ''}}).count

  const legendItems = useMemo(
    () => template.map(
      (item) => (
        <View
          key={item.id}
          style={styles.legendItem}
        >
          <View
            style={styles.legendFirstRow}
          >
            <View
              style={styles.centerLegendSquare}
            >
              <View
                style={{
                  height: scale(7),
                  width: scale(7),
                  backgroundColor: item.color
                }}
              >
              </View>
            </View>

            <Text
              style={styles.legendText}
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </View>

          <Text
            style={styles.legendPercent}
          >
            {(100 * item.count / total_count).toFixed(2)} %
          </Text>
        </View>
      )
    ), 
  [template, total_count])

  const upperContent = useMemo(
    () => (
      <>
        <View style={{
          marginHorizontal: scale(24),
        }}>
          <Text
            style={styles.title}
          >
            ????????? ??????
          </Text>

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

            <View
              style={styles.legend}
            >
              {legendItems}
            </View>
          </View>
        </View>

        <HorizontalRule />

        <Text
          style={styles.recentResultTitle}>
          ?????? ????????? ??????
        </Text>
      </>
    ), [template, legendItems]
  )

  return (
    <>
      {openResult.length === 0 ?
        <MonsterNotice
          notice={'?????? ????????? ???????????? ?????????'}
          style={styles.monsterNotice}
        />
        :
        <FlatList
          ListHeaderComponent={upperContent}
          renderItem={
            ({ item }) => (
              <View style={{ marginTop: 15, paddingBottom: 22, borderBottomColor: '#f9f9f9', borderBottomWidth: 2, marginHorizontal: scale(24) }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{`${item.user.nickname} ?????? ${item.item.title}??? ?????????????????????!`}</Text>
                <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 9 }}>
                  <Text style={{ fontSize: 11, opacity: 0.5 }}>{`${date_to_string(new Date(item.openAt))}`}</Text>
                </View>
              </View>
            )}
          data={openResult.slice(0, 20)}
        />
      }      

      {fetchingDistribution || fetchingOpenResult ?
        <Loading />
        : undefined
      }
    </>
  )
}

export default RealtimeProbView

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
    fontSize: 14,
    fontWeight: 'bold'
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentResultTitle: {
    fontSize: 14,
    fontFamily: 'NotoSansCJKkr-Bold',
    letterSpacing: -0.35,
    lineHeight: 20,
    marginTop: 22,
    marginBottom: 7,
    marginLeft: scale(24),
  },
  monsterNotice: {
    marginTop: verticalScale(60)
  },
  legendItem: {
    width: scale(135),
    marginHorizontal: scale(10),
    marginVertical: 3,
  },
  legendFirstRow: { 
    alignContent: 'flex-start', 
    flex: 1, 
    flexDirection: 'row',
  },
  centerLegendSquare: {
    alignItems: 'center', marginTop: 3
  },
  legendText: { 
    fontSize: 11, 
    marginLeft: scale(5),
  },
  legendPercent: { 
    fontSize: 11, 
    marginLeft: WIDTH * (12 / 360), 
    fontWeight: 'bold'
  }
})