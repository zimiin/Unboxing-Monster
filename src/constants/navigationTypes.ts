import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Root Stack
export type RootStackParamList = {
    Splash: undefined;
    Auth: undefined;
    Main: undefined;
};

export type SplashNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
export type SplashProps = {
    navigation: SplashNavigationProp;
};

export type AuthNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;
export type AuthProps = {
    navigation: AuthNavigationProp;
};

export type MainNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
export type MainProps = {
    navigation: MainNavigationProp;
}

// Auth Stack
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
}

export type LoginNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export type LoginProps = {
    navigation: LoginNavigationProp;
}

export type RegisterNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;
export type RegisterProps = {
    navigation: RegisterNavigationProp;
}

// Home Stack
export type HomeStackParamList = {
    Home: undefined
    BoxInfo: { boxId: number }
    AddToCart: { boxId: number }
    Cart: undefined
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

export type CartNavigationProp = StackNavigationProp<HomeStackParamList, 'Cart'>
export type CartRouteProp = RouteProp<HomeStackParamList, 'Cart'>
export type CartProps = {
    navigation: CartNavigationProp
}