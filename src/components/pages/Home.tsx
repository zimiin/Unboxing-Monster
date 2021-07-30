import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import NoticeBoard from '../organisms/NoticeBoard';
import Scroller from '../organisms/Scroller';
import HotBoxList from '../organisms/HotBoxList';
import CustomBoxList from '../organisms/CustomBoxList';
import BoxProductList from '../organisms/BoxProductList';

import { HomeProps } from '../../constants/types';

// TODO 여기서 데이터 넘겨주는 형태로 변경하기
const Home = ({ navigation }: {navigation: HomeProps}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <NoticeBoard />
                <Scroller />
                <HotBoxList />
                <CustomBoxList />
                <BoxProductList />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});


