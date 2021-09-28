import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import Header from '@components/organisms/header/Header'

interface Props {
  onPressBack: () => void,
  pointHistories: {timestamp: string, title: string, remain: number, change: number}[]
}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const PointHistoryTemplate  = (props: Props) => {
  const pointHistories = props.pointHistories

  const toLocaleStringWithSign = (num: number) => {
    if (num >= 0) {
      return '+ ' + num.toLocaleString()
    } else {
      return '- ' + (-num).toLocaleString()
    }
  }

  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.onPressBack}
        title={'포인트내역'}
      />

      <HorizontalRule />

      <ScrollView style={styles.container}>
        {
          pointHistories.map((pointHistory, _) => 
            (
              <View style={{marginLeft: WIDTH * (24 / 360), marginRight: WIDTH * (24 / 360), height: HEIGHT * (143 / 740), borderBottomColor: '#f8f8f8', borderBottomWidth: HEIGHT * (2 / 740)}}>
                <Text style={{top: HEIGHT * (25 / 740), fontSize: 15, opacity: 0.7, lineHeight: HEIGHT * (18 / 740), fontFamily: 'Roboto-Medium'}}>{pointHistory.timestamp}</Text>
                <Text style={{top: HEIGHT * (44 / 740), lineHeight: HEIGHT * (22 / 740), fontSize: 15, fontFamily: 'NotoSansCJKkr-Bold'}}>{pointHistory.title}</Text>
                <Text style={{top: HEIGHT * (37 / 740), lineHeight: HEIGHT * (18 / 740), fontSize: 14, fontFamily: 'NotoSansCJKkr-Regular', textAlign: 'right', opacity: 0.5}}>{toLocaleStringWithSign(pointHistory.change)} P</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: WIDTH * (187 / 360), top: HEIGHT * (37 / 740)}}>
                  <Text style={{fontSize: 16, lineHeight: HEIGHT * (24 / 740), fontFamily: 'NotoSansCJKkr-Medium'}}>잔액</Text>
                  <Text style={{fontSize: 16, lineHeight: HEIGHT * (19 / 740), marginTop: HEIGHT * (3.5 / 740), fontFamily: 'Roboto-Medium'}}>{pointHistory.remain.toLocaleString()} P</Text>
                </View>
              </View>
            )
          )
        }
      </ScrollView>

    </>
  )
}

export default PointHistoryTemplate 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})