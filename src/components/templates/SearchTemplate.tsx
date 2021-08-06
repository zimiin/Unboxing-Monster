import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import BaseHeader from '../organisms/header/BaseHeader'
import HeaderWhileSearching from '../organisms/header/HeaderWhileSearching'

const SearchTemplate = ({navigation}) => {
    return (
        <>
        <HeaderWhileSearching
            canGoBack={true}
            goBackAction={() => navigation.goBack()}
        />
        <View>
            <Text>This is SearchTemplate.</Text>
        </View>
        </>
    )
}

export default SearchTemplate