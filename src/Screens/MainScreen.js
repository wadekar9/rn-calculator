import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { RootContext } from '../Context/RootContext';
import CommonButton from '../Components/CommonButton';
import ThemeModeButton from '../Components/ThemeModeButton';
import RootContainer from '../Components/RootContainer';
import React, { useContext, useState, useReducer } from 'react'

const MainScreen = () => {

  const { isDarkMode } = useContext(RootContext);
  
  return (
    <RootContainer>
      <View style={{flex : 0.07,alignItems:'center',justifyContent:'center'}}>
        <ThemeModeButton />
      </View>
      <View style={{flex : 0.93}}>
        <View style={{flex : 0.25,backgroundColor:'green'}}>

        </View>
        <View style={{flex : 0.75,backgroundColor:'red'}}>

        </View>
      </View>
    </RootContainer>
  )
}

export default MainScreen

const styles = StyleSheet.create({})