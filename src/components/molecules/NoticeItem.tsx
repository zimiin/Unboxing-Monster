import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { noticeInfo } from '../../constants/types';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = SLIDER_WIDTH

const NoticeItem = ({ item, index }: { item: noticeInfo; index: number }) => {
  const handlePress = () => {
    Linking.canOpenURL(item.srcUrl).then(supported => {
      if (supported) {
        Linking.openURL(item.srcUrl);
      } else {
        console.log("Don't know how to open URI: " + item.srcUrl);
      }
    });
  }
  
  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity
        onPress={handlePress}
      >
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NoticeItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 244,
  },
})