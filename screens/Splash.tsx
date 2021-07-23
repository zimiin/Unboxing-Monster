import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { SplashProps } from "../types";

const Splash = ({navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimatinng(false);
      // TODO
      // 로그인 되어있을 시 바로 상품으로 이동
      navigation.replace('Main');
    }, 2000)
  }, []);

  return (
      <SafeAreaView style={styles.background}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>UNBOXING</Text>
          </View>

          <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>언박싱에 오신걸 환영합니다</Text>
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
      backgroundColor: 'mediumturquoise', 
      flex: 1,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30, 
    },
    welcomeContainer: {
      flex: 2,
      alignItems: 'center',
      padding: 15,
    },
    welcomeText: {
      fontSize: 18,
      color: 'dimgrey',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    }
});
