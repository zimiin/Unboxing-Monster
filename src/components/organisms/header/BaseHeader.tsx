import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import BackIcon from '@components/atoms/icon/BackIcon'
import HeaderTitle from '@components/atoms/typography/HeaderTitle'
import HeaderContainer from '@components/atoms/HeaderContainer'
import { scale } from 'react-native-size-matters'

interface Props {
  canGoBack: boolean
  goBackAction?: () => void
  title?: string
  center?: React.ReactNode
  right?: React.ReactNode
}

const BaseHeader = (props: Props) => {
  return (
    <HeaderContainer>
      {/* Left Container */}
      <View style={styles.leftContainer}>
        {props.canGoBack ?
          <TouchableOpacity
            onPress={props.goBackAction}
          >
            <BackIcon />
          </TouchableOpacity>
        : null}
      </View>

      {/* Center Container */}
      <View style={styles.centerContainer}>
        <HeaderTitle content={props.title || ''} />

        {/* Center Component Container */}
        <View style={styles.centerComponentContainer}>
          {props.center}
        </View>
      </View>


      {/* Right Container */}
      <View style={styles.rightContainer}>
        {props.right}
      </View>
    </HeaderContainer>
  )
}

export default BaseHeader

const styles = StyleSheet.create({
  leftContainer: {
    paddingLeft: scale(17),
    width: scale(44),
    flexDirection: 'row',
  },
  centerContainer: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    paddingRight: scale(10),
    paddingLeft: scale(10),
    justifyContent: 'center',
  },
  centerComponentContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    width: scale(44),
    paddingRight: scale(24),
    justifyContent: 'flex-end'
  }
})
