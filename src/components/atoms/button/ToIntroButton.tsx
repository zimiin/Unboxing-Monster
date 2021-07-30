import React from 'react'
import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

import { ICONS } from '../../../constants/icons'

const ToIntroButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                어떻게 언박싱이 공정함을 갖나요?
            </Text>

            <Image
                source={ICONS.info}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

export default ToIntroButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: '#29a3ff',
    },
    icon: {
        width: 16,
        height: 16,
        marginLeft: 6,
    }
})