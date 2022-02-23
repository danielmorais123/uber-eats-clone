import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce,tomato and sauce bechamel",
    price: "$13.50",
    image: "https://i.ytimg.com/vi/FrdumyhYaZY/maxresdefault.jpg",
  },
  {
    title: "Pizza",
    description: "With cheese and ham",
    price: "$45.20",
    image: "https://i.ytimg.com/vi/FrdumyhYaZY/maxresdefault.jpg",
  },
  {
    title: "Polvo",
    description: "With Legs",
    price: "$5.50",
    image: "https://i.ytimg.com/vi/FrdumyhYaZY/maxresdefault.jpg",
  },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;
