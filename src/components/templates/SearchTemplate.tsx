import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import HeaderWhileSearching from '@components/organisms/header/HeaderWhileSearching'

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