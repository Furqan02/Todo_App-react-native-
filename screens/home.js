import React, { useEffect, useState } from 'react';
import { Image, ToastAndroid, Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import { useSelector } from 'react-redux'
import { blue, white } from '../colours/colour';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toogleplus from '../component/toogleplus';
import ListScreen from '../component/list';
import { deletALL, saveData } from '../store/action';
import { useDispatch } from 'react-redux';


function Home({ navigation }) {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(saveData())
  }, [])

  // REDUX
  const state = useSelector(state => state)

  // DELETE POPUP
  const Deletpopup = () => {
    if (state.todosList[0]) {
      Alert.alert(
        "Delete",
        "Are you sure you want to delete all tasks?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK", onPress: () => {
              ToastAndroid.show("Delete all todos", ToastAndroid.SHORT),
                dispatch(deletALL())
            }
          }
        ]
      );
    } else {
      Alert.alert(
        "Delete",
        "No have any tasks",
        [
          {
            text: "OK",
          }
        ]
      );
    }
  }


  const [spalishScreen, setspalishScreen] = useState(true)
  useEffect(() => {
    setTimeout(() => { setspalishScreen(false) }, 2000);
  }, []);

  if (spalishScreen) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: blue }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 45, color: white, fontWeight: 'bold', fontFamily: 'serif' }}>TODO APP</Text>
          <Image style={{ width: 60, height: 60 }} source={require('../assets/images/icon.png')} />
        </View>
      </View>
    )
  }
  return (

    <View style={{ flex: 1, }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text>                </Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: blue }}>TODOS LIST</Text>
        </View>
        <View>
          <Icon.Button backgroundColor="white" name="delete" size={30} color={blue} onPress={Deletpopup} />
        </View>
      </View>

      {/* BODY */}
      <ImageBackground style={{ flex: 1, height: 600 }} source={require('../assets/images/background.jpg')} resizeMode="cover">

        {state.todosList[0] ? <ListScreen name={navigation} /> : <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, marginTop: 35 }}>No have any task</Text>}


        {/* ADD NEW LIST BTN */}
        <Toogleplus name={navigation} />
      </ImageBackground  >
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
