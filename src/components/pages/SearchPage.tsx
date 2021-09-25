import React, { useCallback, useEffect, useState } from 'react'
import SearchTemplate from '@components/templates/SearchTemplate'
import { SearchProps } from '@constants/navigationTypes'
import { debounce } from 'lodash'
import { URLS } from '@constants/urls'
import { Box, BoxId } from '@constants/types'
import { addRecentlySearchedBoxes, getRecentlySearchedBoxes } from '@src/utils/asyncStorageUtils'

const SearchPage = ({route, navigation}: SearchProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchedValue, setSearchedValue] = useState<string>('')
  const [onSearching, setOnSearching] = useState<boolean>(false)
  const [result, setResult] = useState<Box[]>([])
  const [recentSearchResult, setRecentSearchResult] = useState<Box[]>([])

  useEffect(() => {
    getRecentlySearchedBoxes()
    .then(result => setRecentSearchResult(result))
    .catch(error => console.log('Error in useEffect of SearchPage', error))
  }, [])

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
      if (value === '') {
        setOnSearching(false)
      } else {
        setOnSearching(true)
      }
      setSearchInput(value)
      await searchBox(value)
    } catch (error) {
      console.log('Error in onChangeSearchValue', error)
    }
  }

  const onPressBoxItem = async (box: Box) => {
    try{
      const searchedBoxes = await addRecentlySearchedBoxes(box)
      setRecentSearchResult(searchedBoxes)
      navigation.navigate('BoxInfo', { boxId: box.id })
    } catch (error) {
      console.log('Error in onPressBoxItem', error)
    }
  }

  return (
    <SearchTemplate 
      searchInput={searchInput}
      searchedValue={searchedValue}
      searchResult={result}
      recentSearchResult={recentSearchResult}
      onSearching={onSearching}
      onPressBoxItem={onPressBoxItem}
      onPressBack={() => navigation.goBack()}
      onChangeSearchInput={onChangeSearchValue}
    />
  )
}

export default SearchPage