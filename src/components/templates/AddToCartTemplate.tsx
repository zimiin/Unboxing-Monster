import BaseHeader from '@components/organisms/header/BaseHeader'
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import BoxInfoImage from '@components/atoms/BoxInfoImage'
import Title from '@components/atoms/typography/Title'
import { scale } from 'react-native-size-matters'
import BoxPriceInfo from '@components/atoms/BoxPriceInfo'
import MinusButton from '@components/atoms/button/MinusButton'
import PlusButton from '@components/atoms/button/PlusButton'

const AddToCartTemplate = (props) => {
    return (
        <>
        <BaseHeader
            canGoBack={true}
            goBackAction={props.goBackAction}
            title={'장바구니에 담기'}
        />

        <HorizontalRule />

        {/* 박스 정보 */}
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <BoxInfoImage image={props.boxImage} />

            {/* 박스 이름 및 가격 */}
            <View
                style={{
                    paddingVertical: 22,
                    paddingHorizontal: scale(24),
                }}
            >
                <Title content={props.boxName} />
                
                <View
                    style={{
                        marginTop: 5,
                    }}
                >
                    <BoxPriceInfo price={props.boxPrice} />

                </View>
            </View>

            <HorizontalRule />

            {/* 수량 조절 */}
            <View
                style={{
                    paddingVertical: 22,
                    paddingHorizontal: scale(24),
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: 'rgba(6, 6, 6, 0.15)',
                    borderBottomWidth: 1,
                }}
            >
                <Text 
                    style={{
                        fontSize: 14,
                        flex: 1,
                    }}
                >
                    수량
                </Text>

                {/* - 버튼 */}
                <MinusButton 
                    onPress={props.onPressMinus}
                />

                {/* state만들고 보여주기 */}
                <Text
                    style={{
                        fontSize: 14,
                        marginHorizontal: scale(19),
                    }}
                >
                    {props.count}개
                </Text>

                {/* + 버튼 */}
                <PlusButton onPress={props.onPressPlus}/>
            </View>

            {/* 전체 가격 */}
            <View
                style={{
                    
                    paddingVertical: 22,
                    backgroundColor: 'white',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingRight: scale(24),
                    flexDirection: 'row',
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        marginRight: 5,
                    }}
                >
                    총
                </Text>
                <BoxPriceInfo price={props.boxPrice * props.count} />
            </View>
        </ScrollView>

        {/* 담기 버튼 */}
        <TouchableOpacity
            style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#29a3ff',
            }}
            onPress={props.onPressAdd}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                    marginVertical: 15,
                    fontWeight: 'bold',
                }}
            >
                담기
            </Text>
        </TouchableOpacity>
        </>
    )
}

export default AddToCartTemplate
