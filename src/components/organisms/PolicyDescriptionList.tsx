import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import PolicyDescriptionItem from '@components/molecules/PolicyDescriptionItem'
import Body from '@components/atoms/typography/Body'

import { CONTENT_MARGIN } from '@constants/figure'
import SmallTitle from '@components/atoms/typography/SmallTitle'
import Bold from '@components/atoms/typography/Bold'
import RegularText from '@components/atoms/typography/RegularText'

// 이 부분 어떻게 구현하면 좋을지 질문
const PolicyDescriptionList = () => {
  return (
    <View style={styles.container}>
      {/* 상품안내 */}
      <PolicyDescriptionItem
        title='상품안내'
        description={
          <View>
            <Bold style={styles.subtitle}>랜덤박스</Bold>

            <RegularText style={styles.text}>
              - 랜덤박스는 여러 상품들로 구성되어있습니다. 박스 오픈 시 추첨을 통해 하나의 상품을 제공합니다.{'\n'}
              - 모든 상품은 모바일 쿠폰이며, 베네피콘으로 발송됩니다.{'\n'}
              - 구매하신 박스는 '보관함'의 '랜덤박스' 탭에서 오픈할 수 있습니다.{'\n'}
              - 박스를 오픈하여 당첨된 상품은 '보관함'의 '모바일쿠폰' 탭에서 확인하실 수 있습니다.
            </RegularText>

            <Bold style={styles.subtitle}>당첨상품</Bold>

            <RegularText style={styles.text}>
              - 당첨된 상품은 14일동안 확정하지 않으면 당첨 상품금액의 80%가 언박싱 포인트로 자동 환불됩니다.{'\n'}
              - 상품을 확정하면 확정 시에 입력하신 휴대폰 번호로 베네피콘(모바일쿠폰)이 발송됩니다.{'\n'}
              - 상품 확정 즉시 모바일쿠폰이 발송되므로, 상품 확정 후에는 환불 불가합니다.{'\n'}
              - 모바일 쿠폰의 유효기간은 30일이며, 쿠폰의 유효기간 연장 및 환불 불가합니다.{'\n'}
              - 모바일쿠폰의 재판매는 엄격히 금지됩니다.{'\n'}
              - 상품 확정 30분 후에도 쿠폰이 전달되지 않은 경우, 발신자번호를 스팸차단, 통신환경(해외 또는 지하/산간 등 통신 불가지역) 등의 사유로 쿠폰을 수신받지 못하셨을 수 있습니다. 
              이때 가입하신 닉네임, 이메일과 입력하신 휴대폰 번호를 포함하여 ask.unboxing.monster@gmail.com으로 문의주시면 재발송 처리하겠습니다.
            </RegularText>
          </View>
        }
      />

      {/* 확률정보 */}
      <PolicyDescriptionItem
        title='확률정보'
        description={
          <RegularText style={styles.text}>
            - 박스 정보 페이지의 '자세한 확률 알아보기' 버튼을 누르면 확률 정보를 확인하실 수 있습니다. {'\n'}
            - 확률정보의 '상품 제공 확률' 탭에서 해당 박스의 상품 제공 확률을 확인하실 수 있습니다.{'\n'}
            - 확률정보의 '실시간 현황' 탭에서 상품 당첨 현황을 확인하실 수 있습니다.{'\n'}
            - 실시간 현황의 원 그래프는 현재까지 이용자들의 상품 당첨 내역 통계입니다.{'\n'}
            - 상품 당첨 내역 통계는 충분한 수의 표본이 모이지 않으면 상품 제공 확률과 차이가 있을 수 있습니다.{'\n'}
            - 실시간 현황의 '최근 당첨자 현황'은 최근 상품 당첨 내역 20건입니다.
          </RegularText>
        }
      />

      {/* 결제안내 */}
      <PolicyDescriptionItem
        title='결제안내'
        description={
          <>
            <Bold style={styles.subtitle}>결제수단</Bold>

            <RegularText style={styles.text}>
              결제는 현금/카드/카카오페이/언박싱포인트로 가능합니다.
            </RegularText>

            <Bold style={styles.subtitle}>언박싱포인트</Bold>

            <RegularText style={styles.text}>
              - 포인트는 100원 단위로 사용 가능합니다.{'\n'}
              - 포인트와 다른 결제 수단을 함께 사용하시는 경우, 포인트 사용 후 최종 결제 금액이 100원 이상이어야 결제 가능합니다.
            </RegularText>
          </>
        }
      />

      <PolicyDescriptionItem
        title='배송안내'
        description={
            <RegularText style={styles.text}>
              - 쿠폰 확정 시 작성하신 휴대폰번호로 모바일 쿠폰을 전송합니다.{'\n'}
              - 모바일 쿠폰은 문자 메시지로 전송합니다. {'\n'}
              - 문자메시지 전송 비용은 언박싱 몬스터가 부담합니다.
            </RegularText>
        }
      />

      {/* 환불안내 */}
      <PolicyDescriptionItem
        title='환불안내'
        description={
          <>
            <Bold style={styles.subtitle}>결제 취소</Bold>

            <RegularText style={styles.text}>
              구매하신 모든 박스를 오픈하지 않았을 경우에만 결제 취소 가능합니다. 결제 취소 시 결제에 사용하신 카드 혹은 통장으로 환불이 진행되며, 환불까지는 영업일 기준 2-3일 소요될 수 있습니다.
            </RegularText>

            <Bold style={styles.subtitle}>당첨 상품 환불</Bold>

            <RegularText style={styles.text}>
              - 쿠폰 사용이 확정되지 않았을 때만 환불이 가능합니다.{'\n'}
              - 수신자 번호를 잘못 입력하신 경우 환불이 불가능합니다.{'\n'}
              - 당첨된 상품가의 80%가 언박싱 포인트로 환불됩니다. 상품은 일정 기간동안 사용 확정이 되지 않으면 자동 환불 처리됩니다.{'\n'}
              - 언박싱 포인트는 현금화 불가합니다.
            </RegularText>
          </>
        }
      />

      {/* 문의 */}
      <PolicyDescriptionItem
        title='문의'
        description={
          <View>
            <Body
              content="문의사항은 아래의 메일로 보내주시면 빠르게 답변드리겠습니다."
            />

            <Body
              content="ask.unboxing.monster@gmail.com"
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
  subtitle: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
    marginBottom: 3
  },
  text: {
    fontSize: 12.5,
    lineHeight: 20,
    marginBottom: 3,
  },
  paragraph: {
    marginTop: 5,
  }
})
