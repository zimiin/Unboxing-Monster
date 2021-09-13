import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, NavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Item } from '@constants/types'

// Root Stack
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>,
  Main: undefined,
  Open: NavigatorScreenParams<OpenStackParamList>,
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
  Splash: undefined,
  Login: undefined,
  SignUpEmailInput: undefined,
  SignUpPhoneInput: undefined,
  SignUpPhoneConfirmInput: undefined,
  SignUpNicknameInput: undefined,
  LoginRequest: undefined,
}

export type SplashNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, 'Splash'>,
  StackNavigationProp<RootStackParamList, 'Auth'>
>
export type SplashRouteProp = RouteProp<AuthStackParamList, 'Splash'>
export type SplashProps = {
  route: SplashRouteProp,
  navigation: SplashNavigationProp
}

export type LoginNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, 'Login'>,
  StackNavigationProp<RootStackParamList, 'Auth'>
>
export type LoginRouteProp = RouteProp<AuthStackParamList, 'Login'>
export type LoginProps = {
  route: LoginRouteProp,
  navigation: LoginNavigationProp
}

export type SignUpEmailInputRouteProp = RouteProp<AuthStackParamList, 'SignUpEmailInput'>
export type SignUpEmailInputNavigationProp = NavigationProp<AuthStackParamList, 'SignUpEmailInput'>
export type SignUpEmailInputProps = {
  route: SignUpEmailInputRouteProp,
  navigation: SignUpEmailInputNavigationProp,
}

export type SignUpPhoneInputRouteProp = RouteProp<AuthStackParamList, 'SignUpPhoneInput'>
export type SignUpPhoneInputNavigationProp = NavigationProp<AuthStackParamList, 'SignUpPhoneInput'>
export type SignUpPhoneInputProps = {
  route: SignUpPhoneInputRouteProp,
  navigation: SignUpPhoneInputNavigationProp,
}

export type SignUpPhoneConfirmInputRouteProp = RouteProp<AuthStackParamList, 'SignUpPhoneConfirmInput'>
export type SignUpPhoneConfirmInputNavigationProp = NavigationProp<AuthStackParamList, 'SignUpPhoneConfirmInput'>
export type SignUpPhoneConfirmInputProps = {
  route: SignUpPhoneConfirmInputRouteProp,
  navigation: SignUpPhoneConfirmInputNavigationProp,
}

export type SignUpNicknameInputRouteProp = RouteProp<AuthStackParamList, 'SignUpNicknameInput'>
export type SignUpNicknameInputNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, 'SignUpNicknameInput'>,
  StackNavigationProp<RootStackParamList, 'Auth'>
>
export type SignUpNicknameInputProps = {
  route: SignUpNicknameInputRouteProp,
  navigation: SignUpNicknameInputNavigationProp,
}

export type LoginRequestRouteProp = RouteProp<AuthStackParamList, 'LoginRequest'>
export type LoginRequestNavigationProp = StackNavigationProp<AuthStackParamList, 'LoginRequest'>
export type LoginRequestProps = {
  route: LoginRequestRouteProp,
  navigation: LoginRequestNavigationProp
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
  ItemInfo: { itemId: number, itemImage: string, itemTitle: string, itemPrice: number, itemDetail: string}
  ProbInfo: { boxId: number, boxPrice: number, items: Item[]}
  AddToCart: { boxId: number }
  Search: undefined
  Cart: undefined
  Payment: undefined
  PaymentComplete: { paymentId: number }
}

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>
export type HomeRouteProp = RouteProp<HomeStackParamList, 'Home'>
export type HomeProps = {
  route: HomeRouteProp,
  navigation: HomeNavigationProp
}

export type BoxInfoNavigationProp = StackNavigationProp<HomeStackParamList, 'BoxInfo'>
export type BoxInfoRouteProp = RouteProp<HomeStackParamList, 'BoxInfo'>
export type BoxInfoProps = {
  route: BoxInfoRouteProp
  navigation: BoxInfoNavigationProp
}

export type ItemInfoNavigationProp = StackNavigationProp<HomeStackParamList, 'ItemInfo'>
export type ItemInfoRouteProp = RouteProp<HomeStackParamList, 'ItemInfo'>
export type ItemInfoProps = {
  route: ItemInfoRouteProp
  navigation: ItemInfoNavigationProp
}

export type ProbInfoNavigationProp = StackNavigationProp<HomeStackParamList, 'ProbInfo'>
export type ProbInfoRouteProp = RouteProp<HomeStackParamList, 'ProbInfo'>
export type ProbInfoProps = {
  route: ProbInfoRouteProp
  navigation: ProbInfoNavigationProp
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

// CustomBox Stack
export type CustomBoxStackParamList = {
  CustomBoxInit: undefined,
  BoxMakingStep1: undefined,
  BoxMakingStep2: undefined,
  BoxMakingStep3: undefined,
  MyCustomBox: undefined,
}

export type CustomBoxInitRouteProp = RouteProp<CustomBoxStackParamList, 'CustomBoxInit'>
export type CustomBoxInitNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CustomBoxStackParamList, 'CustomBoxInit'>,
  CompositeNavigationProp<
    StackNavigationProp<BottomTabParamList, 'CustomBox'>,
    StackNavigationProp<RootStackParamList, 'Main'>
  >
>
export type CustomBoxInitProps = {
  route: CustomBoxInitRouteProp,
  navigation: CustomBoxInitNavigationProp
}

export type BoxMakingStep1RouteProp = RouteProp<CustomBoxStackParamList, 'BoxMakingStep1'>
export type BoxMakingStep1NavigationProp = StackNavigationProp<CustomBoxStackParamList, 'BoxMakingStep1'>
export type BoxMakingStep1Props = {
  route: BoxMakingStep1RouteProp,
  navigation: BoxMakingStep1NavigationProp
}

export type BoxMakingStep2RouteProp = RouteProp<CustomBoxStackParamList, 'BoxMakingStep2'>
export type BoxMakingStep2NavigationProp = StackNavigationProp<CustomBoxStackParamList, 'BoxMakingStep2'>
export type BoxMakingStep2Props = {
  route: BoxMakingStep2RouteProp,
  navigation: BoxMakingStep2NavigationProp
}

export type BoxMakingStep3RouteProp = RouteProp<CustomBoxStackParamList, 'BoxMakingStep3'>
export type BoxMakingStep3NavigationProp = StackNavigationProp<CustomBoxStackParamList, 'BoxMakingStep3'>
export type BoxMakingStep3Props = {
  route: BoxMakingStep3RouteProp,
  navigation: BoxMakingStep3NavigationProp
}

export type MyCustomBoxRouteProp = RouteProp<CustomBoxStackParamList, 'MyCustomBox'>
export type MyCustomBoxNavigationProp = StackNavigationProp<CustomBoxStackParamList, 'MyCustomBox'>
export type MyCustomBoxProps = {
  route: MyCustomBoxRouteProp,
  navigation: MyCustomBoxNavigationProp
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

// MyPage Stack
export type MyPageStackParamList = {
  MyPage: undefined,
}

export type MyPageNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MyPageStackParamList, 'MyPage'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, 'MyPage'>,
    StackNavigationProp<RootStackParamList, 'Main'>
  >
>
export type MyPageRouteProp = RouteProp<MyPageStackParamList, 'MyPage'>
export type MyPageProps = {
  route: MyPageRouteProp,
  navigation: MyPageNavigationProp
}

// Open Stack
export type OpenStackParamList = {
  Loading: { boxId: number, count: number },
  Opening: { result: number[] },
  OpenResult: { result: number[] }
}

export type LoadingNavigationProp = CompositeNavigationProp<
  StackNavigationProp<OpenStackParamList, 'Loading'>,
  StackNavigationProp<RootStackParamList, 'Open'>
>
export type LoadingRouteProp = RouteProp<OpenStackParamList, 'Loading'>
export type LoadingProps = {
  route: LoadingRouteProp
  navigation: LoadingNavigationProp
}

export type OpeningNavigationProp = StackNavigationProp<OpenStackParamList, 'Opening'>
export type OpeningRouteProp = RouteProp<OpenStackParamList, 'Opening'>
export type OpeningProps = {
  route: OpeningRouteProp
  navigation: OpeningNavigationProp
}

export type OpenResultNavigationProp = CompositeNavigationProp<
  StackNavigationProp<OpenStackParamList, 'OpenResult'>,
  StackNavigationProp<RootStackParamList, 'Open'>
>
export type OpenResultRouteProp = RouteProp<OpenStackParamList, 'OpenResult'>
export type OpenResultProps = {
  route: OpenResultRouteProp
  navigation: OpenResultNavigationProp
}