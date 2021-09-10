import React from 'react'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import FullWidthButton from '@components/atoms/button/FullWidthButton'
import { scale, verticalScale } from '@constants/figure'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Modal,
} from 'react-native'
import {BOXES, defaultBox} from '@constants/images'
import { COLORS } from '@constants/colors'
import { ICONS } from '@constants/icons'
import { FlatList } from 'react-native-gesture-handler'
import ModalCloseButton from '@components/atoms/button/ModalCloseButton'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  boxImage: number,
  showBoxListModal: boolean,
  boxList: { id: number, image: ImageSourcePropType }[],
  onPressBoxImage: () => void,
  onPressGoBack: () => void,
  onPressNext: () => void,
  onRequestCloseModal: () => void,
  onPressBoxListElem: (id: number) => void,

}

const BoxMakingStep2Template = (props: Props) => {
  const renderItemInBoxList = ({ item }: { item: { id: number, image: ImageSourcePropType }}) => {
    return (
      <TouchableOpacity
        style={styles.boxListElem}
        onPress={() => props.onPressBoxListElem(item.id)}
      >
        <Image
          source={item.image}
          style={[styles.box]}
        />
      </TouchableOpacity>
    )
  }

  const headerFooter = (
    <View style={styles.headerFooter} />
  )
  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <CustomBoxProgressBar
          progress={2 / 3}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'박스의 정보를 설정해주세요.'}
        </Bold>

        <ScrollView style={styles.scrollView}>
          <TouchableOpacity 
            style={styles.boxImageContainer}
            onPress={props.onPressBoxImage}
          >
            <Image
              source={props.boxList[props.boxImage].image || defaultBox}
              style={styles.box}
            />

            <View
              style={styles.boxBackground}
            />

            <Image
              source={ICONS.edit}
              style={[styles.editIcon, styles.editIconInBox]}
            />
          </TouchableOpacity>

          <Text style={styles.subtitle}>
            박스 이름
          </Text>
          <Text style={styles.subtitle}>
            박스 가격
          </Text>
        </ScrollView>

        <Modal
          visible={props.showBoxListModal}
          animationType="fade"
          transparent={true}
          onRequestClose={props.onRequestCloseModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <ModalCloseButton
                onPress={props.onRequestCloseModal}
                style={styles.closeButton}
              />

              <FlatList
                renderItem={renderItemInBoxList}
                data={props.boxList}
                numColumns={2}
                ListHeaderComponent={headerFooter}
                ListFooterComponent={headerFooter}
              />
            </View>
          </View>
        </Modal>
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'다음'}
      />
    </>
  )
}

export default BoxMakingStep2Template

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
    marginTop: verticalScale(32),
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '400',
  },
  box: {
    width: scale(102),
    height: scale(97),
  },
  boxBackground: {
    position: 'absolute',
    width: scale(150),
    height: scale(80),
    bottom: 0,
    zIndex: -1,
  },
  boxImageContainer: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey_box,
    width: scale(140),
    height: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(12),
    marginTop: scale(10),
  },
  editIcon: {
    width: scale(16),
    height: scale(16),
  },
  editIconInBox: {
    position: 'absolute',
    right: scale(12),
    bottom: scale(12),
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modal: {
    backgroundColor: 'white',
    width: scale(312),
    height: verticalScale(480),
    paddingHorizontal: scale(20),
    borderRadius: 8,
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  boxListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxListElem: {
    width: scale(136),
    height: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerFooter: {
    height: 7,
  }
})
