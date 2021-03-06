import React, { useContext, useMemo, useState } from 'react'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import BoxMakingStep3Template from '@components/templates/BoxMakingStep3Template'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import { generateProbability } from '@src/utils/probabilites'
import { URLS } from '@constants/urls'
import { Box } from '@constants/types'
import { CartContext } from '@src/stores/CartContext'
// import { getAccessTokenFromAsyncStorage, getNicknameFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { UserContext } from '@src/stores/UserContext'

const BoxMakingStep3Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const [{boxImage, boxPrice, boxName, selectedItems}, {}] = useContext(CustomBoxContext)
  const [{}, {modifyBoxCount, addBoxData}] = useContext(CartContext)
  const [{accessToken, nickname}, {}] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const itemInfo: {id: number, name: string}[] = useMemo(() => {
    return selectedItems.map(
      item => {
        return {
          id: item.id,
          name: item.name
        }
      }
    )
  }, [selectedItems])

  const itemPrices: number[] = useMemo(() => {
    return selectedItems.map(
      item => item.price
    )
  }, [selectedItems])

  const probabilites: number[] = useMemo(() => {
    return generateProbability(itemPrices, boxPrice, 0.5)
  }, [itemPrices, boxPrice])

  const requestPostBox = async () => {
    try {
      const items = Array.from(selectedItems, item => item.id)
      const response = await fetch(
        URLS.unboxing_api + 'box', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
          },
          body: JSON.stringify({
            title: boxName,
            price: boxPrice,
            image: boxImage,
            isLocal: false,
            detail: nickname + '?????? ' + boxName + ' ???????????????.',
            boxItems: items,
          })
        }
      )
      
      if (response.status !== 201) {
        const json = await response.json()
        throw 'Failed to POST ' + response.url + ', status ' + response.status + ', ' + json.message
      }

      const box: Box = await response.json()
      return box
    } catch (error) {
      console.log('Error in requestPostBox', error)
      throw error
    }
  }

  const saveBoxInDB = async () => {
    try {
      const box = await requestPostBox()
      return box
    } catch (error) {
      console.log('Error in saveBoxInDB', error)
      throw error
    }
  }

  const addToCart = async (box: Box) => {
    modifyBoxCount(box.id, +1)
    addBoxData(box)
  }

  const completeBoxMaking = async () => {
    try {
      const box: Box = await saveBoxInDB()
      addToCart(box)
      setIsLoading(false)
      navigation.popToTop()
    } catch (error) {
      console.log('Error in completeBoxMaking', error)
    }
  }
  
  return (
    <BoxMakingStep3Template
      screenTitle={'????????? ?????? ?????????'}
      hasPreviousScreen={true}
      boxImage={{uri: boxImage}}
      boxPrice={boxPrice}
      boxName={boxName}
      probs={probabilites}
      itemInfo={itemInfo}
      isLoading={isLoading}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => {
        setIsLoading(true)
        completeBoxMaking()
      }}
    />
  )
}

export default BoxMakingStep3Page
