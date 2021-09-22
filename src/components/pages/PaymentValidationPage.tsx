import React, { useEffect } from 'react'
import { PaymentValidationProps } from '@constants/navigationTypes'

function PaymentValidationPage({ route, navigation }: PaymentValidationProps) {
  const imp_success = route.params?.imp_success;
  const success = route.params?.success;
  const imp_uid = route.params?.imp_uid;
  const merchant_uid = route.params?.merchant_uid;
  const error_msg = route.params?.error_msg;

  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(
    imp_success === 'false' ||
    imp_success === false ||
    success === 'false' ||
    success === false
  );

  useEffect(() => {
    // 에러면 에러 띄우기
    // purchase 보내서 박스 생성 확인
  }, [])

  return (
    
  )
}

export default PaymentValidationPage