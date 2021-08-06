
import React, { useState, createRef } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'
import BaseHeader from './BaseHeader'
import { scale } from 'react-native-size-matters'
import { ICONS } from '../../../constants/icons'


const HeaderWhileSearching = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const searchInputRef = createRef<TextInput>()

    return (
        <BaseHeader
            canGoBack={props.canGoBack}
            goBackAction={props.goBackAction}
            right={
                <View
                    style={{
                        justifyContent: 'center',
                        paddingRight: scale(24)
                    }}
                >
                    <TouchableOpacity
                        onPress={props.goBackAction}
                        style={{
                            position: 'absolute',
                            // backgroundColor: 'red',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}
                        >
                            취소
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            center={
                <>
                <View
                    style={{
                        backgroundColor: '#f9f9f9',
                        width: scale(237),
                        height: 32,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginRight: scale(10),
                        }}
                        onPress={() => setSearchValue('')}
                    >
                        <Image
                            source={ICONS.xCircle}
                            style={{
                                width: 16,
                                height: 16,
                                
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TextInput 
                    style={{
                        marginLeft: scale(15),
                        width: scale(186),
                        fontSize: 14,
                        zIndex: 1,
                        position: 'absolute',
                    }}
                    onChangeText={(content) => setSearchValue(content)}
                    autoFocus={true}
                    onSubmitEditing={() => {
                        console.log(searchValue)
                    }}
                    value={searchValue}
                />
                </>
            }
        />
    )
}

export default HeaderWhileSearching