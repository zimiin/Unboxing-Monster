import React, { useState, useEffect } from 'react'
import TwoColumnBoxList from '@components/molecules/TwoColumnBoxList'
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

const BoxProductList = () => {
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
    <TwoColumnBoxList items={data || defaultData} />
  )
}

export default BoxProductList