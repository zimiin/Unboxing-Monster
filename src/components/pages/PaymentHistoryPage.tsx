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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [purchaseIdxToRefund, setPurchaseIdxToRefund] = useState<number>()
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
  const [errorModalContent, setErrorModalContent] = useState<string>('')

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
    setIsLoading(true)

    try {
      if (purchaseIdxToRefund === undefined) {
        throw 'No purchaseIdxToRefund'
      }

      const response = await fetch(
        URLS.unboxing_api + 'purchase/refund', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify({
          imp_uid: paymentHistories[purchaseIdxToRefund].imp_uid,
          merchant_uid: paymentHistories[purchaseIdxToRefund].id,
          checksum: paymentHistories[purchaseIdxToRefund].price - paymentHistories[purchaseIdxToRefund].usedPoint
        })
      })

      if (response.status === 200) {
        let newPaymentHistories = paymentHistories.slice()
        newPaymentHistories[purchaseIdxToRefund].refund = true
        setPaymentHistories(newPaymentHistories)

        setShowAfterRefundModal(true)
      } else if (response.status === 409) {
        setErrorModalContent('이미 사용된 박스가 있어 환불 불가능합니다.')
        setShowErrorModal(true)
      } else {
        const json = await response.json()
        setErrorModalContent('Error code: ' + response.status)
        throw 'Failed to PATCH ' + response.url + ' status ' + response.status + ', ' + json.message
      }
    } catch (error) {
      setShowErrorModal(true)
      console.log('Error in refund', error)
    } finally {
      setIsLoading(false)
    }
  }

  const onPressRefund = (idx: number) => {
    setPurchaseIdxToRefund(idx)
    setShowRefundConfirmModal(true)
  }

  return (
    <PaymentHistoryTemplate 
      paymentHistories={paymentHistories}
      showRefundConfirmModal={showRefundConfirmModal}
      showAfterRefundModal={showAfterRefundModal}
      isLoading={isLoading}
      errorModalContent={errorModalContent}
      showErrorModal={showErrorModal}
      onPressBack={() => navigation.goBack()}
      onPressRefund={onPressRefund}
      closeRefundConfrimModal={() => setShowRefundConfirmModal(false)}
      processRefund={refund}
      closeAfterRefundModal={() => setShowAfterRefundModal(false)}
      closeErrorModal={() => setShowErrorModal(false)}
    />
  )
}

export default PaymentHistoryPage

