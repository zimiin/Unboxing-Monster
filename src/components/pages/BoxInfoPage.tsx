import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import { ICONS } from '../../constants/icons';
import { BoxInfoProps } from '../../constants/types';
import AddToCartButton from '../atoms/button/AddToCartButton';
import SubTitle from '../atoms/typography/SubTitle';
import BoxInfoDetail from '../molecules/BoxInfoDetail';
import BoxItemListItem from '../atoms/BoxListItem';
import PolicyDescriptionList from '../organisms/PolicyDescriptionList';
import Footer from '../molecules/Footer';
import BoxInfoTemplate from '../templates/BoxInfoTemplate';
import BoxInfoImage from '../atoms/BoxInfoImage'
import Title from '../atoms/typography/Title'
import BoxPriceInfo from '../atoms/BoxPriceInfo'
import Body from '../atoms/typography/Body'
import { ITEM_WIDTH } from '../molecules/NoticeItem';

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
                            style={{
                                alignItems: 'center',
                                width: '50%',
                                marginBottom: 28,
                                // backgroundColor: 'red',
                            }}
                            key={item.id}
                        >
                            <BoxItemListItem 
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
        // 여기에 템플릿 추가하고
        // 컴포넌트 넘겨주기
        // 일단 타입스크립트 무시하고 진행
        <BoxInfoTemplate
            image={<BoxInfoImage image={data.image}/>}
            boxName={<Title content={data.title}/>}
            boxPrice={<BoxPriceInfo price={data.price}/>}
            boxDetail={<Body content={data.detail}/>}
            boxItems={items}
        />
    );
}

export default BoxInfo;
