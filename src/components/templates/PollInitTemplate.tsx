import HalfWidthButton from '@components/atoms/button/HalfWidthButton'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  onPressStartPoll: () => void,
  onPressGoToStorage: () => void,
}

function PollInitTemplate(props: Props) {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Image
        source={IMAGES.poll_event}
        style={{
          width: scale(264),
          height: scale(200),
          resizeMode: 'contain',
          marginTop: verticalScale(100)
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Text
          style={styles.description}
        >
          설문조사에 참여하시면
        </Text>

        <Text
          style={styles.description}
        >
         <Text
          style={styles.descriptionBold}
          > 
            3,000포인트
          </Text>
          를 더 드려요!
        </Text>

        <Text
          style={[
            styles.description,
            {
              marginBottom: verticalScale(20),
            }
          ]}
        >
          참여하시겠어요?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: verticalScale(20),
          }}
        >
          <HalfWidthButton
            buttonStyle={{
              backgroundColor: '#bdbdbd',
              marginRight: scale(10),
            }}
            onPress={props.onPressGoToStorage}
            text='안할래요'
            textStyle={{
              color: '#454545',
            }}
          />

          <HalfWidthButton
            onPress={props.onPressStartPoll}
            text='네 참여할래요'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PollInitTemplate

const styles = StyleSheet.create({
  description: {
    fontFamily: 'GmarketSansTTFLight',
    textAlign: 'center',
    fontSize: 17,
  },
  descriptionBold: {
    fontFamily: 'GmarketSansTTFMedium',
    textAlign: 'center',
    fontSize: 17,
  }
})