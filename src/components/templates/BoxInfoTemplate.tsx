import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';

import BoxInfoImage from '../atoms/BoxInfoImage';
import { CONTENT_WIDTH, SCREEN_WIDTH } from '../../constants/figure';
import Title from '../atoms/typography/Title';
import BoxPriceInfo from '../atoms/BoxPriceInfo';
import SubTitle from '../atoms/typography/SubTitle';
import Body from '../atoms/typography/Body';
import AddToCartButton from '../atoms/button/AddToCartButton';
import BoxListItem from '../atoms/BoxListItem';
import Footer from '../molecules/Footer';
import PolicyDescriptionList from '../organisms/PolicyDescriptionList';
import ToIntroButton from '../atoms/button/ToIntroButton';
import ToProbabilityButton from '../atoms/button/ToProbabilityButton'

const BoxInfoTemplate = (props) => {
    return (
        // prop으로 받은 컴포넌트들 배치
        <View
            style={{
                flex: 1,
            }}
        >
            <ScrollView
                style={{
                    backgroundColor: 'white',
                }}    
            >
                {/* 박스 대표 이미지 */}
                <View
                    style={{
                        width: SCREEN_WIDTH,
                        height: SCREEN_WIDTH,
                        backgroundColor: 'grey',
                    }}
                >
                    {props.image}
                </View>

                {/* Content Container */}
                <View
                    style={{
                        width: CONTENT_WIDTH,
                        alignSelf: 'center',
                    }}
                >
                    {/* 박스명 */}
                    <View
                        style={{
                            marginTop: 26,
                        }}
                    >
                        {props.boxName}
                    </View>

                    {/* 박스가격 */}
                    <View
                        style={{
                            marginTop: 5,
                        }}
                    >
                        {props.boxPrice}
                    </View>

                    {/* 박스 소개 */}
                    <View
                        style={{
                          marginTop: 26,  
                        }}
                    >
                        <SubTitle
                            subTitle={'이 박스는요'}
                        />

                    </View>

                    <View
                        style={{
                            marginTop: 4,
                        }}
                    >
                        {props.boxDetail}
                        
                    </View>

                    {/* 박스 구성상품 */}
                    <View
                        style={{
                            marginTop: 25,
                        }}
                    >
                        <SubTitle
                            subTitle='구성상품'
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 25,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {props.boxItems}
                    </View>
                </View>
                

                {/* 언박싱 인트로 이동 버튼 */}
                <ToIntroButton />

                {/* 자세한 확률 알아보기 버튼 */}
                <View
                    style={{
                        marginTop: 13,
                    }}
                >
                    <ToProbabilityButton />

                </View>

                {/* 안내사항 */}
                <View
                    style={{
                        marginTop: 31,
                    }}
                >
                    <PolicyDescriptionList />
                </View>

                {/* Footer */}
                <Footer />

                
            </ScrollView>

            <AddToCartButton />
            
        </View>
    );
}

export default BoxInfoTemplate;
