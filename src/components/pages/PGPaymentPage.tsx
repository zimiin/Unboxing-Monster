import React from 'react';
import IMP from 'iamport-react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { PGPaymentProps } from '@constants/navigationTypes';

function getUserCode(pg: string, tierCode?: string, type = 'payment') {
  if (tierCode) {
    return 'imp91623210';
  }
  if (type === 'certification') {
    return 'imp10391932';
  }

  switch (pg) {
    case 'kakao':
      return 'imp10391932';
    case 'paypal':
      return 'imp09350031';
    case 'mobilians':
      return 'imp60029475';
    case 'naverco':
    case 'naverpay':
      return 'imp41073887';
    case 'smilepay':
      return 'imp49241793';
    case 'chai':
      return 'imp37739582';
    case 'alipay':
      return 'imp87936124';
    case 'payple':
      return 'imp42284830';
    default:
      return 'imp19424728';
  }
}

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
  const params = route.params?.params;
  const tierCode = route.params?.tierCode;
  const userCode = getUserCode(params!.pg, tierCode);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Payment
        userCode={userCode}
        tierCode={tierCode}
        loading={<Loading />}
        data={params!}
        callback={(response) => navigation.replace('PGPaymentResult', response)}
      />
    </SafeAreaView>
  );
}

export default PGPaymentPage