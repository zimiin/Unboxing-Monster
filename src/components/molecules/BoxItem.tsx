import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
    ViewStyle,
    Platform,
    View,
} from 'react-native';
import { scale, SCREEN_WIDTH } from '@constants/figure';
import { defaultBox } from '@constants/images';
import NotoSansBold from '@components/atoms/typography/NotoSansBold';

export interface Props {
  key: number,
  image: ImageSourcePropType,
  name: string,
  price: number,
  onPress?: () => void,
  style?: ViewStyle
}

const BoxItem = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.style,
        styles.container,
        Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow,
      ]}
    >
      <Image
        source={props.image || defaultBox}
        style={styles.image}
      />

      <NotoSansBold 
        style={styles.name || ''}
        numberOfLines={1}
      >
        {props.name}
      </NotoSansBold>

      <Text style={styles.price}>
        {props.price?.toLocaleString() || ''}원
      </Text>
    </TouchableOpacity>
  );
}

export default BoxItem

const styles = StyleSheet.create({
  iosShadow: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  androidShadow: {
    elevation: 6,
  },
  container: {
    borderRadius: 10,
    width: scale(150),
    height: scale(150) + 45,
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    backgroundColor: 'white',
  },
  image: {
    width: scale(130),
    height: scale(130),
    borderRadius: 10,
    resizeMode: 'contain'
  },
  nameContainer: {
    marginTop: 9,
    width: '100%',
    height: 20,
  },
  name: {
    // position: 'absolute',
    marginTop: 9,
    letterSpacing: -0.35,
    fontSize: 14,
    lineHeight: 20,
  },
  price: {
    fontFamily: 'GmarketSansTTFLight',
    marginTop: 1,
    color: '#060606',
    fontSize: 12,
  }
})