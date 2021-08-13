import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Root Stack
export type RootStackParamList = {
  Splash: undefined
  Auth: undefined
  Main: undefined
}

export type SplashNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>
export type SplashProps = {
  navigation: SplashNavigationProp
}

export type AuthNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>
export type AuthProps = {
  navigation: AuthNavigationProp
}

export type MainNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
export type MainProps = {
  navigation: MainNavigationProp
}

// Auth Stack
export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

export type LoginNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>
export type LoginProps = {
  navigation: LoginNavigationProp
}

export type RegisterNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>
export type RegisterProps = {
  navigation: RegisterNavigationProp
}

// Home Stack
export type HomeStackParamList = {
  Home: undefined
  BoxInfo: { boxId: number }
  AddToCart: { boxId: number }
  Search: undefined
  Cart: undefined
  Payment: undefined
  PaymentComplete: undefined
}

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>
export type HomeProps = {
  navigation: HomeNavigationProp
}

export type BoxInfoNavigationProp = StackNavigationProp<HomeStackParamList, 'BoxInfo'>
export type BoxInfoRouteProp = RouteProp<HomeStackParamList, 'BoxInfo'>
export type BoxInfoProps = {
  route: BoxInfoRouteProp
  navigation: BoxInfoNavigationProp
}

export type AddToCartNavigationProp = StackNavigationProp<HomeStackParamList, 'AddToCart'>
export type AddToCartRouteProp = RouteProp<HomeStackParamList, 'AddToCart'>
export type AddToCartProps = {
  route: AddToCartRouteProp
  navigation: AddToCartNavigationProp
}

export type SearchNavigationProp = StackNavigationProp<HomeStackParamList, 'Search'>
export type SearchProps = {
  navigation: SearchNavigationProp
}

export type CartNavigationProp = StackNavigationProp<HomeStackParamList, 'Cart'>
export type CartRouteProp = RouteProp<HomeStackParamList, 'Cart'>
export type CartProps = {
  navigation: CartNavigationProp
}

export type PaymentNavigationProp = StackNavigationProp<HomeStackParamList, 'Payment'>
export type PaymentRouteProp = RouteProp<HomeStackParamList, 'Payment'>
export type PaymentProps = {
  route: PaymentRouteProp
  navigation: PaymentNavigationProp
}

export type PaymentCompleteNavigationProp = StackNavigationProp<HomeStackParamList, 'PaymentComplete'>
export type PaymentCompleteRouteProp = RouteProp<HomeStackParamList, 'PaymentComplete'>
export type PaymentCompleteProps = {
  route: PaymentCompleteRouteProp
  navigation: PaymentCompleteNavigationProp
}