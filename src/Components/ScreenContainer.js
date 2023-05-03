import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import { RootContext } from '../Context/RootContext';
import { moderateScale, Fonts, Colors } from '../Config/Theme';

const ScreenContainer = () => {

  const { isDarkMode } = useContext(RootContext)

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
      <Text style={[styles.amountString, { color : isDarkMode ? Colors.PRIMARY_BUTTON : Colors.DARK_BUTTON_MEDIUM }]}>6291 X 5</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.amountText, { color : isDarkMode ? Colors.WHITE : Colors.BLACK }]}>1258.2</Text>
      </View>
    </View>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal : moderateScale(18)
  },
  secondContainer : {
    flex: 1,
    alignItems : 'flex-end',
    justifyContent : 'flex-end'
  },
  firstContainer : {
    flex: 1,
    alignItems : 'flex-end',
    justifyContent : 'flex-end'
  },
  amountText : {
    fontFamily : Fonts.LIGHT,
    fontSize : moderateScale(90),
    textAlign : 'right'
  },
  amountString : {
    fontFamily : Fonts.LIGHT,
    fontSize : moderateScale(40),
    textAlign : 'right'
  }
})