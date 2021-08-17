import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Bold from '@components/atoms/typography/Bold'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'
import { defaultBox, IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  StyleSheet,
} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-matters'

interface Props {
  onPressGoToStorage: () => void,
}

const testImg = {
  uri: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg'}
const testPrice = 23000

const OpenResultTemplate = (props: Props) => {
  const data=[1, 2, 3, 4, 5]
  // const data = [1, 2]
  const renderItem = (data) => {
    return (
      <View
        style={{
          width: scale(150),
          height: scale(232),
          borderRadius: 12,
          backgroundColor: 'white',
          margin: 6,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Image
          source={testImg}
          style={{
            width: scale(112),
            height: scale(112),
            borderRadius: 12, 
          }}
        />

        <Bold
          numberOfLines={2}
          style={{
            marginHorizontal: scale(17),
            textAlign: 'center',
            marginTop: 12,
            fontSize: 14,
          }}
        >후라이드반/양념반+치즈볼+콜라</Bold>

        <Text
          style={{
            fontSize: 14,
            // marginTop: 9,
            position: 'absolute',
            bottom: 20,
          }}
        >{testPrice.toLocaleString()} 원</Text>
      </View>
    )
  }

  return (
    <>
      {/* <SafeAreaView 
        style={{
          // backgroundColor: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      /> */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: '100%',
            flex: 1,
            // paddingVertical: SCREEN_HEIGHT * 56 / 720
          }}
        >

        {/* <ScrollView
          style={{
            position: 'absolute',
            zIndex: 100,
            width: '100%',
            height: '100%',
          }}
        > */}
            <FlatList
              data={data}
              renderItem={renderItem}
              numColumns={2}
              contentContainerStyle={{
                alignSelf: 'center',
                // marginTop: SCREEN_HEIGHT * 56 / 720,
              }}
              ListHeaderComponent={<View />}
              ListHeaderComponentStyle={{
                height: SCREEN_HEIGHT * 56 / 720,
              }}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{
                height: SCREEN_HEIGHT * 56 / 720,
              }}
            />
        
        </View>
        {/* </ScrollView> */}
        {/* <View
          style={[{
            position: 'absolute',
            top: SCREEN_HEIGHT * 138 / 720,
            width: scale(216),
            height: scale(220),
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: scale(22),
          },
            Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow
          ]}
        >
          <Image
            source={testImg}
            style={{
              width: scale(112),
              height: scale(112),
              borderRadius: 12,
            }}
          />

          <Bold
            numberOfLines={1}
            style={{
              width: '100%',
              marginTop: scale(18),
              fontSize: 14,
            }}
          >후라이드반양념반 맛있겠다완전!!!! 후라이드반양념반 맛있겠다완전!!!!</Bold>

          <Text
            style={{
              fontSize: 14,
              color: '#060606',
              marginTop: 4,
            }}
          >{testPrice.toLocaleString()} 원</Text>
        </View> */}

        <Image
          source={IMAGES.result_box}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 417 / 720,
            resizeMode: 'contain',
            position: 'absolute',
            zIndex: -100,
            bottom: SCREEN_HEIGHT * 85 / 720,
          }}
        />
      </SafeAreaView>

      <SafeAreaView
        style={{
          backgroundColor: '#29a3ff'
        }}
      >
        <FullWidthButton
          content="보관함으로 가기"
          onPress={props.onPressGoToStorage}
        />
      </SafeAreaView>
    </>
  )
}

export default OpenResultTemplate

const styles = StyleSheet.create({
  iosShadow: {
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  androidShadow: {
    elevation: 12,
    backgroundColor: 'rgb(255, 255, 255)',
  }
})
