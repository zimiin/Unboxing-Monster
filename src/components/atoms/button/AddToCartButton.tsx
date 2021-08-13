import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

interface Props {
  onPress: () => void,
}

const AddToCartButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <Text style={styles.text}>
        장바구니에 담기
      </Text>
    </TouchableOpacity>
  )
}

export default AddToCartButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29a3ff',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 19,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  }
})