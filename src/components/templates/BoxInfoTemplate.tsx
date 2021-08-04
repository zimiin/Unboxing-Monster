import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'

import SubTitle from '../atoms/typography/SubTitle'
import AddToCartButton from '../atoms/button/AddToCartButton'
import Footer from '../molecules/Footer'
import PolicyDescriptionList from '../organisms/PolicyDescriptionList'
import ToIntroButton from '../atoms/button/ToIntroButton'
import ToProbabilityButton from '../atoms/button/ToProbabilityButton'
import IntroModal from './IntroModal'

import { CONTENT_WIDTH, SCREEN_WIDTH } from '../../constants/figure'
import { useState } from 'react'

type BoxInfoTemplateProps = {
    boxImage: object,
    boxName: object,
    boxPrice: object,
    boxDetail: object,
    boxItems: object,
}

const BoxInfoTemplate = (props: BoxInfoTemplateProps) => {
    const [introModalVisible, setIntroModalVisible] = useState<boolean>(false);
    return (
        <View style={styles.screen}>
            <IntroModal modalVisible={introModalVisible} setModalVisible={setIntroModalVisible}></IntroModal>
            <ScrollView>
                {/* 박스 대표 이미지 */}
                <View style={styles.boxImageContainer}>
                    {props.boxImage}
                </View>

                {/* Content Container */}
                <View style={styles.contentContainer}>
                    {/* 박스명 */}
                    <View style={styles.boxNameContainer}>
                        {props.boxName}
                    </View>

                    {/* 박스가격 */}
                    <View style={styles.boxPriceContainer}>
                        {props.boxPrice}
                    </View>

                    {/* 박스소개 (제목) */}
                    <View style={styles.subTitleContainer}>
                        <SubTitle
                            content={'이 박스는요'}
                        />
                    </View>

                    {/* 박스소개 */}
                    <View style={styles.boxDetailContainer}>
                        {props.boxDetail}
                    </View>

                    {/* 구성상품 (제목) */}
                    <View style={styles.subTitleContainer}>
                        <SubTitle
                            content='구성상품'
                        />
                    </View>

                    {/* 구성상품 */}
                    <View style={styles.boxItemContainer}>
                        {props.boxItems}
                    </View>
                </View>
                
                {/* 언박싱 인트로 이동 버튼 */}
                <ToIntroButton setModalVisible={setIntroModalVisible}/>

                {/* 자세한 확률 알아보기 버튼 */}
                <View style={styles.probButtonContainer}>
                    <ToProbabilityButton />
                </View>

                {/* 안내사항 */}
                <View style={styles.policyContainer}>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    boxImageContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
    },
    contentContainer: {
        width: CONTENT_WIDTH,
        alignSelf: 'center',
    },
    boxNameContainer: {
        marginTop: 26,
    },
    boxPriceContainer: {
        marginTop: 5,
    },
    subTitleContainer: {
        marginTop: 26,  
    },
    boxDetailContainer: {
        marginTop: 4,
    },
    boxItemContainer: {
        marginTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    probButtonContainer: {
        marginTop: 13,
    },
    policyContainer: {
        marginTop: 31,
    }
})