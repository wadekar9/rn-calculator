import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native'
import { Colors } from '../Config/Theme';
import { RootContext } from '../Context/RootContext';
import React, { useContext } from 'react'

const RootContainer = ({children}) => {

    const { isDarkMode } = useContext(RootContext);

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            {/* <StatusBar
                style={'dark'}
                animated
                backgroundColor={isDarkMode ? Colors.SECONDARY_BACKGROUND : Colors.PRIMARY_BACKGROUND}    
                // translucent
            /> */}
            <View style={{ height : StatusBar.currentHeight }} />
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? Colors.SECONDARY_BACKGROUND : Colors.PRIMARY_BACKGROUND
                }}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}

export default RootContainer

const styles = StyleSheet.create({})