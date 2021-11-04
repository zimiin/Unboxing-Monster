import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale, verticalScale } from '@constants/figure'
import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import ItemRadioButton, { ItemRadioButtonProps } from '@components/molecules/ItemRadioButton'
import { FlatList } from 'react-native-gesture-handler'
import SearchBar from '@components/atoms/SearchBar'
import ConfirmModal from '@components/molecules/ConfirmModal'
import { CustomBoxContext, CustomBoxItem } from '@src/stores/CustomBoxContext'
import ItemInfoRow from '@components/molecules/ItemInfoRow'

export type RenderItem = {
  itemData: ItemRadioButtonProps,
  filtered: Boolean,
  searched: Boolean,
}

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  error: string,
  itemData?: RenderItem[],
  searchInput: string,
  sortOptions: string[],
  sorted: string,
  showModal: boolean,
  moveToStep2: () => void,
  closeModal: () => void,
  onPressSortOption: (option: string) => void,
  onPressGoBack: () => void,
  onPressNext: () => void,
  onPressItemRadioButton: (id: number) => void,
  onChangeSearchInput: (input: string) => void,
}

const BoxMakingStep1Template = (props: Props) => {
  const [{selectedItems}, {}] = useContext(CustomBoxContext)

  const renderItem = ({ item }: { item: RenderItem }) => {
    if (item.filtered === true && item.searched === true) {
      return (
        <ItemRadioButton
          id={item.itemData.id}
          image={item.itemData.image}
          name={item.itemData.name}
          price={item.itemData.price}
          checked={item.itemData.checked}
          onPress={() => props.onPressItemRadioButton(item.itemData.id)}
          style={styles.renderItem}
        />
      )
    } else {
      return (<></>)
    }
  }

  const renderItemInSelectedList = ({item}: {item: CustomBoxItem}) => {
    return (
      <ItemInfoRow
        image={item.image}
        name={item.name}
        price={item.price}
        style={styles.renderItemInSelectedList}
      />
    )
  }

  const footer = (
    <View style={styles.footer}/>
  )

  const filters = () => {
    return props.sortOptions.map(
      (filter, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.filter}
            onPress={() => props.onPressSortOption(filter)}
          >
            <Text style={props.sorted === filter ? styles.boldText : styles.greyText}>
              {filter}
            </Text>
          </TouchableOpacity>
        )
      }
    )
  }

  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <CustomBoxProgressBar
          progress={1 / 3}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'박스에 넣을 상품을 선택해주세요.'}
        </Bold>

        <Text style={styles.error}>
          {props.error}
        </Text>

        <SearchBar
          input={props.searchInput}
          onChangeText={props.onChangeSearchInput}
          style={styles.searchBar}
        />

        <View style={styles.filterContainer}>
          {filters()}
        </View>

        <FlatList
          renderItem={renderItem}
          data={props.itemData || []}
          ListFooterComponent={footer}
          keyExtractor={(item: RenderItem) => item.itemData.id.toString()}
        />
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'다음'}
      />

      <ConfirmModal
        visible={props.showModal}
        onRequestClose={props.closeModal}
        onConfirm={props.moveToStep2}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Bold style={styles.modalTitle}>
              선택 상품 목록
            </Bold>
          </View>

          <FlatList
            renderItem={renderItemInSelectedList}
            data={selectedItems}
          />
        </View>
      </ConfirmModal>
    </>
  )
}

export default BoxMakingStep1Template

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(24)
  },
  progressBar: {
    marginTop: verticalScale(12),
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6,
    marginTop: 32,
  },
  error: {
    fontSize: 13,
    fontFamily: 'NotoSansCJKkr-Regular',
    color: '#ec4f47',
    letterSpacing: -0.32,
    marginTop: verticalScale(2),
    lineHeight: 19,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  filter: {
    marginLeft: 10,
  },
  boldText: {
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: 12,
    lineHeight: 16,
    color: 'black'
  },
  greyText: {
    color: 'rgba(6, 6, 6, 0.5)',
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: 12,
    lineHeight: 16,
  },
  renderItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  footer: {
    height: 34,
  },
  searchBar: {
    marginTop: 2,
  },
  modalTitle: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 20,
  },
  modalTitleContainer: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomColor: '#f8f8f8',
  },
  modalContent: {
    paddingHorizontal: scale(12),
    marginBottom: 15,
    width: '100%',
    height: verticalScale(400),
  },
  renderItemInSelectedList: {
    marginVertical: 10,
  }
})
