import MyCustomBoxTemplate from '@components/templates/MyCustomBoxTemplate'
import { MyCustomBoxProps } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Box } from '@constants/types'
import { URLS } from '@constants/urls'
import { getLoginUserId } from '@src/utils/loginUtils'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'

const MyCustomBoxPage = ({ route, navigation }: MyCustomBoxProps) => {
  const [{cart}, {}] = useContext(CartContext)
  const [boxList, setBoxList] = useState<Box[]>()

  const getBoxList = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const response = await fetch(
        URLS.unboxing_api + 'box/custom', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }
      )

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const boxes: Box[] = await response.json()
      return boxes
    } catch (error) {
      console.log('Error in getBoxList', error)
      throw error
    }
  }, [])

  useEffect(() => {
    try {
      getLoginUserId().then(
        userId => {
          getBoxList().then(
            result => setBoxList(result.filter((value) => value.ownerId === userId))
          )
        }
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <MyCustomBoxTemplate
      hasPrevScreen={true}
      cartItemCount={cart.size}
      boxList={boxList}
      onPressGoBack={() => navigation.goBack()}
      onPressCart={() => navigation.navigate('Cart')}
      onPressBoxItem={(boxId: number) => navigation.push('BoxInfo', {boxId: boxId})}
    />
  )
}

export default MyCustomBoxPage

