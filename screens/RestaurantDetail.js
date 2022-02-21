import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
