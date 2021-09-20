import React, { Dispatch, SetStateAction } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native'
import HomeScreenHeader from '@components/organisms/header/HomeScreenHeader'
import HorizontalRule from '@components/atoms/HorizontalRule'
import NoticeBoard from '@components/organisms/NoticeBoard'
import Scroller from '@components/organisms/Scroller'
import TutorialModal from '@components/templates/TutorialModal'
import { DESIGN_HEIGHT, DESIGN_WIDTH, scale, SCREEN_HEIGHT, SCREEN_WIDTH, verticalScale } from '@constants/figure'
import Bold from '@components/atoms/typography/Bold'
import BoxItem from '@components/molecules/BoxItem'
import { Box, BoxId, Notice } from '@constants/types'
import NoDataBox from '@components/molecules/NoDataBox'

interface Props {
  onPressSearchBar: () => void,
  onPressCart: () => void,
  cartItemCount: number | undefined,
  noticeData?: Notice[],
  popularBoxData?: Box[],
  customBoxData: Props[],
  allBoxData: Props[],
  modalVisible: boolean,
  refreshing: boolean,
  setModalVisible: Dispatch<SetStateAction<boolean>>,
  onRefresh: () => void,
  openIntroModal?: () => void,
  onPressBoxItem?: (boxId: BoxId) => void,
}

const HorizontalListBlank = () => (
  <View
    style={styles.listBlank}
  />
)

const HorizontalListEmptyComponent = () => (
  <NoDataBox
    style={styles.horizontalListEmpty}
  />
)

const verticalListEmptyComponent = () => (
  <NoDataBox
    style={styles.verticalListEmpty}
  />
)

const HomeTemplate = (props: Props) => {
  const renderBoxItem = ({item}: {item: Box}) => {
    return (
      <View style={styles.boxItem}>
        <BoxItem
          key={item.id}
          image={{uri: item.image}}
          name={item.title}
          price={item.price}
          onPress={() => props.onPressBoxItem ? props.onPressBoxItem(item.id) : console.log(item.id, 'box pressed')}
        />
      </View>
    )
  }

  const aboveItems = (
    <>
      <NoticeBoard
        noticeData={props.noticeData}
        openIntroModal={props.openIntroModal}
      />

      <View>
        <Scroller />
      </View>

      <Bold style={[styles.listTitle, styles.popularBoxesTitle]}>
        인기박스
      </Bold>

      <FlatList
        renderItem={renderBoxItem}
        ListEmptyComponent={HorizontalListEmptyComponent}
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
        // data={props.customBoxData}
        horizontal={true}
        ListEmptyComponent={HorizontalListEmptyComponent}
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
        // data={props.allBoxData}
        ListEmptyComponent={verticalListEmptyComponent}
        ListHeaderComponent={aboveItems}
        centerContent={true}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.mainFlatList}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
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
  horizontalListEmpty: {
    marginLeft: scale(6),
  },
  verticalListEmpty: {
    marginLeft: scale(24),
  },
  boxItem: {
    marginHorizontal: scale(6),
    marginBottom: 26,
  },
  listBlank: {
    width: scale(18),
  },
  listTitle: {
    marginLeft: scale(24),
    fontSize: 18,
  },
  popularBoxesTitle: {
    marginTop: verticalScale(57),
  },
  horizontalList: {
    marginTop: verticalScale(13),
  },
  customBoxList: {
    marginBottom: verticalScale(8),
  },
  horizontalRule: {
    marginBottom: verticalScale(32)
  },
  columnWrapper: {
    marginHorizontal: scale(18),
  },
  mainFlatList: {
    backgroundColor: 'white',
  }
})
