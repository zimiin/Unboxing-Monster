import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BackIcon from '../../atoms/icon/BackIcon'
import HeaderTitle from '../../atoms/typography/HeaderTitle'
import { scale } from 'react-native-size-matters'
import CartIcon from '../../atoms/icon/CartIcon'
import HeaderContainer from '../../atoms/HeaderContainer'

const BaseHeader = (props) => {
    return (
        <HeaderContainer>
                {/* Left Container */}
                <View
                    style={{
                        paddingLeft: scale(17),
                        width: scale(44),
                        // flex: 1,
                        // zIndex: 1,
                        flexDirection: 'row',
                        // backgroundColor: 'blue',
                    }}
                    >
                    {props.canGoBack ?
                        <TouchableOpacity
                            onPress={props.goBackAction}
                        >
                            <BackIcon />
                        </TouchableOpacity>
                    : null}
                </View>

                {/* Center Container */}
                <View
                    style={{
                        // position: 'absolute',
                        // width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        flex: 1,
                        paddingRight: scale(10),
                        paddingLeft: scale(10),
                        // backgroundColor: 'purple',
                        justifyContent: 'center',
                    }}
                >
                    <HeaderTitle content={props.title} />

                    {/* Center Component Container */}
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            // backgroundColor: 'red',
                            position: 'absolute',
                            justifyContent: 'center',
                            zIndex: 1,
                        }}
                    >
                        {props.center}
                    </View>
                </View>


                {/* Right Container */}
                <View
                    style={{
                        // backgroundColor: 'black',
                        flexDirection: 'row',
                        width: scale(44),
                        // flex: 1,
                        // zIndex: 1,
                        paddingRight: scale(24),
                        justifyContent: 'flex-end'
                    }}
                >
                    {props.right}
                </View>
        </HeaderContainer>
    )
}

export default BaseHeader
