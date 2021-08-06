import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { SCREEN_WIDTH } from '../../constants/figure'
import { scale } from 'react-native-size-matters'
import SearchIcon from '../atoms/icon/SearchIcon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BackIcon from '../atoms/icon/BackIcon'

const SearchBar = ({ navigation }) => {
    const {top} = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingLeft: scale(14),
                backgroundColor: 'white',
                // alignItems: 'flex-start',
                // alignItems: 'center',
                width: SCREEN_WIDTH,
                paddingTop: top,
                flexDirection: 'row',
            }}
        >
            {/* 이게 안보인다... */}
            <TouchableOpacity
                onPress={()=>navigation.goBack()}
            >
                <BackIcon />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: '#f9f9f9',
                    height: 32,
                    width: scale(270),
                    borderRadius: 18,
                    justifyContent: 'center',
                }}
                onPress={() => navigation.push('Search')}
            >
                <View
                    style={{
                        marginLeft: scale(10)
                    }}
                >
                    <SearchIcon />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar