import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import BoxInfoTemplate from '@components/templates/BoxInfoTemplate'
import BoxInfoImage from '@components/atoms/BoxInfoImage'
import BoxPriceInfo from '@components/atoms/BoxPriceInfo'
import Body from '@components/atoms/typography/Body'
import BoxListItem from '@components/molecules/BoxListItem'
import { BoxInfoProps } from '@constants/navigationTypes'
import { BoxWithItems } from '@constants/types'
import { CartContext } from '@src/stores/CartContext'
import { defaultBox } from '@constants/images'
import { URLS } from '@constants/urls'

const BoxInfo = ({ route, navigation }: BoxInfoProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)

  const [data, setData] = useState<BoxWithItems>({
    id: route.params.boxId,
    title: '',
    price: 0,
    image: '',
    detail: '',
    ownerId: '',
    sales: 0,
    items: [],
  })

  useEffect(() => {
    const getBoxInfo = async (boxId: number) => {
      let url = URLS.unboxing_api + 'box/' + boxId
      let response = await fetch(url)
      if (response.status === 200) {
        let json = await response.json()
        setData(json)
      } else {
        console.log('No reponse! url:', url)
      }
    }

    getBoxInfo(route.params.boxId)
  }, [])

  const getItems = () => {
    return (
      data.items.map(
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
                onPress = {
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
  }

  const items = getItems()

  return (
    <BoxInfoTemplate
      boxImage={<BoxInfoImage image={data.image ? {uri: data.image} : defaultBox}/>}
      boxName={data.title}
      boxPrice={<BoxPriceInfo price={data.price}/>}
      boxDetail={<Body content={data.detail}/>}
      boxItems={items}
      navigation={navigation}
      onPressAddToCart={() => navigation.push('AddToCart', {boxId: data.id})}
      onPressProbInfo={() => navigation.push('ProbInfo', {boxId: data.id, boxPrice: data.price, items: data.items})}
      cartItemCount={cart.size > 0 ? cart.size : undefined}
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