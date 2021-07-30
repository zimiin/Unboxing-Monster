import React, { useState } from 'react'
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native'

import SubTitle from '../atoms/typography/SubTitle'

import { CONTENT_WIDTH } from '../../constants/figure'
import { ICONS } from '../../constants/icons'

const PolicyDescriptionItem = ({title, description}: {title: string, description: object}) => {
    const [toggle, setToggle] = useState(false)

    const handlePress = () => {
        setToggle(!toggle)
    }

    const upIcon = (
        <Image
            source={ICONS.upArrow}
            style={styles.icon}
        />
    )

    const downIcon = (
        <Image
            source={ICONS.downArrow}
            style={styles.icon}
        />
    )

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
                onPress={handlePress}
            >
                <SubTitle
                    content={title} 
                />

                {toggle ? upIcon : downIcon}
            </TouchableOpacity>
            
            {toggle ? (
                <View style={styles.descriptionContainer}>
                    {description}
                </View>
            ) : null}
        </View>
    );
}

export default PolicyDescriptionItem

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
    },
    descriptionContainer: {
        marginTop: 8,
    }
})
