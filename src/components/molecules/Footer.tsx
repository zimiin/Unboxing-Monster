import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native'

import { IMAGES } from '@constants/images'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Image
                source={IMAGES.teamName}
                style={styles.teamName}
            />

            <Text style={styles.text}>
                상호명 : 꾸러기원정대   대표 : 한일석{'\n'}
                개인정보담당자 : 오선식{'\n'}
                통신판매업신고 : 2000-서울어디-0000호{'\n'}
                사업자등록번호 : 209-99-99999 [사업자정보확인]{'\n'}
                사업장소재지 : 선릉역 아남타워{'\n'}
                E-mail : unboxing@gmail.com{'\n'}
                Copyright @ unboxing  All rights reserved.
            </Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dee3e5',
        paddingTop: 33,
        paddingLeft: 24,
        paddingBottom: 27,
    },
    teamName: {
        width: 99,
        height: 15,
    },
    text: {
        fontSize: 12,
        color: 'rgba(6, 6, 6, 0.5)',
        lineHeight: 20,
        marginTop: 16,
    }
})
