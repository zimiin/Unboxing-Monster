import {
  ImageSourcePropType, requireNativeComponent,
} from 'react-native'

export const IMAGES: { [k: string]: ImageSourcePropType } = {
  teamName: require('assets/images/team_name.png'),
  logo: require('assets/images/logo.png'),
  btn_next: require('assets/images/btn_next.png'),
  btn_prev: require('assets/images/btn_prev.png'),
  close_modal: require('assets/images/btn_close.png'),
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
}

export const defaultBox = "https://user-images.githubusercontent.com/45932570/128672505-7b277913-a1e1-4b25-be16-07dee659a263.png"