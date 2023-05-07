import { LayoutAnimation, StyleSheet, View } from 'react-native';
import CommonButton from '../Components/CommonButton';
import ThemeModeButton from '../Components/ThemeModeButton';
import ScreenContainer from '../Components/ScreenContainer';
import RootContainer from '../Components/RootContainer';
import React, { useState } from 'react';
import { data } from '../Config/ButtonConfigData';
import RootReducer, { intialState } from '../Config/CalculationFunctions';
import { moderateScale } from '../Config/Theme';

const MainScreen = () => {

  const [state, setState] = useState(intialState);


  const handleButton = (element) => {

    const { buttonAction, symbol } = element;
    setState(RootReducer(symbol,buttonAction,state));
  }

  console.log(state)

  return (
    <RootContainer>
      <View style={{ flex: 0.07, alignItems: 'center', justifyContent: 'center' }}>
        <ThemeModeButton />
      </View>
      <View style={{ flex: 0.93 }}>
        <View style={{ flex: 0.34,paddingRight : moderateScale(18)}}>
          <ScreenContainer screenData={state} />
        </View>
        <View style={{ flex: 0.66, justifyContent: 'space-evenly' }}>
          {
            data.map((element, index) => {
              return (
                <View key={index} style={styles.buttonContainer}>
                  {
                    element.buttons.map((item, i) => {
                      return (
                        <CommonButton
                          data={item}
                          key={i}
                          onPress={() => handleButton(item)}
                        />
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
      </View>
    </RootContainer>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // flex : 1
  }
})