import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo, useContext } from 'react'
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { RootContext } from '../Context/RootContext';

const CommonButton = ({ data, onPress }) => {

  const { isDarkMode } = useContext(RootContext);
  const { symbol, icon1, icon2, isIcon, bgColor1, bgColor2, isOperator, buttonAction } = data

  const DarkIcon = icon1;
  const WhiteIcon = icon2;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={'commonButton'}
      accessibilityRole={'button'}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: isDarkMode ? bgColor1 : bgColor2,
          elevation: 1,
          shadowColor: isDarkMode ? Colors.WHITE : Colors.BLACK
        }
      ]}
    >
      {
        isIcon ? 
          (isDarkMode) ? <DarkIcon /> : <WhiteIcon />
        :
          <Text style={[styles.buttonContainerText, { color : isDarkMode ? Colors.WHITE : Colors.BLACK }]}>{symbol}</Text>
      }
    </TouchableOpacity>
  )
}

export default memo(CommonButton)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(72),
    width: moderateScale(72),
    borderRadius: moderateScale(24)
  },
  buttonContainerText : {
    fontSize : moderateScale(30),
    fontFamily : Fonts.REGULAR,
    textAlign : 'center'
  }
})