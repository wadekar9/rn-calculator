import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react';
import { RootContext } from '../Context/RootContext';
import { moderateScale, Fonts, Colors } from '../Config/Theme';

const ScreenContainer = ({screenData}) => {

  const { isDarkMode } = useContext(RootContext);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={[styles.amountString, { color: isDarkMode ? Colors.PRIMARY_BUTTON : Colors.DARK_BUTTON_MEDIUM }]}>{screenData?.calculation}</Text>
      </View>
      <View style={styles.secondContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={{justifyContent:'flex-end',alignContent : 'flex-end',flexGrow : 1,alignSelf :'flex-end'}}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={false}
          accessibilityRole={'adjustable'}
          bounces={false}
          bouncesZoom={false}
        >
        <Text style={[styles.amountText, { color: isDarkMode ? Colors.WHITE : Colors.BLACK }]}>
          {screenData.entireString}
        </Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  secondContainer: {
    flex: 1
  },
  firstContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  amountText: {
    fontFamily: Fonts.LIGHT,
    fontSize: moderateScale(90),
    textAlign: 'right'
  },
  amountString: {
    fontFamily: Fonts.LIGHT,
    fontSize: moderateScale(40),
    textAlign: 'right'
  }
})


ScreenContainer.defaultProps = {
  screenData : {
    upperString : '1111',
    currentValue : '900000'
  }
}