import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BoxInfoTemplate from '../templates/BoxInfoTemplate';
import BoxInfoImage from '../atoms/BoxInfoImage'
import Title from '../atoms/typography/Title'
import BoxPriceInfo from '../atoms/BoxPriceInfo'
import Body from '../atoms/typography/Body'
import BoxListItem from '../molecules/BoxListItem';

import { BoxInfoProps } from '../../constants/navigationTypes';
import HeaderWithCart from '../organisms/header/HeaderWithCart';

interface boxItemType {
    id: number;
    title: string;
    price: number;
    image: string;
    detail: string;
}

interface dataType {
    id: number;
    title: string;
    price: number;
    image: string;
    detail: string;
    ownerId: string;
    sales: number;
    items: boxItemType[];
}

const BoxInfo = ({ route, navigation }: BoxInfoProps) => {
    const [data, setData] = useState<dataType>({
        id: route.params.boxId,
        title: '',
        price: 0,
        image: '',
        detail: '',
        ownerId: '',
        sales: 0,
        items: [],
    });

    const getBoxInfo = async (boxId: number) => {
        let url = 'http://3.37.238.160/box/' + boxId;
        let response = await fetch(url);
        if (response.status === 200) {
            let json = await response.json();
            setData(json);
        } else {
            console.log('No reponse! url:', url);
        }
    }

    useEffect(() => {
        getBoxInfo(route.params.boxId);
    }, []);

    const getItems = () => {
        return (
            data.items.map(
                (item) => {
                    return (
                        <View
                            style={styles.itemContainer}
                            key={item.id}
                        >
                            <BoxListItem 
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        </View>
                    )
                }
            )
        )
    }

    const items = getItems();

    return (
        <BoxInfoTemplate
            boxImage={<BoxInfoImage image={data.image}/>}
            boxName={<Title content={data.title}/>}
            boxPrice={<BoxPriceInfo price={data.price}/>}
            boxDetail={<Body content={data.detail}/>}
            boxItems={items}
            navigation={navigation}
        />
    );
}

export default BoxInfo;

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        width: '50%',
        marginBottom: 28,
    }
})