import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import NoticeBoard from './NoticeBoard';
import Scroller from './Scroller';
import HotBoxList from './HotBoxList';
import CustomBoxList from './CustomBoxList';
import BoxProductList from './BoxProductList';

const Home = () => {
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


