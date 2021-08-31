import { Dimensions } from "react-native"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const DESIGN_WIDTH = 360
export const DESIGN_HEIGHT = 720
export const CONTENT_MARGIN = 24
export const CONTENT_WIDTH = SCREEN_WIDTH - CONTENT_MARGIN * 2
export const scale = (width: number) => width / DESIGN_WIDTH * SCREEN_WIDTH
export const verticalScale = (height: number) => height / DESIGN_HEIGHT * SCREEN_HEIGHT