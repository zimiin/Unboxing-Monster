import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native'
import HeaderWhileSearching from '@components/organisms/header/HeaderWhileSearching'
import HorizontalRule from '@components/atoms/HorizontalRule'
import { scale, verticalScale } from '@constants/figure'
import { COLORS } from '@constants/colors'
import { Box, BoxId } from '@constants/types'
import BoxItem from '@components/molecules/BoxItem'
import { IMAGES } from '@constants/images'
import MonsterNotice from '@components/molecules/MonsterNotice'

interface Props {
  searchInput: string,
  searchedValue: string,
  searchResult: Box[],
  recentSearchResult: Box[],
  onSearching: boolean,
  onPressBoxItem: (box: Box) => void,
  onChangeSearchInput: (input: string) => void,
  onPressBack: () => void,
}

const SearchTemplate = (props: Props) => {
  const boxListEdgeSpace = (
    <View style={styles.space} />
  )

  const boxItem = ({item}: {item: Box}) => {
    return (
      <BoxItem
        key={item.id}
        image={item.isLocal ? IMAGES[item.image] : {uri: item.image}}
        name={item.title}
        price={item.price}
        onPress={() => props.onPressBoxItem(item)}
        style={styles.boxItem}
      />
    )
  }
  return (
    <>
      <HeaderWhileSearching
        canGoBack={true}
        goBackAction={props.onPressBack}
        searchValue={props.searchInput}
        onChangeSearchValue={props.onChangeSearchInput}
      />

      <HorizontalRule />

      <View style={styles.screen}>
        {props.onSearching && props.searchedValue ?
          <Text style={styles.title}>
            <Text style={styles.titleHighLight}>
              {props.searchedValue}
            </Text>
            를 포함하고 있는 박스
          </Text>
          :
          <Text style={styles.title}>최근 검색한 박스</Text>
        }
          

        <FlatList
          renderItem={boxItem}
          data={props.onSearching && props.searchedValue ? props.searchResult : props.recentSearchResult}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={boxListEdgeSpace}
          ListFooterComponent={boxListEdgeSpace}
          ListEmptyComponent={<MonsterNotice style={styles.notice} notice='검색 결과가 없어요'/>}
        />
      </View>
    </>
  )
}

export default SearchTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: 16,
    letterSpacing: -0.44,
    lineHeight: 26,
    marginTop: 26,
    marginHorizontal: scale(24),
    marginBottom: verticalScale(12),
  },
  titleHighLight: {
    color: COLORS.main,
  },
  boxItem: {
    marginHorizontal: scale(6),
  },
  space: {
    width: scale(18),
  },
  notice: {
    height: scale(180),
    width: scale(324),
  }
})