import React, { useEffect } from 'react';
import { useState } from 'react';
import { Switch, SafeAreaView, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { blue, white } from '../colours/colour';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { update, delet } from '../store/action';

function Edit({ route, navigation }) {
  // DATA
  const { key, text } = route.params;
  const [textValue, setTextvalue] = useState(text)

  // REDUX
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  // send data
  function updateData() {
    navigation.navigate("Home")
    dispatch(update(isEnabled, textValue, key))
  }
  function deletData() {
    navigation.navigate("Home")
    dispatch(delet(key))
  }

  // SWITCH
  const [isEnabled, setIsEnabled] = useState(state.todosList[key].complete);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //  console.log(isEnabled)

  return (
    <View style={{ flex: 1, }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Icon.Button onPress={() => navigation.navigate("Home")} backgroundColor={white} name="arrow-back" size={30} color={blue} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: blue }}>EDIT YOUR TODO</Text>
        </View>
        <View>
          <Text>              </Text>
        </View>
      </View>

      {/* BODY */}
      <ImageBackground style={{ flex: 1, height: 600 }} source={require('../assets/images/background.jpg')} resizeMode='cover' >


        {/* TEXTAREA */}
        <ScrollView >
          <View style={styles.addtodo}>
            <TextInput autoFocus={true} placeholder="Edit your task" onChangeText={(text) => setTextvalue(text)} value={textValue} style={{ borderBottomColor: white, color: white, borderBottomWidth: 3, margin: 14, fontSize: 19, borderRadius: 2, }} />

            {/* BTNS */}
            <View style={{ flexDirection: 'row', margin: 10 }}>

              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? white : white}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], width: 50, }}
              />
              <Text style={{ fontSize: 20, marginLeft: 7, color: !isEnabled ? '#434343' : white, fontWeight: !isEnabled ? 'normal' : 'bold', display: !isEnabled ? 'none' : 'flex' }}>Completed your task</Text>
            </View>
            <TouchableOpacity onPress={() => { updateData() }} activeOpacity={0.8} style={{
              backgroundColor: white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              margin: 10,
              height: 45
            }}>
              <Text style={{ color: blue, fontWeight: "700", fontSize: 18, }} >SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={deletData} activeOpacity={0.8} style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              margin: 10,
              height: 45
            }}>
              <Text style={{ color: white, fontWeight: "700", fontSize: 18, }} >DELETE</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>
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
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 110,
  }
});

export default Edit;
