import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import HeaderContainer from '../../atoms/HeaderContainer'
import { scale } from 'react-native-size-matters'
import { ICONS } from '../../../constants/icons'
import SearchIcon from '../../atoms/icon/SearchIcon'
import CartIcon from '../../atoms/icon/CartIcon'

const HomeScreenHeader = ({navigation}) => {
    return (
        <HeaderContainer>
            <View
                style={{
                    flex: 1,
                    paddingLeft: scale(24),
                }}
            >
                
                <TouchableOpacity
                    style={{
                        width: scale(270),
                        height: 32,
                        borderRadius: 18,
                        backgroundColor: '#f9f9f9',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.push('Search')}
                >
                    <View
                        style={{
                            marginLeft: scale(10),
                        }}
                    >
                        <SearchIcon />
                    </View>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    width: scale(44),
                    // flex: 1,
                    // zIndex: 1,
                    paddingRight: scale(24),
                    justifyContent: 'flex-end'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.push('Cart')}
                >
                    <CartIcon />
                </TouchableOpacity>
            </View>
        </HeaderContainer>
    )
}

export default HomeScreenHeader