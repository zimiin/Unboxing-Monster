import React, { useEffect, useState, useContext, useMemo } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import BoxInfoTemplate from '@components/templates/BoxInfoTemplate'
import BoxListItem from '@components/molecules/BoxListItem'
import { BoxInfoProps } from '@constants/navigationTypes'
import { BoxWithItems } from '@constants/types'
import { CartContext } from '@src/stores/CartContext'
import { defaultBox, IMAGES } from '@constants/images'
import { URLS } from '@constants/urls'

const BoxInfo = ({ route, navigation }: BoxInfoProps) => {
  const [{ cart }, { }] = useContext(CartContext)
  const [data, setData] = useState<BoxWithItems>()
  const [showReportModal, setShowReportModal] = useState<boolean>(false)

  useEffect(() => {
    const getBoxInfo = async (boxId: number): Promise<BoxWithItems | undefined> => {
      try {
        const url = URLS.unboxing_api + 'box/' + boxId
        const response = await fetch(url)

        if (response.status !== 200) {
          const json = await response.json()
          throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
        }

        const boxData: BoxWithItems = await response.json()
        return boxData
      } catch (error) {
        console.log('Error in getBoxInfo', error)
      }
    }

    getBoxInfo(route.params.boxId).then(data => setData(data))
  }, [])

  const items = useMemo(() => {
    return (
      data?.items.map(
        (item) => {
          return (
            <View
              style={styles.itemContainer}
              key={item.id}
            >
              <BoxListItem
                image={item.image}
                title={item.title}
                price={item.price}
                onPress={
                  () => navigation.push('ItemInfo',
                    {
                      itemId: item.id,
                      itemImage: item.image,
                      itemTitle: item.title,
                      itemPrice: item.price,
                      itemDetail: item.detail,
                    }
                  )
                }
              />
            </View>
          )
        }
      )
    )
  }, [data])

  return (
    <BoxInfoTemplate
      boxImage={data?.isLocal ? IMAGES[data.image] : data?.image ? {uri: data.image} : defaultBox}
      boxName={data?.title}
      boxPrice={data?.price}
      boxDetail={data?.detail}
      boxItems={items || []}
      isManagerBox={data?.isManager}
      navigation={navigation}
      onPressAddToCart={data ? () => navigation.push('AddToCart', {boxData: data}) : () => console.log('No data')}
      onPressProbInfo={data ? () => navigation.push('ProbInfo', {boxId: data.id, boxPrice: data.price, items: data.items}) : () => console.log('No data')}
      cartItemCount={cart.size > 0 ? cart.size : undefined}
      showReportModal={showReportModal}
      onPressReport={() => setShowReportModal(true)}
      closeReportModal={() => setShowReportModal(false)}
    />
  )
}

export default BoxInfo

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    width: '50%',
    marginBottom: 28,
  }
})