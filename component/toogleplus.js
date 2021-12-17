import { Fab, Box, Center, NativeBaseProvider } from "native-base"
import React from "react"
import { StyleSheet, TouchableOpacity, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { white, blue } from "../colours/colour";
export const Toogleplus = (props) => {
  return (
    <NativeBaseProvider>
      <Box position="relative" >
        <Fab
          onPress={() => props.name.navigate("Add")}
          backgroundColor={white}
          right={7}
          bottom={9}
          icon={<Icon name="plus" size={30} color={blue} />}
        />
      </Box>
    </NativeBaseProvider>
  )
}



export default Toogleplus

