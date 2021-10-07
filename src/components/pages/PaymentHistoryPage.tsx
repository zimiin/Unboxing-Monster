import React, { useContext, useEffect, useState } from 'react'
import PaymentHistoryTemplate from '@components/templates/PaymentHistoryTemplate'
import { PaymentHistoryNavigationProp } from '@constants/navigationTypes'
import { PurchaseLog } from '@constants/types'
import { URLS } from '@constants/urls'
import { UserContext } from '@src/stores/UserContext'

const PaymentHistoryPage = ({ navigation }: {navigation: PaymentHistoryNavigationProp}) => {
  const [{accessToken}, {}] = useContext(UserContext)
  const [paymentHistories, setPaymentHistories] = useState<PurchaseLog[]>([])
  const [showRefundConfirmModal, setShowRefundConfirmModal] = useState<boolean>(false)
  const [showAfterRefundModal, setShowAfterRefundModal] = useState<boolean>(false)

  useEffect(() => {
    const getPaymentLog = async (): Promise<PurchaseLog[] | undefined> => {
      try {
        const response = await fetch(
          URLS.unboxing_api + 'purchase/user', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        })

        if (response.status !== 200) {
          const json = await response.json()
          throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
        }

        const log: PurchaseLog[] = await response.json()
        return log
      } catch (error) {
        console.log('Error in getPaymentLog', error)
        throw error
      }
    }

    const comp = (a: PurchaseLog, b: PurchaseLog) => {
      const aDate = new Date(a.purchaseAt)
      const bDate = new Date(b.purchaseAt)

      if (aDate < bDate) {
        return 1
      } else {
        return -1
      }
    }

    getPaymentLog()
      .then(log => setPaymentHistories(log?.sort(comp) || []))
      .catch(error => console.log('Error in useEffect of PaymentHistoryPage', error))
  }, [])

  const refund = async () => {
    // 로딩 넣기
    setShowAfterRefundModal(true)
  }

  return (
    <PaymentHistoryTemplate 
      paymentHistories={paymentHistories}
      showRefundConfirmModal={showRefundConfirmModal}
      showAfterRefundModal={showAfterRefundModal}
      onPressBack={() => navigation.goBack()}
      onPressRefund={() => setShowRefundConfirmModal(true)}
      closeRefundConfrimModal={() => setShowRefundConfirmModal(false)}
      processRefund={refund}
      closeAfterRefundModal={() => setShowAfterRefundModal(false)}
    />
  )
}

export default PaymentHistoryPage

