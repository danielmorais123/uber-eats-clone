import { View, Text, Image } from "react-native";
import React from "react";

const About = () => {
  return (
    <View>
      <RestaurantImage />
      <RestaurantTitle />
    </View>
  );
};

const RestaurantImage = (props) => (
  <Image
    source={{ uri: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg" }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const RestaurantTitle = (props) => (
  <Text style={{ fontSize: 29, fontWeight: "bold", marginTop: 10 }}>
    Farmhouse kitchen thai
  </Text>
);

export default About;
