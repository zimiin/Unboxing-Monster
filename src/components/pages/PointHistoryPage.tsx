import React, { useContext, useEffect, useState } from 'react'
import PointHistoryTemplate from '@components/templates/PointHistoryTemplate'
import { PointHistoryNavigationProp } from '@constants/navigationTypes'
import { Point } from '@constants/types'
import { URLS } from '@constants/urls'
import { UserContext } from '@src/stores/UserContext'

const PointHistoryPage = ({ navigation }: {navigation: PointHistoryNavigationProp}) => {
  const [{accessToken}, {}] = useContext(UserContext)
  const [pointHistories, setPointHistories] = useState<Point[]>([])

  useEffect(() => {
    const getPointData = async (): Promise<Point[] | undefined> => {
      try {
        const response = await fetch(
          URLS.unboxing_api + 'point', {
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

        const data: Point[] = await response.json()
        return data
      } catch (error) {
        console.log('Error in getPointData', error)
        throw error
      }
    }

    const comp = (a: Point, b: Point) => {
      const aDate = new Date(a.time)
      const bDate = new Date(b.time)
      
      if (aDate < bDate) {
        return 1
      } else {
        return -1
      }
    }

    getPointData()
      .then(data => setPointHistories(data?.sort(comp) || []))
      .catch(error => console.log('Error in useEffect of PointHistoryPage', error))
  }, [])

  return (
    <PointHistoryTemplate 
      onPressBack={() => navigation.goBack()}
      pointHistories={pointHistories}
    />
  )
}

export default PointHistoryPage
