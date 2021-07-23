import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// 회원가입 처리하기

const Register = () => {
    const [userName, setUserName] = useState('손');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');

    const register = () => {
        console.log('register!!');
    };

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {userName != '' ? (
                    <Text style={styles.greeting}>
                        {userName}님{'\n'}
                        반갑습니다.
                    </Text>
                ) : null}
                
                <View style={styles.section}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="닉네임 (2~10자, 특수문자 불포함)"
                        onChangeText={(UserName) => {
                            if(UserName === '') {
                                setUserName('손');
                            } else {
                                setUserName(UserName)
                            }
                        }}
                        keyboardType="default"
                    />
                </View>

                <View style={styles.section}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="이메일"
                        onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.section}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="핸드폰번호"
                        onChangeText={(UserPhone) => setUserPhone(UserPhone)}
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.section}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="비밀번호"
                        onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.section}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="비밀번호 확인"
                        onChangeText={(UserPasswordConfirm) => setUserPasswordConfirm(UserPasswordConfirm)}
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.section}>
                    <TouchableOpacity 
                        style={{alignItems: 'center'}}
                        onPress={register}
                    >
                        <Text>회원가입하기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mediumturquoise',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    greeting: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
    },
    section: {
        marginTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#1c1c1c',
        borderRadius: 30,
    },
    inputBox: {
        color: '#1c1c1c',
    }
});