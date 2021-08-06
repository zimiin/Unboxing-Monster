import React from 'react'
import {
    TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CartIcon from '../../atoms/icon/CartIcon'
import SearchBar from '../../molecules/SearchBar'
import { SCREEN_WIDTH } from '../../../constants/figure'


const HeaderWithSearch = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    const headerHeight = 56 + insets.top

    return {
        headerStyle: {
            height: headerHeight,
        },
        headerTitle: <SearchBar navigation={navigation} />,

        // title: ' ',
        // headerBackTitle: ' ',
        // headerBackImage: () => <BackIcon />,
        // headerLeftContainerStyle: {
        //     // paddingLeft: 17,
        //     width: 0,
        //     // backgroundColor: 'red',
        // },

        headerRight: () =>
            <TouchableOpacity onPress={() => navigation.push('Cart')}>
                <CartIcon />
            </TouchableOpacity>,
        headerRightContainerStyle: {
            paddingRight: scale(24),
        }
    }
}

export default HeaderWithSearch