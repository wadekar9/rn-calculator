import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react';
import { Colors, moderateScale } from '../Config/Theme';
import { RootContext } from '../Context/RootContext';
import { SunIcon, MoonIcon } from '../Assets/Icons/index';

const ThemeModeButton = () => {

  const { isDarkMode, setIsDarkMode } = useContext(RootContext);

  const toggalSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityRole={'button'}
      onPress={() => toggalSwitch()}
      style={[ styles.switchButtonContainer, { backgroundColor: isDarkMode ? Colors.DARK_BUTTON_LOW : Colors.WHITE} ]}
    >
      <View
        style={{
          ...styles.indicator,
          alignSelf : isDarkMode ? 'flex-start' : 'flex-end',
          left : isDarkMode ? moderateScale(4.5) : undefined,
          right : isDarkMode ? undefined : moderateScale(4.5)
        }}
        />
      {
        isDarkMode ?
          <View style={{ alignSelf: 'flex-end', ...styles.iconContainer }}>
            <MoonIcon />
          </View>
          :
          <View style={{ alignSelf: 'flex-start', ...styles.iconContainer }}>
            <SunIcon />
          </View>
      }
    </TouchableOpacity>
  )
}

export default ThemeModeButton

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    backgroundColor: Colors.PRIMARY_BUTTON,
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    zIndex : 1000
  },
  switchButtonContainer: {
    width: moderateScale(72),
    height: moderateScale(32),
    borderRadius: moderateScale(16),
    justifyContent : 'center',
    paddingHorizontal: moderateScale(4.5),
    overflow: 'hidden'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})