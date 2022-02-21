import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

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

const MenuItems = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const selectedItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              fillColor="green"
              iconStyle={{ borderRadius: 0 }}
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectedItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = (props) => (
  <View style={styles.foodInfo}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 90, height: 100, borderRadius: 8 }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  foodInfo: {
    width: 240,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default MenuItems;
