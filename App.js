import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';
import Navigation from './config/navigation';
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return(
    
    <Provider store={Store}>
       <Navigation/>
    </Provider>

  )
}

const styles = StyleSheet.create({
  
});

export default App;
