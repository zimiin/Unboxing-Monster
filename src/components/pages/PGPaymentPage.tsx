import React from 'react';
import IMP from 'iamport-react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { PGPaymentProps } from '@constants/navigationTypes';

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
      }}
    >
      <View>
        <Text>잠시만 기다려주세요...</Text>
      </View>
    </View>
  );
}

const PGPaymentPage = ({ route, navigation }: PGPaymentProps) => {
  const params = route.params?.data.params
  if (params === undefined) {
    throw `params can't be null`
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Payment
        userCode={'imp44809950'}
        loading={<Loading />}
        data={params}
        callback={(response) => {
          navigation.replace('PaymentComplete', { response: response, point: route.params?.point })
          console.log('Payment complete')
        }}
      />
    </SafeAreaView>
  );
}

export default PGPaymentPage