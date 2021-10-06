import React, { Dispatch, SetStateAction } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'
import HomeScreenHeader from '@components/organisms/header/HomeScreenHeader'
import HorizontalRule from '@components/atoms/HorizontalRule'
import NoticeBoard from '@components/organisms/NoticeBoard'
import Scroller from '@components/organisms/Scroller'
import TutorialModal from '@components/templates/TutorialModal'
import { scale, SCREEN_WIDTH, verticalScale } from '@constants/figure'
import Bold from '@components/atoms/typography/Bold'
import BoxItem from '@components/molecules/BoxItem'
import { Box, BoxId, Notice } from '@constants/types'
import NoDataBox from '@components/molecules/NoDataBox'
import { IMAGES } from '@constants/images'
import FloatingCartButton from '@components/atoms/button/FloatingCartButton'
import NotoSansBold from '@components/atoms/typography/NotoSansBold'
import Loading from '@components/atoms/Loading'

interface Props {
  onPressSearchBar: () => void,
  onPressCart: () => void,
  cartItemCount: number | undefined,
  noticeData?: Notice[],
  popularBoxData?: Box[],
  customBoxData?: Box[],
  allBoxData?: Box[],
  modalVisible: boolean,
  refreshing: boolean,
  scorllerContent: string,
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
          image={item.isLocal ? IMAGES[item.image] : {uri: item.image}}
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
        <Scroller content={props.scorllerContent}/>
      </View>

      <NotoSansBold style={[styles.listTitle, styles.popularBoxesTitle]}>
        인기박스
      </NotoSansBold>

      <FlatList
        renderItem={renderBoxItem}
        ListEmptyComponent={HorizontalListEmptyComponent}
        data={props.popularBoxData}
        horizontal={true}
        ListHeaderComponent={HorizontalListBlank}
        ListFooterComponent={HorizontalListBlank}
        showsHorizontalScrollIndicator={false}
      />

      <Bold style={styles.listTitle}>
        실시간 커스텀 박스
      </Bold>

      <FlatList
        renderItem={renderBoxItem}
        data={props.customBoxData}
        horizontal={true}
        ListEmptyComponent={HorizontalListEmptyComponent}
        ListHeaderComponent={HorizontalListBlank}
        ListFooterComponent={HorizontalListBlank}
        style={[styles.customBoxList]}
        showsHorizontalScrollIndicator={false}
      />

      <HorizontalRule style={styles.horizontalRule}/>
    </>
  )

  const footer = (
    <View style={styles.footer}/>
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
        ListEmptyComponent={verticalListEmptyComponent}
        ListHeaderComponent={aboveItems}
        ListFooterComponent={footer}
        centerContent={true}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.mainFlatList}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
      />
        
      <FloatingCartButton
        style={styles.cartButton}
        onPress={props.onPressCart}
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
    marginTop: 13,
  },
  verticalListEmpty: {
    marginLeft: scale(24),
  },
  boxItem: {
    marginHorizontal: scale(6),
    marginVertical: 13,
  },
  listBlank: {
    width: scale(18),
  },
  listTitle: {
    marginTop: 13,
    marginLeft: scale(24),
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  popularBoxesTitle: {
    marginTop: verticalScale(44),
  },
  customBoxList: {
    marginBottom: verticalScale(8),
  },
  horizontalRule: {
    marginBottom: verticalScale(32)
  },
  columnWrapper: {
    marginHorizontal: scale((SCREEN_WIDTH - 324) / 2),
  },
  mainFlatList: {
    backgroundColor: 'white',
  },
  cartButton: {
    position: 'absolute',
    bottom: scale(17),
    right: scale(17),
  },
  footer: {
    height: scale(50),
  },
})
