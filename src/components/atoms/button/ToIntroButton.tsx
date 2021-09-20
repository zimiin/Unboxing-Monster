import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import { IMAGES } from '@constants/images'

type ToIntroButtonProps = {
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

class ToIntroButton extends Component<ToIntroButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.setModalVisible(true)}>
        <Text style={styles.text}>
          어떻게 언박싱이 공정함을 갖나요?
        </Text>

        <Image
          source={IMAGES.info}
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}

export default ToIntroButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#29a3ff',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 6,
  }
})