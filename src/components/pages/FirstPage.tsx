import React from 'react'
import FirstTemplate from '@components/templates/FirstTemplate'
import { FirstProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'

const FirstPage = ({route, navigation}: FirstProps) => {
  const facebookLogin = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data!.accessToken.toString())
            }
          )
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions!.toString()
          );
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  
  return (
    <FirstTemplate
      onPressLookAround={() => navigation.replace('Main')}
      onPressFacebook={facebookLogin}
    />
  )
}

export default FirstPage