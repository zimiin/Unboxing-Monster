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
    Home: undefined;
    BoxInfo: {boxId: number};
}

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;
export type HomeProps = {
    navigation: HomeNavigationProp;
}

export type BoxInfoNavigationProp = StackNavigationProp<HomeStackParamList, 'BoxInfo'>;
export type BoxInfoRouteProp = RouteProp<HomeStackParamList, 'BoxInfo'>;
export type BoxInfoProps = {
    route: BoxInfoRouteProp;
    navigation: BoxInfoNavigationProp;
}

// Box Product Information
export type boxProductInfo = {
    id: number;
    title: string;
    price: number;
    image: string;
    detail: string;
    ownerId: string;
    sales: number;
}

// Notice Information
export type noticeInfo = {
    id: number;
    imgUrl: string;
    srcUrl: string;
}