import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import HeaderWhileSearching from '@components/organisms/header/HeaderWhileSearching'

interface Props {
  onPressBack: () => void,
}

const SearchTemplate = (props: Props) => {
  return (
    <>
      <HeaderWhileSearching
        canGoBack={true}
        goBackAction={props.onPressBack}
      />
      <View>
        <Text>This is SearchTemplate.</Text>
      </View>
    </>
  )
}

export default SearchTemplate