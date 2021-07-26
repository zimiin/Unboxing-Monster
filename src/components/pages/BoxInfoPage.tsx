import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import { ICONS } from '../../constants/icons';
import { IMAGES } from '../../constants/images';

// 데이터 불러오기

const BoxInfo = ({ route, navigation }) => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >

            
            {/* // 불러온 데이터 보여주기 */}
            <ScrollView
                style={{
                    backgroundColor: 'white',

                }}    
            >
                {/* 박스 대표 이미지 */}
                <View style={{
                    height: 255,
                    backgroundColor: 'grey',
                }}>
                    {/* <Text>This is {route.params.boxId}BoxInfo.</Text> */}
                </View>

                {/* 박스명 */}
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 24,
                        marginLeft: 24,
                    }}
                >
                    엄청난 박스
                </Text>

                {/* 박스 가격 */}
                <Text
                    style={{
                        fontSize: 18,
                        marginTop: 5,
                        marginLeft: 24,
                    }}
                >
                    30,000원
                </Text>

                {/* 박스 소개 */}
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 24,
                        marginTop: 26,
                    }}
                >
                    이 박스는요
                </Text>

                <Text
                    style={{
                        fontSize: 12,
                        marginLeft: 24,
                        marginTop: 4,
                        marginRight: 24,
                    }}
                >
                    고기로 구성된 박스입니다. A+ 등급의 한우를 노려보세요!
                    고기로 구성된 박스입니다. A+ 등급의 한우를 노려보세요!
                    고기로 구성된 박스입니다. A+ 등급의 한우를 노려보세요!
                    고기로 구성된 박스입니다. A+ 등급의 한우를 노려보세요!
                </Text>

                {/* 구성 상품 */}
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 24,
                        marginTop: 25,
                    }}
                >
                    구성상품
                </Text>

                {/* 구성상품 리스트 */}
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: 13,
                        width: 360,
                        alignSelf: 'center',
                    }}
                >

                    <View
                        style={{
                            alignItems: 'center',
                            width: '50%',
                            marginBottom: 43,
                            // backgroundColor: 'red',
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/Temp.png')}
                                style={{
                                    width: 150,
                                    height: 150,
                                }}
                            />

                        </TouchableOpacity>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginTop: 13,
                            }}
                        >
                            동글동글 케이크팝
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                color: '#060606',
                                marginTop: 1,
                            }}
                        >
                            정가 32,000원
                        </Text>

                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            width: '50%',
                            marginBottom: 43,
                            // backgroundColor: 'red',
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/Temp.png')}
                                style={{
                                    width: 150,
                                    height: 150,
                                }}
                            />

                        </TouchableOpacity>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginTop: 13,
                            }}
                        >
                            동글동글 케이크팝
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                color: '#060606',
                                marginTop: 1,
                            }}
                        >
                            정가 32,000원
                        </Text>

                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            width: '50%',
                            marginBottom: 43,
                        }}
                    >
                    <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/Temp.png')}
                                style={{
                                    width: 150,
                                    height: 150,
                                }}
                            />

                        </TouchableOpacity>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginTop: 13,
                            }}
                        >
                            동글동글 케이크팝
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                color: '#060606',
                                marginTop: 1,
                            }}
                        >
                            정가 32,000원
                        </Text>

                    </View>
                </View>

                {/* 언박싱 확률 관련 */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#060606',
                        }}
                    >
                        어떻게 언박싱이 공정함을 갖나요?
                    </Text>

                    <Image
                        source={ICONS.info}
                        style={{
                            width: 12,
                            height: 12,
                            marginLeft: 6,
                        }}
                    />

                </TouchableOpacity>

                {/* 자세한 확률 알아보기 버튼 */}
                <TouchableOpacity
                    style={{
                        width: 312,
                        height: 48,
                        backgroundColor: '#eef1f2',
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 13,
                    }}
                >
                    <Text
                        style={{
                            color: '#060606',
                            fontSize: 14,

                        }}
                    >
                        자세한 확률 알아보기
                    </Text>

                </TouchableOpacity>

                {/* 안내사항 */}
                <View
                    style={{
                        paddingTop: 17,
                        paddingBottom: 23,
                        backgroundColor: '#eef1f2',
                        marginTop: 31,
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: 13,
                            paddingBottom: 13,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: 24,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}
                        >
                            상품안내
                        </Text>

                        {/* 토글 버튼 */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 19,
                            }}
                        >
                            <Image 
                                source={ICONS.downArrow}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#eef1f2',
                            paddingTop: 13,
                            paddingBottom: 13,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: 24,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}
                        >
                            환불안내
                        </Text>

                        {/* 토글 버튼 */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 19,
                            }}
                        >
                            <Image 
                                source={ICONS.downArrow}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 결제안내 */}
                {/* 문의안내 */}

                {/* Footer */}
                <View
                    style={{
                        backgroundColor: '#dee3e5',
                        paddingTop: 33,
                        paddingLeft: 24,
                        paddingBottom: 27,
                    }}
                >
                    <Image
                        source={IMAGES.teamName}
                        style={{
                            width: 99,
                            height: 15,
                        }}
                    />

                    <Text
                        style={{
                            fontSize: 12,
                            color: '#060606',
                            lineHeight: 20,
                            marginTop: 16,
                        }}
                    >
                        상호명 : 꾸러기원정대   대표 : 한일석{'\n'}
                        개인정보담당자 : 오선식{'\n'}
                        통신판매업신고 : 2000-서울어디-0000호{'\n'}
                        사업자등록번호 : 209-99-99999 [사업자정보확인]{'\n'}
                        사업장소재지 : 선릉역 아남타워{'\n'}
                        E-mail : unboxing@gmail.com{'\n'}
                        Copyright @ unboxing  All rights reserved.
                    </Text>
                </View>

                
            </ScrollView>

            {/* 담기 버튼 */}
            <TouchableOpacity
                style={{
                    backgroundColor: '#29a3ff',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 18,
                    paddingBottom: 19,
                }}
            >
                {/* 장바구니 이미지 */}
                <Image
                    source={ICONS.bag}
                    style={{
                        width: 18,
                        height: 18, 
                    }}
                />

                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'white',
                        marginLeft: 7,
                    }}
                >
                    담기
                </Text>
            </TouchableOpacity> 
        </View>
    );
}

export default BoxInfo;
