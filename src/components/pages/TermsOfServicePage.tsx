import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale } from '@constants/figure'
import { TermsOfServiceProps } from '@constants/navigationTypes'
import React, { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

const TermsOfServicePage = ({ route, navigation }: TermsOfServiceProps) => {
  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={() => navigation.goBack()}
        title={'서비스 이용약관'}
      />

      <ScrollView style={styles.screen}>
        <Bold>이용약관 (제정: 2021. 10. 10.)</Bold>

        <Bold>제1조 (목적)</Bold>

        <Text>
          이 약관은 꾸러기원정대(이하 “회사”라 합니다)가 모바일 기기를 통해 제공하는 언박싱몬스터 사이버 몰(이하 “몰”이라 합니다.) 및 이에 부수하는 네트워크, 웹사이트, 기타 서비스(이하 “서비스”라 합니다)의 이용에 대한 회사와 서비스 이용자의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

          ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
        </Text>

        <Bold>제2조 (용어의 정의)</Bold>

        <Text>
          ① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.{'\n'}
          1. “몰”이란 모바일 기기를 통해 서비스를 제공하는 영업장 및 사업자를 의미합니다.{'\n'}
          2. “이용자”이란 이 약관에 따라 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.{'\n'}
          3. “임시회원”이란 일부 정보만 제공하고 회사가 제공하는 서비스의 일부만 이용하는 자를 의미합니다.{'\n'}
          4. “랜덤박스”란 꾸러기원정대가 “몰”에 게시한 상품들 중 어느 하나의 상품이 이용자의 선택에 따라 특정되기 전 가상의 박스로 확률형 상품으로, 꾸러기원정대와 이용자 사이의 매매대상물을 말합니다.{'\n'}
          5. “회원”이란 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.{'\n'}
          6. “비회원”이란 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.{'\n'}
          ② 이 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스별 정책에서 정하는 바에 의하며, 이에 정하지 아니한 것은 일반적인 상 관례에 따릅니다.
        </Text>

        <Bold>제3조 (약관 등의 명시와 설명 및 개정)</Bold>

        <Text>
          1. “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소 (소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 언박싱몬스터 초기 서비스화면(전면)에 게시합니다.{'\n'}
          2. “몰”은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임 및 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.{'\n'}
          3. “몰”은 ‘전자상거래 등에서의 소비자보호에 관한 법률’, ‘약관의 규제에 관한 법률’, ‘전자문서 전자거래 기본법’, ‘전자금융거래법’, ‘전자서명법’, ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, ‘방문판매 등에 관한 법률’, ‘소비자기본법’ 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.{'\n'}
          4. “몰”이 약관을 개정할 경우애는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰”은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.{'\n'}
          5. “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만, 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제 3항에 의한 개정약관의 공지 기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.{'\n'}
          6. 이 약관에서는 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
        </Text>


        <Bold>제4조 (서비스의 제공 및 변경)</Bold>

        <Text>
          ① “몰”은 다음과 같은 업무를 수행합니다.{'\n'}
          “랜덤박스” 이용에 대한 정보 제공 및 “랜덤박스” 구매계약의 체결{'\n'}
          “랜덤박스”를 확인하여 특정된 재화 또는 용역의 배송{'\n'}
          기타 “몰”이 정하는 업무{'\n'}
          ② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.{'\n'}
          ③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화 등의 품절 또는 기술적 사영의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.{'\n'}
          ④ 전하의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.{'\n'}
          ⑤ 3항의 경우 그에 상응하는 유사 상품 또는 최초 이용 금액에 상응하는 재화로 이용자에게 대체 지급될 수 있습니다.
        </Text>

        <Bold>제5조 (서비스의 중단)</Bold>
        <Text>
          ① “몰”은 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.{'\n'}
          ② “몰”은 제 1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제 3가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입장하는 경우에는 그러하지 아니합니다.{'\n'}
          ③ 사업 종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제 8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.
        </Text>
        <Bold>제6조 (회원가입)</Bold>

        <Text>
          ① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.{'\n'}
          ② “몰”은 제 1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.{'\n'}
          1. 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.{'\n'}
          2. 등록 내용에 허위, 기재 누락, 오기가 있는 경우{'\n'}
          3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우{'\n'}
          ③ 회원가입계약의 성립시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.{'\n'}
          ④ 회원은 제16조 제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편 기타 방법으로 “몰”에 대하여 그 변경사항을 알려야 합니다.
        </Text>

        <Bold>제7조 (회원 탈퇴 및 자격 상실 등)</Bold>

        <Text>
          ① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.{'\n'}
          ② 회원이 다음 각호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다.{'\n'}
          1. 가입 신청 시에 허위 내용을 등록한 경우{'\n'}
          2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않느 경우{'\n'}
          3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우{'\n'}
          4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우{'\n'}
          ③ “몰”이 회원 자격을 제한, 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.{'\n'}
          ④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.{'\n'}
          ⑤ “몰”은 다음 각 호에 해당하는 문제의 조사가 완료될 때까지 회원의 계정을 잠정 조치로서 정지할 수 있습니다.{'\n'}
          1 계정이 해킹 또는 도용 당했다는 제보가 접수될 경우{'\n'}
          2. 약관 위반 행위에 대한 제보 또는 정황이 발생한 경우
        </Text>
        <Bold>제8조 (회원에 대한 통지)</Bold>
        <Text>
          ① “몰”이 회원에 대한 통지를 하는 경우, 회원이 “몰”과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.{'\n'}
          ② “몰”은 불특정다수 회원에 대한 통지의 경우 1주일이상 “몰” 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.
        </Text>
        <Bold>제9조 (구매신청 및 개인정보 제공 동의 등)</Bold>
        <Text>
          ① “몰” 이용자는 “몰” 상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, “몰”은 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.{'\n'}
          1. “랜덤박스” 구매 및 이용에 관한 사항{'\n'}
          2. 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력{'\n'}
          3. 약관 내용, “몰”과 이용자 사이의 매매대상물은 “랜덤박스”이고 랜덤박스를 확인한 이후 매매계약이 완료되어 청약철회권이 제한되는 서비스인 내용, 이용자가 배송비를 부담하는 내용 등의 비용부담과 관련한 내용에 대한 확인{'\n'}
          4. 이 약관에 동의하고 위 3호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭){'\n'}
          5. 재화 등의 구매신청 및 이에 관한 확인 또는 “몰”의 확인에 대한 동의{'\n'}
          6. 결제방법의 선택{'\n'}
          ② “몰”이 제3자에게 구매자 개인정보를 제공할 필요가 있는 경우{'\n'}
          1) 개인정보를 제공받는 자,{'\n'}
          2) 개인정보를 제공받는 자의 개인정보 이용목적,{'\n'}
          3) 제공하는 개인정보의 항목,{'\n'}
          4) 개인정보를 제공받는 자의 개인정보 보유 및 이용기간을 구매자에게 알리고 동의를 받아야 합니다. (동의를 받은 사항이 변경되는 경우에도 같습니다.){'\n'}
          ③ “몰”이 제 3자에게 구매자의 개인정보를 취급할 수 있도록 업무를 위탁하는 경우에는{'\n'}
          1) 개인정보 취급위탁을 받는 자,{'\n'}
          2) 개인정보 취급위탁을 하는 업무의 내용을 구매자{'\n'}

          에게 동의를 받아야 합니다. (동의를 받은 사항이 변경되는 경우에도 같습니다.) 다만, 서비스제공에 관한 계약이행을 위해 필요하고 구매자의 편의증진과 관련된 경우에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에서 정하고 있는 방법으로 개인정보 취급방침을 통해 알림으로써 고지절차와 동의절차를 거치지 않아도 됩니다.
        </Text>
        <Bold>제10조 (계약의 성립)</Bold>
        <Text>
          ① “몰”은 제 9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.{'\n'}
          1. 신청 내용에 허위, 기재누락, 오기가 있는 경우{'\n'}
          2. 미성년자가 다음 목들에 해당하는 구매를 할 경우{'\n'}

          가. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우{'\n'}
          나. 미성년자의 유료결제가 법정대리인으로부터 청분을 허락 받은 재산 (민법 제6조)의 범위가 아닌 경우{'\n'}
          다. 서비스 구매자가 미성년인지 여부는 단말기, 결제 수단 명의자 등의 근거 기록을 토대로 판단하며, 필요에 따라 미성년자 및 법정대리인을 증명할 수 있는 서류 제출을 요구할 수 있습니다.{'\n'}

          ② “몰”의 승낙이 제12조 제1항의 수신확인 통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.{'\n'}
          ③ “몰”의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매 가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.
        </Text>
        <Bold>제11조 (지급방법)</Bold>
        <Text>
          “몰”에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 방법 중 가용한 방법으로 할 수 있습니다. 단, “몰”은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.{'\n'}
          1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체{'\n'}
          2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제{'\n'}
          3. 마일리지 등 “몰”이 지급한 포인트에 의한 결제{'\n'}
          4. “몰”과 계약을 맺었거나 “몰”이 인정한 상품권 또는 쿠폰에 의한 결제{'\n'}
          5. 기타 전자적 지급 방법에 의한 대금 지급 등
        </Text>
        <Bold>제12조 (수신확인통지, 구매신청 변경 및 취소)</Bold>
        <Text>
          ① “몰”은 이용자의 “랜덤박스” 구매신청(청약)이 있는 경우, 이용자의 청약을 승낙하여 이용자에게 “랜덤박스”를 제공합니다.{'\n'}
          ② “랜덤박스” 생성을 확인한 이용자가 의사표시의 불일치 등이 있는 경우에는 즉시 구매신청 변경 및 취소를 요청할 수 있고, “몰”은 이용자가 “랜덤박스” 생성을 확인한 날로부터 7일 이내에 이용자의 청약철회 요청이 있는 경우에는 지체없이 그 요청에 따라 처리하여야 하고, 이용대금을 전자상거래 등에서의 소비자보호에 관한 법률 제 18조 제 2항에 따라 반환합니다. 다만, 이용자가 “랜덤박스”를 열어 확인하여 상품이 특정된 경우 “랜덤박스” 구매계약의 이행이 완료되어 청약의 철회가 불가합니다.
        </Text>
        <Bold>제13조 (재화 등의 공급)</Bold>
        <Text>
          ① “몰”은 이용자가 “랜덤박스”를 확인하여 특정된 상품을 이용자의 배송신청에 따라 배송신청을 한 날부터 7일 이내의 재화 등을 배송할 수 있도록 포장 등 기타의 필요한 조치를 취합니다.{'\n'}
          ② “몰”은 이용자가 “랜덤박스”를 확인하여 특정된 상품에 대하여 배송수단, 이용자가 부담할 배송비, 수단별 배송기간 등을 명시합니다. 만약 “몰”이 약정 배송기간을 초과한 경우에는 그로인한 이용자의 손해를 배상하여야 합니다. 다만 “몰”이 고의 및 과실이 없음을 입증한 경우에는 그러하지 아니합니다.{'\n'}
          ③ 이용자는 배송완료일부터 14일 이내에 “몰”에게 상품불량에 대한 이의를 제기할 수 있으며, 14일이 경과된 경우 제기할 수 없습니다.
        </Text>
        <Bold>제14조 (환급)</Bold>
        <Text>
          ① “몰”은 이용자가 구매한 “랜덤박스”를 확인하지 않고 이 약관 12조 제2항이 정하는 청약철회를 한 경우 “랜덤박스” 구매대금을 청약철회일로부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.{'\n'}
          ② “몰”은 이용자가 “랜덤박스”를 확인하여 특정된 상품을 배송신청하지 않을 경우 14일간 보관하여, 14일을 초과한 경우 제품의 수령의사가 없는 것으로 간주하여 14일 간의 보관료에 부가세 등 서비스 비용을 제외한 금액을 언박싱 포인트로 산정하여 이용자에게 환급합니다. 상품의 특성에 따라 보관기간이 다른 상품은 상품보관이 다름을 공지하여야 합니다. 이용자는 1회에 한하여 보관 기한이 만료된 상품의 기간연장을 요청할 수 있으며 “몰”은 보관기간을 7일간 연장합니다. 다만, 보관기간이 경과하고 14일이 경과한 시점에도 기간연장을 하지 않는 경우 제품의 수급 및 재고관리비용 등 현실적인 문제를 감안하여 “몰”은 보관기간 연장을 제공하지 않을 수 있습니다.{'\n'}
          ③ 환급, 이벤트 등으로 인해 획득한 언박싱 포인트는 “몰” 내에서만 사용 가능하며 현금화가 불가합니다.
        </Text>
        <Bold>제15조 (쿠폰)</Bold>
        <Text>
          ① 쿠폰은 “몰”이 무상으로 발행하는 것으로 발행대상, 발행경로, 사용대상 등에 따라 구분될 수 있으며, 할인쿠폰의 세부구분, 할인금액, 사용방법, 사용기한 및 제한에 대한 사항은 쿠폰 또는 서비스 화면에 표시됩니다.{'\n'}
          ② 쿠폰은 현금으로 출금될 수 없으며, 쿠폰에 표시된 유효기간이 만료되거나 회원자격이 상실되면 소멸합니다.{'\n'}
          ③ 쿠폰은 타인에게 양도할 수 없으며, 부정한 목적으나 용도로 사용 또는 획득할 수 없습니다. 이를 위반한 경우 “몰”은 쿠폰을 소멸시키거나 회원 가격을 제한할 수 있습니다.
        </Text>
        <Bold>제16조 (청약철회 등)</Bold>
        <Text>
          ① “몰”과 “랜덤박스” 구매를 한 이용자는 ‘전자상거래 등에서의 소비자보호에 관한 법률’ 제13조 제2항에 따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날로, 이용자가 랜덤박스를 구매하여 랜덤박스가 생성된 날을 말합니다.)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 ‘전자상거래 등에서의 소비자 보호에 관한 법률’에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다. 또한 이용자가 “랜덤박스”를 확인하여 상품이 특정된 경우 “랜덤박스” 구매계약의 이행이 완료되어 청약의 철회가 제한됩니다.{'\n'}

          ② 이용자는 “랜덤박스”를 확인하여 특정된 재화 등을 배송 받은 경우 다음 각호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.{'\n'}
          1. 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우 (다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다.){'\n'}
          2. 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우{'\n'}
          3. 시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우{'\n'}
          4. 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우{'\n'}
          ③ 제2항 제3호 내지 제4호의 경우에 “몰”이 사전에 반품 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 사용 상품을 제공하는 등의 조치를 하지 않았다면 이용자의 반품 및 교환요청이 제한되지 않습니다.{'\n'}
          ④ 이용자는 제1항 및 제2항의 규정에 불구하고 랜덤박스를 확인하여 특정된 상품 등의 내용이 표시, 광고 내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 반품 및 교환요청을 할 수 있습니다.
        </Text>
        <Bold>제17조 (청약철회 등의 효과)</Bold>
        <Text>
          ① “몰”은 이용자로부터 ‘랜덤박스’ 생성일로부터 7일 이내 ‘랜덤박스’ 구매 취소 요청을 받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 이 경우 “몰”이 이용자에게 재화 등의 환급을 지연한 때에는 그 지연기간에 대하여 ‘전자상거래 등에서의 소비자보호에 관한 법률 시행령’ 제21조의 2에서 정하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.{'\n'}
          ② “몰”은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.{'\n'}
          ③ “몰”은 이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만, ‘랜덤박스’ 확인 이후 특정된 상품의 내용이 표시·광고 내용과 다르게 이행되어 반품 및 교환 요청을 하는 경우 재화 등의 반환에 필요한 비용은 “몰”이 부담합니다.{'\n'}
          ④ 이용자가 ‘랜덤박스’를 확인하여 특정된 상품을 제공받을 때 발송비를 부담한 경우에 “몰”은 반환 및 교환 시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.{'\n'}
          ⑤ 청약철회 내역에 쿠폰이 포함되었을 경우 청약철회를 신청한 시점 기준으로 해당 쿠폰의 유효기간이 만료되지 않았을 경우에만 반환됩니다.
        </Text>
        <Bold>제18조 (개인정보보호)</Bold>
        <Text>
          ① “몰”은 이용자의 개인정보 수집시 서비스 제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.{'\n'}
          ② “몰”은 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.{'\n'}
          ③ “몰”은 이용자의 개인정보를 수집 및 이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.{'\n'}
          ④ “몰”은 수집된 개인정보를 목적외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용 제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.{'\n'}
          ⑤ “몰”이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은 자, 제공목적 및 제공할 정보의 내용) 등 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’ 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.{'\n'}
          ⑥ 이용자는 언제든지 “몰”이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 “몰”은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 “몰”은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.{'\n'}
          ⑦ “몰”은 개인정보 보호를 위하여 이용자의 개인정보를 취급하는 자를 최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.{'\n'}
          ⑧ “몰” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.{'\n'}
          ⑨ “몰”은 개인정보의 수집,이용,제공에 관한 동의 란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집,이용,제공에 관한 이용자의 동의거절시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집,이용,제공에 관한 이용자의 동의 거절을 이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 않습니다.
        </Text>
        <Bold>제19조 (“몰”의 의무)</Bold>
        <Text>
          ① “몰”은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화 및 용역을 제공하는데 최선을 다하여야 합니다.{'\n'}
          ② “몰”은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.{'\n'}
          ③ “몰”이 상품이나 용역에 대하여 「표시광고의공정화에관한법률」 제3조 소정의 부당한 표시광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.{'\n'}
          ④ “몰”은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.
        </Text>
        <Bold>제20조 (회원의 ID 및 비밀번호에 대한 의무)</Bold>
        <Text>
          ① 제18조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.{'\n'}
          ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.{'\n'}
          ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 “몰”에 통보하고 “몰”의 안내가 있는 경우에는 그에 따라야 합니다.
        </Text>
        <Bold>제21조 (이용자의 의무)</Bold>
        <Text>
          ① “몰”의 이용자는 다음 각호의 1에 해당하는 해위를 할 경우 이용에 제한을 받을 수 있습니다.{'\n'}
          1. 신청 또는 변경 시 허위 내용의 등록{'\n'}
          2. 타인의 정보 도용{'\n'}
          3. “몰”에 게시된 정보의 변경{'\n'}
          4. “몰”이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시{'\n'}
          5. “몰” 기타 제3자의 저작권 등 지적재산권에 대한 침해{'\n'}
          6. “몰” 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위{'\n'}
          7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위{'\n'}
          8. 회원이 무재고 재판매의 목적으로 “몰”의 거래질서를 방해한 경우{'\n'}
          {'\n'}
          가. 무재고 재판매란 “몰”의 상품을 직접 수령하지 않고 “몰” 이외의 수단을 통해 판매하는 행위를 의미{'\n'}
          나. 특히 타 플랫폼을 통해 판매 후 언박싱 몬스터를 통해 발송하는 행위
        </Text>
        <Bold>제22조 (연결 “몰”과 피연결 “몰” 간의 관계)</Bold>
        <Text>
          ① 상위 “몰”과 하위 “몰”이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 “몰”(웹 사이트)이라고 하고 후자를 피연결 “몰”(웹사이트)이라고 합니다.{'\n'}
          ② 연결“몰”은 피연결“몰”이 독자적으로 제공하는 재화 등에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결“몰”의 초기화면 또는 연결되는 시점의 팝업화면으로 명시한 경우에는 그 거래에 대한 보증 책임을 지지 않습니다.
        </Text>
        <Bold>제23조 (저작권의 구속 및 이용제한)</Bold>
        <Text>
          ① “몰“이 작성한 저작물에 대한 저작권 기타 지적재산권은 ”몰“에 귀속합니다.{'\n'}
          ② 이용자는 “몰”을 이용함으로써 얻은 정보 중 “몰”에게 지적재산권이 귀속된 정보를 “몰”의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.{'\n'}
          ③ “몰”은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.
        </Text>
        <Bold>제24조 (분쟁해결)</Bold>
        <Text>
          ① “몰”은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치 및 운영합니다.{'\n'}
          ② “몰”은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.{'\n'}
          ③ “몰”과 이용자간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
        </Text>
        <Bold>제25조 (재판권 및 준거법)</Bold>
        <Text>
          ① “몰”과 이용자간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.{'\n'}
          ② “몰”과 이용자간에 제기된 전자상거래 소송에는 한국법을 적용합니다.
        </Text>
      </ScrollView>
    </>
  )
}

export default TermsOfServicePage

const styles =StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(24),
  }
})
