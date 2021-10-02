import React from 'react'
import {
  View,
  ImageSourcePropType,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import StorageBoxOpenButton from '@components/atoms/button/StorageBoxOpenButton'
import Bold from '@components/atoms/typography/Bold'
import XIcon from '@components/atoms/icon/XIcon'
import { scale } from 'react-native-size-matters'
import { defaultBox } from '@constants/images'

export interface Props {
  id: number,
  image: ImageSourcePropType,
  name: string,
  count: number,
  openOneBox: () => void,
  openAllBox: () => void,
  onPress: () => void,
}

const defaultOpenFunction = () => {
  console.log("No function passed to StorageBox component.")
}

const StorageBox = (props: Props) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={props.onPress}
    >
      <Image
        source={props.image}
        style={styles.image || defaultBox}
      />

      <View>
        <Bold style={styles.name}>
          {props.name || ''}
        </Bold>

        <View style={styles.count}>
          <XIcon />

          <Bold style={styles.countValue}>
            {props.count.toString() || ''}
          </Bold>
        </View>

        <View style={styles.openButtonContainer}>
          <StorageBoxOpenButton
            buttonStyle={styles.openOneButton}
            textStyle={styles.openOneText}
            onPress={props.openOneBox || defaultOpenFunction}
          >
            1개 열기
          </StorageBoxOpenButton>

          <StorageBoxOpenButton
            buttonStyle={styles.openAllBoxButton}
            onPress={props.openAllBox || defaultOpenFunction}
          >
            모두 열기
          </StorageBoxOpenButton>
        </View >
      </View >
    </TouchableOpacity >
  )
}

export default StorageBox

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(24),
    marginVertical: 16,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 12,
    marginRight: scale(22),
  },
  name: {
    fontSize: 14,
    lineHeight: 20,
  },
  count: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countValue: {
    marginLeft: 5,
    fontSize: 15,
    fontFamily: 'NotoSansCJKkr-Bold',
    lineHeight: 22,
    letterSpacing: -0.37,
    color: 'rgba(6, 6, 6, 0.5)'
  },
  openButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  openOneButton: {
    backgroundColor: '#29a3ff',
  },
  openOneText: {
    color: 'white',
  },
  openAllBoxButton: {
    backgroundColor: '#f9f9f9',
    marginLeft: scale(6)
  }
})
