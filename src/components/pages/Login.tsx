import React, { useState, createRef } from "react"
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import { LoginProps } from "@constants/navigationTypes"
import AsyncStorage from "@react-native-async-storage/async-storage"


const Login = ({ navigation }: LoginProps) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errorText, setErrorText] = useState('')

  const handleLoginPress = async () => {
    setErrorText('')
    if (userEmail === '') {
      setErrorText('이메일을 입력해주세요.')
      return
    }
    if (userPassword === '') {
      setErrorText('비밀번호를 입력해주세요.')
      return
    }

    let response = await fetch('http://3.37.238.160/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        pass: userPassword,
      })
    })

    let responseStatus = response.status
    let responseJson = await response.json()

    if (responseStatus === 201) {
      AsyncStorage.setItem('token', responseJson.access_token)
      AsyncStorage.setItem('user_email', responseJson.email)
      console.log(responseJson.email, 'has logged in')
    } else {
      console.log('Wrong email or password')
      setErrorText('이메일 또는 비밀번호를 확인해주세요.')
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>UNBOXING</Text>
        </View>

        <KeyboardAvoidingView enabled style={styles.inputSection}>
          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="이메일"
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          {errorText != '' ? (
            <Text style={styles.errorText}>
              {errorText}
            </Text>
          ) : null}

          <TouchableOpacity
            style={[styles.section, styles.loginButton]}
            activeOpacity={0.5}
            onPress={handleLoginPress}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Register')}>
            <Text>회원가입하기</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  titleSection: {
    marginBottom: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputSection: {
    flex: 2,
  },
  background: {
    flex: 1,
    backgroundColor: 'mediumturquoise',
  },
  section: {
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#1c1c1c',
    borderRadius: 30,
  },
  input: {
    color: '#1c1c1c',
  },
  loginButton: {
    backgroundColor: '#333333',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    margin: 3,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  }
})