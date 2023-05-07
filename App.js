import { useFonts } from 'expo-font';
import { Platform, UIManager } from 'react-native';
import React from 'react';
import { RootContextProvider } from './src/Context/RootContext';
import MainScreen from './src/Screens/MainScreen';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

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

// QCF?r*qp/6h//TH
// demowodero
// wodero6345@soombo.com