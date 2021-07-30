import React from 'react'
import { StyleSheet } from 'react-native'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import SubTitle from '../atoms/typography/SubTitle'

const BoxListItem = ({image, title, price}: {image: string, title: string, price: number}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />

                <View style={styles.name}>
                    <SubTitle content={title} />
                </View>

                <Text style={styles.price}>
                    정가 {price}원
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BoxListItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    name: {
        marginTop: 13,
    },
    price: {
        fontSize: 13,
        color: 'rgba(6, 6, 6, 0.5)',
        marginTop: 1,
    }
})