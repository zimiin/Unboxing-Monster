import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Root Stack
export type RootStackParamList = {
  Splash: undefined,
  Auth: undefined,
  Main: undefined,
  Open: NavigatorScreenParams<OpenStackParamList>,
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

export type OpenNavigationProp = StackNavigationProp<RootStackParamList, 'Open'>
export type OpenProps = {
  navigation: OpenNavigationProp
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

// Bottom Tab
export type BottomTabParamList = {
  Home: undefined,
  CustomBox: undefined,
  Storage: undefined,
  MyPage: undefined
}

export type HomeTabNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>
export type HomeTabRouteProp = RouteProp<BottomTabParamList, 'Home'>
export type HomeTabProps = {
  route: HomeTabRouteProp,
  navigation: HomeTabNavigationProp
}

export type CustomBoxTabNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'CustomBox'>
export type CustomBoxTabRouteProp = RouteProp<BottomTabParamList, 'CustomBox'>
export type CustomBoxTabProps = {
  route: CustomBoxTabRouteProp,
  navigation: CustomBoxTabNavigationProp
}

export type StorageTabNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Storage'>
export type StorageTabRouteProp = RouteProp<BottomTabParamList, 'Storage'>
export type StorageTabProps = {
  route: StorageTabRouteProp,
  navigation: StorageTabNavigationProp
}

export type MyPageTabNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'MyPage'>
export type MyPageTabRouteProp = RouteProp<BottomTabParamList, 'MyPage'>
export type MyPageTabProps = {
  route: MyPageTabRouteProp,
  navigation: MyPageTabNavigationProp
}

// Home Stack
export type HomeStackParamList = {
  Home: undefined
  BoxInfo: { boxId: number }
  AddToCart: { boxId: number }
  Search: undefined
  Cart: undefined
  Payment: undefined
  PaymentComplete: { paymentId: number }
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

export type PaymentCompleteNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'PaymentComplete'>,
  BottomTabNavigationProp<BottomTabParamList, 'Home'>
>
export type PaymentCompleteRouteProp = RouteProp<HomeStackParamList, 'PaymentComplete'>
export type PaymentCompleteProps = {
  route: PaymentCompleteRouteProp
  navigation: PaymentCompleteNavigationProp
}

// Storage Stack
export type StorageStackParamList = {
  Storage: undefined,
}

export type StorageNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StorageStackParamList, 'Storage'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, 'Storage'>,
    StackNavigationProp<RootStackParamList, 'Main'>
  >
>
export type StorageRouteProp = RouteProp<StorageStackParamList, 'Storage'>
export type StorageProps = {
  route: StorageRouteProp,
  navigation: StorageNavigationProp
}

// Open Stack
export type OpenStackParamList = {
  Loading: { boxId: number, count: number },
}

export type LoadingNavigationProp = StackNavigationProp<OpenStackParamList, 'Loading'>
export type LoadingRouteProp = RouteProp<OpenStackParamList, 'Loading'>
export type LoadingProps = {
  route: LoadingRouteProp
  navigation: LoadingNavigationProp
}