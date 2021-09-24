
import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
} from 'react-native'
import Header from '@components/organisms/header/Header'
import { scale } from 'react-native-size-matters'
import { IMAGES } from '@constants/images'

interface Props {
  canGoBack: boolean,
  goBackAction?: () => void,
  searchValue: string,
  onChangeSearchValue: (input: string) => void,
}

const HeaderWhileSearching = (props: Props) => {
  const cancelButton = (
    <View style={styles.cancelButtonContainer}>
      <TouchableOpacity
        onPress={props.goBackAction}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelText}>
          취소
        </Text>
      </TouchableOpacity>
    </View>
  )

  const searchBar = (
    <>
      <View style={styles.searchBar}>
        <TouchableOpacity
          style={styles.xIconButton}
          onPress={() => props.onChangeSearchValue('')}
        >
          <Image
            source={IMAGES.xCircle}
            style={styles.xIcon}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        value={props.searchValue}
        onChangeText={props.onChangeSearchValue}
        autoFocus={true}
        style={styles.textInput}
      />
    </>
  )

  return (
    <Header
      canGoBack={props.canGoBack}
      goBackAction={props.goBackAction}
      right={cancelButton}
      center={searchBar}
    />
  )
}

export default HeaderWhileSearching

const styles = StyleSheet.create({
  cancelButtonContainer: {
    justifyContent: 'center',
    paddingRight: scale(24)
  },
  cancelButton: {
    position: 'absolute',
  },
  cancelText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#f9f9f9',
    width: scale(237),
    height: 32,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  xIconButton: {
    marginRight: scale(10),
  },
  xIcon: {
    width: 16,
    height: 16,
  },
  textInput: {
    marginLeft: scale(15),
    width: scale(186),
    fontSize: 14,
    zIndex: 1,
    position: 'absolute',
  }
})
