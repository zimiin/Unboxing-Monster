import React, { useEffect, useState } from 'react'
import PointHistoryTemplate from '@components/templates/PointHistoryTemplate'
import { PointHistoryNavigationProp } from '@constants/navigationTypes'

const PointHistoryPage = ({ navigation }: {navigation: PointHistoryNavigationProp}) => {
  const [pointHistories, setPointHistories] = useState<{timestamp: string, title: string, remain: number, change: number}[]>([]);

  useEffect(() => {
    const samplePointHistories = [
      {
        timestamp: '2021.08.12 20:30:44',
        title: '포인트 사용',
        remain: 12300,
        change: -3200,
      },
      {
        timestamp: '2021.08.12 20:20:28',
        title: '결제 환불',
        remain: 15500,
        change: 4100,
      },
      {
        timestamp: '2021.08.12 15:19:16',
        title: '포인트 사용',
        remain: 11400,
        change: -5000,
      }
    ]
    setPointHistories(samplePointHistories);
  }, [])

  return (
    <PointHistoryTemplate 
      onPressBack={() => navigation.goBack()}
      pointHistories={pointHistories}
    />
  )
}

export default PointHistoryPage
