import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import { SplashProps } from "../../constants/types";
import Logo from "../atoms/Logo";

const Splash = ({navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimatinng(false);
      // TODO
      // 로그인 되어있을 시 바로 상품으로 이동
      navigation.replace('Main');
    }, 1000)
  }, []);

  return (
      <SafeAreaView style={styles.background}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <ActivityIndicator
          animating={animating}
          color="slategray"
          size="large"
          style={styles.activityIndicator}
        />
      </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white', 
    flex: 1,
  },
  activityIndicator: {
    alignSelf: 'center',
    height: 80,
    position: 'absolute',
    bottom: 130,
  },
  logo: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
    top: 285,
  }
});
