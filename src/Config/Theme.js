import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const Fonts = {
    LIGHT : 'WorkSans-Light',
    MEDIUM : 'WorkSans-Medium',
    REGULAR : 'WorkSans-Regular',
    SEMI_BOLD : 'WorkSans-SemiBold'
}

const Colors = {
    PRIMARY_BACKGROUND : '#F1F2F3',
    SECONDARY_BACKGROUND : '#17171C',
    PRIMARY_BUTTON : '#D2D3DA',
    PRIMARY_COLOR : '#4B5EFC',
    WHITE : '#FFFFFF',
    BLACK : '#000000',
    DARK_BUTTON_LOW : '#2E2F38',
    DARK_BUTTON_MEDIUM : '#4E505F',
}


export { scale, verticalScale, moderateScale, Fonts, Colors };