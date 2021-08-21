import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const ItemInfoDetail = ({ detail }: { detail: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"상품정보"}
      </Text>
      <Text style={styles.subtitle}>
        {"상품설명"}
      </Text>
      <Text style={styles.text}>
        {detail}
      </Text>
      <Text style={styles.subtitle}>
        {"배송 기프티쇼 소개"}
      </Text>
      <Text style={styles.text}>
        {"• 본 기프티쇼 상품은 배송주소를 입력하신 후 해당 상품을 주소지\n   로 수령받는 상품입니다."}
      </Text>
      <Text style={styles.text}>
        {"• 주문시 주소 및 연락처를 정확히 기입해주세요."}
      </Text>
      <Text style={styles.subtitle}>
        {"배송 기프티쇼 소개"}
      </Text>
      <Text style={styles.text}>
        {"• 주문시 주소 및 연락처를 정확히 기입해주세요."}
      </Text>
      <Text style={styles.text}>
        {"• 12시이전 주문건은 당일 발송되며, 그 이후 주문건은 익일 발송됩\n   니다."}
      </Text>
      <Text style={styles.text}>
        {"• 주문하신 제품은 우체국택배로 발송됩니다."}
      </Text>
      <Text style={styles.text}>
        {"• 배송 및 상품관련 문의는 02-595-3014 로 연락바랍니다."}
      </Text>
    </View>
  )
}

export default ItemInfoDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingTop: 22,
    paddingBottom: 39,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: -0.37,
    color: '#060606',
    marginBottom: 1,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#060606',
    marginTop: 12,
    lineHeight: 20,
  },
  text: {
    fontSize: 12,
    letterSpacing: -0.3,
    color: '#060606',
    marginTop: 4,
    lineHeight: 20,
  }
})