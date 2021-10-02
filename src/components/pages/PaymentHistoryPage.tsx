import React, { useContext, useEffect, useState } from 'react'
import PaymentHistoryTemplate from '@components/templates/PaymentHistoryTemplate'
import { PaymentHistoryNavigationProp } from '@constants/navigationTypes'
import { PurchaseLog } from '@constants/types'
import { URLS } from '@constants/urls'
import { UserContext } from '@src/stores/UserContext'

const PaymentHistoryPage = ({ navigation }: {navigation: PaymentHistoryNavigationProp}) => {
  const [{accessToken}, {}] = useContext(UserContext)
  const [paymentHistories, setPaymentHistories] = useState<PurchaseLog[]>([])

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

    getPaymentLog()
      .then(log => setPaymentHistories(log?.reverse() || []))
      .catch(error => console.log('Error in useEffect of PaymentHistoryPage', error))
  }, [])

  return (
    <PaymentHistoryTemplate 
      onPressBack={() => navigation.goBack()}
      paymentHistories={paymentHistories}
    />
  )
}

export default PaymentHistoryPage

