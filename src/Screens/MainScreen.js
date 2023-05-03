import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CommonButton from '../Components/CommonButton';
import ThemeModeButton from '../Components/ThemeModeButton';
import ScreenContainer from '../Components/ScreenContainer';
import RootContainer from '../Components/RootContainer';
import React, { useContext, useState, useReducer } from 'react';
import { data } from '../Config/ButtonConfigData';

const MainScreen = () => {
  
  return (
    <RootContainer>
      <View style={{flex : 0.07,alignItems:'center',justifyContent:'center'}}>
        <ThemeModeButton />
      </View>
      <View style={{flex : 0.93}}>
        <View style={{flex : 0.34}}>
          <ScreenContainer />
        </View>
        <View style={{flex : 0.66,justifyContent:'space-evenly'}}>
          {
            data.map((element,index) => {
              return(
                <View key={index} style={styles.buttonContainer}>
                  {
                    element.buttons.map((item,i) => {
                      return(
                        <CommonButton data={item} key={i} />
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
  buttonContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-evenly',
    // flex : 1
  }
})