import React, { Dispatch, SetStateAction } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import HomeScreenHeader from '@components/organisms/header/HomeScreenHeader'
import HorizontalRule from '@components/atoms/HorizontalRule'
import NoticeBoard from '@components/organisms/NoticeBoard'
import Scroller from '@components/organisms/Scroller'
import TutorialModal from '@components/templates/TutorialModal'
import { DESIGN_HEIGHT, DESIGN_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'
import { NoticeItemProps } from '@components/molecules/NoticeItem'
import Bold from '@components/atoms/typography/Bold'
import { FlatList } from 'react-native-gesture-handler'
import BoxItem, { BoxItemProps } from '@components/molecules/BoxItem'

interface Props {
  onPressSearchBar: () => void,
  onPressCart: () => void,
  cartItemCount: number | undefined,
  noticeData: NoticeItemProps[],
  popularBoxData: BoxItemProps[],
  customBoxData: BoxItemProps[],
  allBoxData: BoxItemProps[],
  modalVisible: boolean,
  setModalVisible: Dispatch<SetStateAction<boolean>>,
}

const HorizontalListBlank = () => (
  <View
    style={styles.listBlank}
  />
)

const ListEmptyComponent = () => (
  <ActivityIndicator
    animating={true}
    color="slategray"
    size="large"
    style={{
      alignSelf: 'center',
    }}
  />
)

const HomeTemplate = (props: Props) => {
  const renderBoxItem = ({item}: {item: BoxItemProps}) => {
    return (
      <View style={styles.boxItem}>
        <BoxItem
          item={item}
        />
      </View>
    )
  }

  const aboveItems = (
    <>
      <NoticeBoard
        noticeData={props.noticeData}
      />

      <View>
        <Scroller />
      </View>

      <Bold style={[styles.listTitle, styles.popularBoxesTitle]}>
        인기박스
      </Bold>

      <FlatList
        renderItem={renderBoxItem}
        ListEmptyComponent={ListEmptyComponent}
        data={props.popularBoxData}
        horizontal={true}
        ListHeaderComponent={HorizontalListBlank}
        ListFooterComponent={HorizontalListBlank}
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />

      <Bold style={styles.listTitle}>
        실시간 커스텀 박스
      </Bold>

      <FlatList
        renderItem={renderBoxItem}
        data={props.customBoxData}
        horizontal={true}
        ListHeaderComponent={HorizontalListBlank}
        ListFooterComponent={HorizontalListBlank}
        style={[styles.horizontalList, styles.customBoxList]}
        showsHorizontalScrollIndicator={false}
      />

      <HorizontalRule style={styles.horizontalRule}/>
    </>
  )

  return (
    <>
      <HomeScreenHeader
        onPressSearchBar={props.onPressSearchBar}
        onPressCart={props.onPressCart}
        cartItemCount={props.cartItemCount}
      />
      
      <FlatList
        numColumns={2}
        renderItem={renderBoxItem}
        data={props.allBoxData}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={aboveItems}
        centerContent={true}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.mainFlatList}
      />
        
      <TutorialModal
        modalVisible={props.modalVisible}
        setModalVisible={props.setModalVisible}
      />
    </>
  )
}

export default HomeTemplate

const styles = StyleSheet.create({
  boxItem: {
    marginHorizontal: 6 / DESIGN_WIDTH * SCREEN_WIDTH,
    marginBottom: 26,
  },
  listBlank: {
    width: 18 / DESIGN_WIDTH * SCREEN_WIDTH
  },
  listTitle: {
    marginLeft: 24 / DESIGN_WIDTH * SCREEN_WIDTH,
    fontSize: 18,
  },
  popularBoxesTitle: {
    marginTop: 57 / DESIGN_HEIGHT * SCREEN_HEIGHT,
  },
  horizontalList: {
    marginTop: 13 / DESIGN_HEIGHT * SCREEN_HEIGHT,
  },
  customBoxList: {
    marginBottom: 8 / DESIGN_HEIGHT * SCREEN_HEIGHT,
  },
  horizontalRule: {
    marginBottom: 32 / DESIGN_HEIGHT * SCREEN_HEIGHT
  },
  columnWrapper: {
    marginHorizontal: 18 / DESIGN_WIDTH * SCREEN_WIDTH,
  },
  mainFlatList: {
    backgroundColor: 'white',
  }
})
