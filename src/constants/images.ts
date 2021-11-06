import {
  ImageSourcePropType, requireNativeComponent,
} from 'react-native'

export const IMAGES: { [k: string]: ImageSourcePropType } = {
  teamName: require('assets/images/team_name.png'),
  logo: require('assets/images/logo.png'),
  btn_next: require('assets/images/btn_next.png'),
  btn_prev: require('assets/images/btn_prev.png'),
  close_modal: require('assets/images/btn_close.png'),
  tutorial_welcome: require('assets/images/Welcome.png'),
  tutorial_bow: require('assets/images/bow.png'),
  tutorial_01: require('assets/images/img_tutorial_01.png'),
  tutorial_02: require('assets/images/img_tutorial_02.png'),
  tutorial_03: require('assets/images/img_tutorial_03.png'),
  tutorial_04: require('assets/images/img_tutorial_04.png'),
  intro_01: require('assets/images/img_intro_01.png'),
  intro_02: require('assets/images/img_intro_02.png'),
  intro_03: require('assets/images/img_intro_03.png'),
  intro_04: require('assets/images/img_intro_04.png'),
  open_loading: require('assets/images/open_loading.gif'),
  unopen_box: require('assets/images/img_unbox_01.png'),
  open_box: require('assets/images/img_unbox_03.png'),
  result_box: require('assets/images/img_gift_result.png'),
  notice: require('assets/images/ic_notice.png'),
  box_opening: require('assets/images/box_opening.gif'),
  img_splash: require('assets/images/img_splash.png'),
  img_custom_box_intro: require('assets/images/img_custom_box_intro.png'),
  box_price: require('assets/images/box1.png'),
  box_price_2: require('assets/images/box2.png'),
  box_price_3: require('assets/images/box3.png'),
  box_price_4: require('assets/images/box4.png'),
  check_circle: require('assets/images/check_circle.png'),
  home: require('assets/images/tabIcon/home.png'),
  home_focused: require('assets/images/tabIcon/home_blue.png'),
  customBox: require('assets/images/tabIcon/custom.png'),
  customBox_focused: require('assets/images/tabIcon/custom_blue.png'),
  storage: require('assets/images/tabIcon/storage.png'),
  storage_focused: require('assets/images/tabIcon/storage_blue.png'),
  myPage: require('assets/images/tabIcon/user.png'),
  myPage_focused: require('assets/images/tabIcon/user_blue.png'),
  info: require('assets/images/info.png'),
  downArrow: require('assets/images/down_arrow.png'),
  upArrow: require('assets/images/up_arrow.png'),
  leftArrow: require('assets/images/left_arrow.png'),
  rightArrow: require('assets/images/right_arrow.png'),
  cart: require('assets/images/cart.png'),
  search: require('assets/images/search.png'),
  xCircle: require('assets/images/x_circle.png'),
  minus: require('assets/images/btn_subtract.png'),
  plus: require('assets/images/btn_add.png'),
  checkBox_checked: require('assets/images/btn_chkbox_chkd.png'),
  checkBox_unchecked: require('assets/images/btn_chkbox.png'),
  x: require('assets/images/x.png'),
  done: require('assets/images/ic_done.png'),
  naver: require('assets/images/naver.png'),
  apple: require('assets/images/apple.png'),
  facebook: require('assets/images/facebook.png'),
  kakao_talk: require('assets/images/kakao_talk.png'),
  radio_box_chkd: require('assets/images/radio_box_chkd.png'),
  radio_box_unchkd: require('assets/images/radio_box_unchkd.png'),
  edit: require('assets/images/edit_2.png'),
  unboxingMonster: require('assets/images/unboxing_monster.png'),
  apple_white: require('assets/images/apple_white.png'),
  facebook_square: require('assets/images/facebook_square.png'),
  kakao_square: require('assets/images/kakao_square.png'),
  unboxing_logo: require('assets/images/UnboxingLogo.png'),
  poll_event: require('assets/images/poll_event.png'),
  box_making: require('assets/images/box_making.gif'),
}

export const defaultBoxUri: string = 'https://user-images.githubusercontent.com/45932570/128672505-7b277913-a1e1-4b25-be16-07dee659a263.png'
export const defaultBox: ImageSourcePropType = {uri: defaultBoxUri}

export const BOXES: string[] = [
  'https://user-images.githubusercontent.com/45932570/132882347-25678185-b1c0-4b11-a885-505f61796275.png',
  'https://user-images.githubusercontent.com/45932570/132882357-235dfdc8-8748-4164-a843-cf60d4eadf23.png' ,
  'https://user-images.githubusercontent.com/45932570/132882364-08e8b749-d5fb-496a-8aca-1b6153d22038.png',
  'https://user-images.githubusercontent.com/45932570/132882385-63dbdd85-97a5-40fd-9bb5-513564376c24.png',
  'https://user-images.githubusercontent.com/45932570/132882398-5a76660c-262f-46f7-b95a-c0fc3cb6e72e.png',
  'https://user-images.githubusercontent.com/45932570/132882415-9230ab17-8c6b-4aa2-ae73-2865deb5c4cd.png',
  'https://user-images.githubusercontent.com/45932570/132882422-b99761ff-5429-4d79-9fb5-00d4d47b1281.png',
  'https://user-images.githubusercontent.com/45932570/132882437-e4a7cb1c-d26e-486b-800e-59d705cc9ebf.png',
]

export const MANUALS: ImageSourcePropType[] = [
  require('assets/images/manual_001.png'),
  require('assets/images/manual_002.png'),
  require('assets/images/manual_003.png'),
  require('assets/images/manual_004.png'),
  require('assets/images/manual_005.png'),
  require('assets/images/manual_006.png'),
]