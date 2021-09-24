import React, { useCallback, useState } from 'react'
import SearchTemplate from '@components/templates/SearchTemplate'
import { SearchProps } from '@constants/navigationTypes'
import { debounce } from 'lodash'
import { URLS } from '@constants/urls'
import { Box, BoxId } from '@constants/types'

const SearchPage = ({route, navigation}: SearchProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchedValue, setSearchedValue] = useState<string>('')
  const [result, setResult] = useState<Box[]>()

  const searchBox = useCallback(debounce(async (boxName: string): Promise<Box[] | undefined> => {
    if (boxName === '') {
      setSearchedValue('')
      setResult([])
      return
    }
    
    const response = await fetch(
      URLS.unboxing_api + 'box/search/' + boxName, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

    if (response.status !== 200) {
      const json = await response.json()
      throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
    }

    const boxes: Box[] = await response.json()
    setSearchedValue(boxName)
    setResult(boxes)
  }, 1000), [setResult, setSearchedValue])

  const onChangeSearchValue = async (value: string) => {
    try {
      setSearchInput(value)
      await searchBox(value)
    } catch (error) {
      console.log('Error in onChangeSearchValue', error)
    }
  }

  return (
    <SearchTemplate 
      searchInput={searchInput}
      searchedValue={searchedValue}
      searchResult={result || []}
      onPressBoxItem={(boxId: BoxId) => navigation.navigate('BoxInfo', {boxId: boxId})}
      onPressBack={() => navigation.goBack()}
      onChangeSearchInput={onChangeSearchValue}
    />
  )
}

export default SearchPage