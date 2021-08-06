import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import SearchTemplate from '../templates/SearchTemplate'

const SearchPage = ({navigation}) => {
    return (
        <SearchTemplate navigation={navigation} />
    )
}

export default SearchPage