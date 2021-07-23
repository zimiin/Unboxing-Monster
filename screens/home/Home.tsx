import React from 'react';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';

import NoticeBoard from './NoticeBoard';
import Scroller from './Scroller';
import HotBoxList from './HotBoxList';
import CustomBoxList from './CustomBoxList';
import BoxProductList from './BoxProductList';

const Home = () => {
    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
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

