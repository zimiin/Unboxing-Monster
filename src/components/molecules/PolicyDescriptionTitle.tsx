import React, { useState } from 'react'
import {
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import SubTitle from '../atoms/typography/SubTitle'

import { CONTENT_WIDTH } from '../../constants/figure'
import { ICONS } from '../../constants/icons'

const PolicyDescriptionTitle = ({title}: {title: string}) => {
    const [toggle, setToggle] = useState(false)

    const handlePress = () => {
        setToggle(!toggle)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={handlePress}
        >
            <SubTitle
                content={title} 
            />

            {/* 눌러진 상태따라 이미지 바뀌어야함 */}
            {/* Context 문서 읽어보고, 여기서 Title에 화살표 넣을지,
            아니면 DescriptionList에 Item이란 컴포넌트 정의후, 내용을 컴포넌트로 넘겨주기 */}
            {toggle ? 
            <Image
            source={ICONS.upArrow}
            style={styles.icon}
            />:
            <Image
                source={ICONS.downArrow}
                style={styles.icon}
            />}
        </TouchableOpacity>
    );
}

export default PolicyDescriptionTitle;

const styles = StyleSheet.create({
    container: {
        width: CONTENT_WIDTH,
        paddingTop: 21,
        paddingBottom: 20,
        borderBottomColor: 'rgba(6, 6, 6, 0.15)',
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 0,
    }
})
