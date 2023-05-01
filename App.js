import { useFonts } from 'expo-font';
import React from 'react';
import { RootContextProvider } from './src/Context/RootContext';
import MainScreen from './src/Screens/MainScreen';

const App = () => {

  const [fontloaded] = useFonts({
    'WorkSans-Light' : require('./src/Assets/Fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium' : require('./src/Assets/Fonts/WorkSans-Medium.ttf'),
    'WorkSans-Regular' : require('./src/Assets/Fonts/WorkSans-Regular.ttf'),
    'WorkSans-SemiBold' : require('./src/Assets/Fonts/WorkSans-SemiBold.ttf'),
  })

  if(!fontloaded) return null;

  return (
    <RootContextProvider>
        <MainScreen />
    </RootContextProvider>
  )
}

export default App;