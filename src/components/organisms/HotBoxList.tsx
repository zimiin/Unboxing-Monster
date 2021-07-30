import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import HorizontalBoxList from '../molecules/HorizontalBoxList'

import { boxProductInfo } from '../../constants/types'

const HotBoxList = () => {
    const [data, setData] = useState<boxProductInfo[]>([{
        id: 0,
        title: '',
        price: 0,
        image: '',
        detail: '',
        ownerId: '',
        sales: 0,
    }])

    const getBoxList = async () => {
        let url = 'http://3.37.238.160/box/'
        let response = await fetch(url)
        if (response.status === 200) {
            let json = await response.json();
            setData(json)
        } else {
            console.log('No reponse! url:', url)
        }
    }

    useEffect(() => {
        getBoxList()
    }, []);

    return (
        <View>
            <Text style={styles.title}>
                인기 박스
            </Text>
        
            <HorizontalBoxList items={data}/>
        </View>
    );
}

export default HotBoxList;

const styles = StyleSheet.create({
    title: {
        marginTop: 57,
        marginLeft: 24,
        fontSize: 18,
        fontWeight: 'bold',
    }
});