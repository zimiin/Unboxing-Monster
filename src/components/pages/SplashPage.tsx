import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { SplashProps } from "../../constants/navigationTypes";
import Logo from "../atoms/Logo";
import { scale, verticalScale } from "react-native-size-matters";
import { SCREEN_HEIGHT } from "../../constants/figure";


const Splash = ({navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimatinng(false);
      // TODO
      // 로그인 되어있을 시 바로 상품으로 이동
      navigation.replace('Main');
    }, 10000)
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

const logoPosition = SCREEN_HEIGHT * 261 / 716

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white', 
    flex: 1,
  },
  activityIndicator: {
    alignSelf: 'center',
    height: scale(80),
    position: 'absolute',
    bottom: verticalScale(130),
  },
  logo: {
    width: scale(120),
    height: scale(100),
    alignSelf: 'center',
    position: 'absolute',
    top: logoPosition,
  }
});
