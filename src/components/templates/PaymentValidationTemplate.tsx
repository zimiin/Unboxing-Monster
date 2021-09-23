import React from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

const PaymentValidationTemplate = () => {
  return (
    <SafeAreaView
      style={styles.screen}
    >
      <ActivityIndicator
        size={'large'}
      />

      <Text>Hello???</Text>

      {isSuccess ? (
        <Text>Succeed!</Text>
      ) : (
        <Text>Failed!</Text>
      )}
      <Text>
        {`결제에 ${isSuccess ? '성공' : '실패'}하였습니다`}
      </Text>
      <Text>아임포트 번호</Text>
      <Text>{imp_uid}</Text>

      {isSuccess ? (
        <>
          <Text>주문번호</Text>
          <Text>{merchant_uid}</Text>
        </>
      ) : (
        <>
          <Text>에러메시지</Text>
          <Text>{error_msg}</Text>
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('PaymentComplete', { paymentId: 1 })}
      >
        <Text>돌아가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PaymentValidationTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})