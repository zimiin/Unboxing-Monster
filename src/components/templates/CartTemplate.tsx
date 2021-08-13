import HorizontalRule from '@components/atoms/HorizontalRule'
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import BaseHeader from '@components/organisms/header/BaseHeader'
import { scale } from 'react-native-size-matters'
import CheckBox from '@components/atoms/button/CheckBox'
import { BoxId } from '@constants/types'
import FastImage from 'react-native-fast-image'
import SubTitle from '@components/atoms/typography/SubTitle'
import DeleteButton from '@components/atoms/button/DeleteButton'
import { defaultBox } from '@constants/images'
import MinusButton from '@components/atoms/button/MinusButton'
import PlusButton from '@components/atoms/button/PlusButton'

export interface CartData {
  boxId: number,
  count: number,
  modifyCount: (amount: number) => void,
  checked: boolean,
  setChecked: (bool: boolean) => void,
  delete: () => void,
}

export interface BoxInfo {
  name: string,
  price: number,
  image: string,
}

const defaultBoxInfo: BoxInfo = {
  name: '',
  price: 0,
  image: defaultBox
}

export type BoxData = Map<BoxId, BoxInfo>

interface Prop {
  onPressBack: () => void,
  cartData: CartData[],
  boxData: BoxData,
  checkAll: boolean,
  onPressCheckAll: () => void,
  totalBoxCount: number,
  totalBoxPrice: number,
}

const CartTemplate = (props: Prop) => {
  const getItems = () => {
    if (props.cartData) {
      return (
        props.cartData.map((item) => {
          const boxInfo: BoxInfo = props.boxData.get(item.boxId) || defaultBoxInfo

          return (
            <View
              key={item.boxId}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(6, 6, 6, 0.15)',
                paddingVertical: 15,
                paddingHorizontal: scale(24),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomColor: '#f9f9f9',
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}
              >
                <CheckBox
                  checked={item.checked}
                  onPress={() => item.setChecked(!item.checked)}
                />

                <FastImage
                  source={{ uri: boxInfo.image}}
                  style={{
                    width: 78,
                    height: 78,
                    marginLeft: scale(14),
                  }}
                />

                <View
                  style={{
                    marginLeft: scale(14),
                    flex: 1,
                  }}
                >
                  <SubTitle
                    content={boxInfo.name}
                  />

                  <Text
                    style={{
                      fontSize: 12,
                      color: 'rgba(6, 6, 6, 0.5)',
                      marginTop: 1,
                    }}
                  >
                    {boxInfo.price}원
                  </Text>
                </View>
                
                <View
                  style={{
                    height: '100%',
                  }}
                >
                  <DeleteButton 
                    onPress={item.delete}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingTop: 15,
                }}
              >
                <Text
                  style={[styles.text14, {
                    // marginRight: scale(33),
                    marginRight: 33,
                  }]}
                >
                  수량
                </Text>

                <MinusButton
                  onPress={() => item.modifyCount(-1)}
                />

                <View
                  style={{
                    width: scale(60),
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={styles.text14}
                    >
                    {item.count}개
                  </Text>
                </View>

                <PlusButton
                  onPress={() => item.modifyCount(+1)}
                />
              </View>
            </View>
          )
        })
      )
    }
  }
  
  const items = getItems()

  
  
  return (
    <>
      <BaseHeader
        canGoBack={true}
        goBackAction={props.onPressBack}
        title={'장바구니'}
      />
      <HorizontalRule />
      
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        {/* 전체선택 */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: scale(24),
            paddingVertical: 20,
            borderBottomColor: '#f9f9f9',
            borderBottomWidth: 1,
          }}
        >
          <CheckBox 
            checked={props.checkAll}
            onPress={props.onPressCheckAll}
          />

          <Text 
            style={[styles.text14, {marginLeft: scale(14)}]}
          >
            전체선택
          </Text>
        </View>

        {items}

        <View
          style={{
            paddingHorizontal: scale(24),
            paddingTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >

          {/* 총 결제 박스 개수 및 금액 */}
          <Text
            style={[styles.text14,{
              flex:1,
            }]}
            >
            총 {props.totalBoxCount}박스 결제 금액
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {props.totalBoxPrice} 원
          </Text>
        </View>

        {/* 결제하기 버튼 */}
        <View
          style={{
            alignItems: 'center',
            marginTop: 28,
          }}
        >
          <TouchableOpacity
            style={{
              width: scale(312),
              height: 48,
              backgroundColor: '#29a3ff',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              결제하기  
            </Text>  
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default CartTemplate

const styles = StyleSheet.create({
  text14: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})
