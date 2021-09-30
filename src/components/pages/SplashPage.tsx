import React, { useState } from "react"
import { SplashProps } from "@constants/navigationTypes"
import SplashTemplate from "@components/templates/SplashTemplate"
import { useEffect } from "react"
import { hasLoggedIn } from "@src/utils/loginUtils"

const SplashPage = ({route, navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true)

  useEffect(() => {
    hasLoggedIn().then(
      loginStatus => {
        if (loginStatus === true) {
          navigation.replace('Main')
        } else {
          navigation.replace('Login')
        }
      }
    ).catch(
      error => console.log('Error in useEffect of SplashPage', error)
    )
  }, [])

  return (
    <SplashTemplate
      animating={animating}
    />
  )
}

export default SplashPage