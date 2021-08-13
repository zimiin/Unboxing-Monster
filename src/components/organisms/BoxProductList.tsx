import React, { useState, useEffect } from 'react'

import TwoColumnBoxList from '@components/molecules/TwoColumnBoxList'

import { boxProductInfo } from '@constants/types'

const BoxProductList = () => {
  const [data, setData] = useState<boxProductInfo[]>([{
    id: 0,
    title: '',
    price: 0,
    image: '',
    detail: '',
    ownerId: '',
    sales: 0,
  }])

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
    <TwoColumnBoxList items={data} />
  )
}

export default BoxProductList