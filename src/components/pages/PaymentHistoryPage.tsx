import React, { useEffect, useState } from 'react'
import PaymentHistoryTemplate from '@components/templates/PaymentHistoryTemplate';
import { PaymentHistoryNavigationProp } from '@constants/navigationTypes'

const PaymentHistoryPage = ({ navigation }: {navigation: PaymentHistoryNavigationProp}) => {
  const [paymentHistories, setPaymentHistories] = useState<{
    timestamp: string, 
    isCanceled: boolean, 
    price: number, 
    point: number, 
    boxes: {
      image: string, 
      title: string, 
      count: number, 
      price: number
    }[]
  }[]>([]);

  useEffect(() => {
    const samplePaymentHistories = [
      {
        timestamp: '2021.08.12 20:30:44',
        isCanceled: true,
        price: 35000,
        point: 3200,
        boxes: [
          {
            image: '',
            title: '엄청난 박스',
            price: 5000,
            count: 3,
          },
          {
            image: '',
            title: '스타벅스 박스',
            price: 20000,
            count: 1,
          }
        ]
      },
      {
        timestamp: '2021.08.12 20:30:44',
        isCanceled: false,
        price: 35000,
        point: 1000,
        boxes: [
          {
            image: '',
            title: '엄청난 박스',
            price: 5000,
            count: 1,
          },
          {
            image: '',
            title: '미스터피자 박스',
            price: 10000,
            count: 1,
          },
          {
            image: '',
            title: '스타벅스 박스',
            price: 20000,
            count: 1,
          }
        ]
      },
      {
        timestamp: '2021.08.12 08:19:27',
        isCanceled: true,
        price: 10000,
        point: 0,
        boxes: [
          {
            image: '',
            title: '미스터피자 박스',
            price: 10000,
            count: 1,
          }
        ]
      },
    ]
    setPaymentHistories(samplePaymentHistories);
  }, [])

  return (
    <PaymentHistoryTemplate 
      onPressBack={() => navigation.goBack()}
      paymentHistories={paymentHistories}
    />
  )
}

export default PaymentHistoryPage

