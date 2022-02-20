import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar(props) {
  const [location, setLocation] = useState("");
  
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Insira uma localização"
        onChangeText={ newLocation => setLocation(newLocation)}
        style={{
          width: "80%",
          height:45,
          padding: 5,
          backgroundColor: "#eee",
          borderRadius: 20,
          fontWeight: "700",
          marginTop: 7,
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        }}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: "black",
          padding: 7,
          marginTop: 3,
          borderRadius: 30,
        }}
        onPress={() => props.setCity(location)}
      >
        <Text style={{ color: "white" }}>Confirm City</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
