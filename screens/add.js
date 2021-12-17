import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { blue, white } from '../colours/colour';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { saveData } from '../store/action'
import { useSelector } from 'react-redux';
import { AsyncStorage } from "react-native"

function Add({ navigation }) {

  const [text, settext] = useState("")
  const dispath = useDispatch()

  function sendText() {
    inputValue = {
      text: text,
      complete: false
    }
    dispath(saveData(inputValue))

  }

  return (
    <View style={{ flex: 1, }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Icon.Button onPress={() => navigation.navigate("Home")} backgroundColor={white} name="arrow-back" size={30} color={blue} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: blue, fontFamily: 'serif', }}>ADD YOUR TASK</Text>
        </View>
        <View>
          <Text>              </Text>
        </View>
      </View>

      {/* BODY */}
      <ImageBackground style={{ flex: 1, height: 600 }} source={require('../assets/images/background.jpg')} resizeMode='cover' >

        <View style={styles.addtodo}>
          <TextInput onChangeText={(text) => settext(text)} autoFocus={true} placeholder="Write your task" style={{ borderBottomColor: white, color: white, borderBottomWidth: 3, margin: 14, fontSize: 19, borderRadius: 2, }} />

          <TouchableOpacity onPress={() => { navigation.navigate("Home"), sendText() }} activeOpacity={0.8} style={{
            backgroundColor: white,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            margin: 14,
            height: 45
          }}>
            <Text style={{ color: blue, fontWeight: "700", fontSize: 18, }} >SUBMIT</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>


    </View>


  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingRight: 15,
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
  addtodo: {
    paddingHorizontal: 12,
    paddingTop: 120

  }
});

export default Add;
