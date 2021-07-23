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

// Carousel
export type carouselItem = {
    title: string;
    body: string;
    imgUrl: string;
}

// Box Product Information
export type boxProductInfo = {
    id: number;
    image: string;
    name: string;
    price: number;
}

// Notice Information
export type noticeInfo = {
    image: string;
    url: string;
}