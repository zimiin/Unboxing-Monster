import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

import PolicyDescriptionItem from '@components/molecules/PolicyDescriptionItem'
import Body from '@components/atoms/typography/Body'

import { CONTENT_MARGIN } from '@constants/figure'
import SmallTitle from '@components/atoms/typography/SmallTitle'

// 이 부분 어떻게 구현하면 좋을지 질문
const PolicyDescriptionList = () => {
    return (
        <View style={styles.container}>
            {/* 상품안내 */}
            <PolicyDescriptionItem
                title='상품안내'
                description={
                    <View>
                        <Body
                            content="추첨을 통해 구성상품 중 한 가지를 제공합니다.
                            상품 제공 확률은 ‘구성상품’의 ‘자세한 확률 알아보기’버튼, 실시간 
                            제공 현황은 홈>오른쪽 상단 메뉴>실시간 현황 페이지에서 보실 수 
                            있습니다. 공정한 랜덤박스 언박싱에 대한 설명은 ‘자세한 확률 
                            알아보기’ 버튼 위의 ‘어떻게 언박싱이 공정함을 갖나요?’에서 
                            소개드립니다."
                        />

                        <View style={styles.paragraph}>
                            <Body 
                                content="상품은 모바일쿠폰으로 제공됩니다. 모바일쿠폰은 입력하신 
                                휴대폰 번호로 발송됩니다. 배송 상품의 경우 추후 배송지를 입력해
                                주시면 됩니다. 기프티쇼(www.giftishow.com)에서 받으신 모바
                                일쿠폰을 확인 및 배송지 등록을 하실 수 있습니다."
                            />
                        </View>
                    </View>
                }
            />

            {/* 환불안내 */}
            <PolicyDescriptionItem
                title='환불안내'
                description={
                    <View>
                        <SmallTitle content="결제 취소" />

                        <View style={styles.paragraph}>
                            <Body
                                content="구매하신 모든 박스를 오픈하지 않았을 경우에만 결제 취소가 가능
                                합니다. 결제 취소 시 결제에 사용하신 카드 혹은 통장으로 환불이 
                                진행되며, 환불까지는 영업일 기준 2-3일 소요될 수 있습니다."
                            />
                        </View>

                        <View style={{marginTop: 12}}>
                            <SmallTitle content="당첨 상품 환불" />
                        </View>

                        <View style={styles.paragraph}>
                            <Body
                                content="유효기간 이전, 당첨된 상품가의 80%만 환불 가능합니다. 
                                유효기간이 지난 상품은 환불이 불가합니다."
                            />
                        </View>
                    </View>
                }
            />

            {/* 결제안내 */}
            <PolicyDescriptionItem
                title='결제안내'
                description={<Body content="결제는 현금/카드/언박싱포인트로 가능합니다."/>}
            />
            
            {/* 문의 */}
            <PolicyDescriptionItem
                title='문의'
                description={
                    <View>
                        <Body 
                            content="상품에 관한 문의사항은 아래의 메일로 보내주시면 가능한 빠르게 답변드리겠습니다."
                        />
                    
                        <Body 
                            content="unboxing.qna@gmail.com"
                        />
                    </View>
                }
            />
        </View>
    )
}

export default PolicyDescriptionList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eef1f2',
        paddingLeft: CONTENT_MARGIN,
        paddingRight: CONTENT_MARGIN,
        paddingTop: 7,
        paddingBottom: 31,
    },
    paragraph: {
        marginTop: 5,
    }
})
