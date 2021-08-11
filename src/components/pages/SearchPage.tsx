import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import SearchTemplate from '@components/templates/SearchTemplate'

const SearchPage = ({navigation}) => {
    return (
        <SearchTemplate navigation={navigation} />
    )
}

export default SearchPage