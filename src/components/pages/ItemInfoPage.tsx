import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { ItemInfoProps } from '@constants/navigationTypes'
import ItemInfoTemplate from '@components/templates/ItemInfoTemplate'

const ItemInfoPage = ({route, navigation}: ItemInfoProps) => { 
 return (
  <ItemInfoTemplate
    image={route.params.itemImage}
    title={route.params.itemTitle}
    price={route.params.itemPrice}
    detail={route.params.itemDetail}
    navigation={navigation}
  />
 )
}

export default ItemInfoPage

