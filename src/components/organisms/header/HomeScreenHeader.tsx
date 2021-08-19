import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import HeaderContainer from '@components/atoms/HeaderContainer'
import { scale } from 'react-native-size-matters'
import SearchIcon from '@components/atoms/icon/SearchIcon'
import CartIcon from '@components/atoms/icon/CartIcon'
import { SCREEN_WIDTH } from '@constants/figure'
import Badge from '@components/atoms/Badge'
import globalStyles from '@constants/globalStyles'

interface Props {
  onPressSearchBar: () => void,
  onPressCart: () => void,
  cartItemCount?: number,
}

const HomeScreenHeader = (props: Props) => {
  return (
    <HeaderContainer>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          style={styles.searchBar}
          onPress={props.onPressSearchBar}
        >
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cartButtonContainer}>
        <TouchableOpacity
          onPress={props.onPressCart}
        >
          <CartIcon />

          {props.cartItemCount ?
            <Badge
              style={globalStyles.badge}
              count={props.cartItemCount}
            />
            : null}
        </TouchableOpacity>
      </View>
    </HeaderContainer>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    paddingLeft: scale(24),
  },
  searchBar: {
    width: scale(270),
    height: 32,
    borderRadius: 18,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  searchIcon: {
    marginLeft: scale(10),
  },
  cartButtonContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 44 / 360,
  },
})
