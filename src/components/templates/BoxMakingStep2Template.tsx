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
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native'
import {defaultBox} from '@constants/images'
import { COLORS } from '@constants/colors'
import { FlatList } from 'react-native-gesture-handler'
import ModalCloseButton from '@components/atoms/button/ModalCloseButton'
import InputField from '@components/atoms/InputField'
import EditIcon from '@components/atoms/icon/EditIcon'
import { Slider } from 'react-native-elements'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  boxImage: number,
  showBoxListModal: boolean,
  boxList: { id: number, image: ImageSourcePropType }[],
  boxName?: string,
  minPrice: number,
  maxPrice: number,
  boxPrice: number,
  textBoxPrice: string,
  error: string,
  onChangeNumBoxPriceInput: (value: number) => void,
  onPressBoxImage: () => void,
  onPressGoBack: () => void,
  onPressNext: () => void,
  onRequestCloseModal: () => void,
  onPressBoxListElem: (id: number) => void,
  onChangeBoxName: (input: string) => void,
  onChangeTextBoxPriceInput: (input: string) => void,
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

      <View style={styles.progressBarContainer}>
        <CustomBoxProgressBar
          progress={2 / 3}
          style={styles.progressBar}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <ScrollView 
          style={styles.horizontalMargin}
          showsVerticalScrollIndicator={false}
        >
          <Bold style={styles.instruction}>
            {'박스의 정보를 설정해주세요.'}
          </Bold>

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

            <EditIcon
              style={styles.editIconInBox}
            />
          </TouchableOpacity>

          <View style={styles.inputfield}>
            <InputField
              input={props.boxName || ''}
              value={props.boxName}
              onChangeText={props.onChangeBoxName}
              style={styles.text}
            />

            <EditIcon
              style={styles.editIconOnInputField}
            />
          </View>

          <Slider
            value={props.boxPrice}
            onValueChange={props.onChangeNumBoxPriceInput}
            minimumValue={props.minPrice}
            maximumValue={props.maxPrice}
            step={100}
            style={styles.slider}
            maximumTrackTintColor={'#CCCCCC'}
            minimumTrackTintColor={'#9B9B9B'}
            thumbStyle={styles.thumbStyle}
          />

          <View style={styles.priceInputContainer}>
            <TextInput
              value={props.textBoxPrice}
              onChangeText={props.onChangeTextBoxPriceInput}
              style={[
                styles.text,
                Platform.OS === "ios" ? styles.underlineInput : null,
                styles.priceInput
              ]}
              keyboardType='numeric'
              returnKeyType='done'
              underlineColorAndroid={COLORS.grey_text}
            />

            <Text style={[styles.text, styles.won]}>{'원'}</Text>
          </View>

          <Text style={styles.error}>{props.error}</Text>
        </ScrollView>

        <FullWidthButton
          onPress={props.onPressNext}
          content={'다음'}
        />

      </KeyboardAvoidingView>


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
    </>
  )
}

export default BoxMakingStep2Template

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: 'white',
    paddingHorizontal: scale(24),
  },
  progressBar: {
    marginTop: verticalScale(12),
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalMargin: {
    marginHorizontal: scale(24),
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6,
    marginTop: verticalScale(32),
    marginBottom: 20,
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
  editIconInBox: {
    position: 'absolute',
    right: scale(12),
    bottom: scale(12),
  },
  text: {
    fontSize: scale(16),
    fontWeight: '500',
  },
  underlineInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey_text,
  },
  won: {
    marginLeft: scale(4)
  },
  inputfield: {
    marginTop: 32,
  },
  editIconOnInputField: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    bottom: 37,
  },
  slider: {
    marginTop: verticalScale(20),
  },
  thumbStyle: { 
    width: scale(20), 
    height: scale(27), 
    backgroundColor: '#4888F8' 
  },
  price: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 5,
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(7),
  },
  priceInput: {
    textAlign: 'center',
  },
  error: {
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    color: COLORS.error,
    fontSize: scale(14),
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
