import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import HorizontalBoxList from '@components/molecules/HorizontalBoxList'
import { Box } from '@constants/types'
import { defaultBox } from '@constants/images'

const defaultData: Box[] = [{
  id: 0,
  title: '',
  price: 0,
  image: defaultBox,
  detail: '',
  ownerId: '',
  sales: 0,
}]

const CustomBoxList = () => {
  const [data, setData] = useState<Box[]>()

  const getBoxList = async () => {
    let url = 'http://3.37.238.160/box'
    let response = await fetch(url)
    if (response.status === 200) {
      let json = await response.json()
      setData(json)
    } else {
      console.log('No reponse! url:', url)
    }
  }

  useEffect(() => {
    getBoxList()
  }, [])

  return (
    <View>
      <Text style={styles.title}>
        실시간 커스텀 박스
      </Text>

      <HorizontalBoxList items={data || defaultData} />
    </View>
  )
}

export default CustomBoxList

const styles = StyleSheet.create({
  title: {
    marginTop: 36,
    marginLeft: 24,
    fontSize: 18,
    fontWeight: 'bold',
  }
})