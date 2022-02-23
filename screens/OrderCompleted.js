import { View, Text, ScrollView,  } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetails/MenuItems";
import db from "../firebase";
import {
  query,
  orderBy,
  collection,
  limit,
  onSnapshot,
} from "firebase/firestore";


const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With butter lettuce,tomato and sauce bechamel",
        price: "$13.50",
        image: "https://i.ytimg.com/vi/FrdumyhYaZY/maxresdefault.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("createdAt", "desc"), limit(1));
    const snap = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        setLastOrder(doc.data());
      });
    });
    
  }, [lastOrder]);

  return (
    <View
      style={{
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          margin: 15,
        }}
      >
        <LottieView
          style={{
            height: 100,
            alignSelf: "center",
            marginBottom: 30,
          }}
          autoPlay
          speed={0.5}
          loop={false}
          source={require("../assets/animations/check-mark.json")}
        />
        <Text style ={{
          fontSize:20,
          fontWeight:"bold"
        }}>Your order at {restaurantName} has been placed for ${totalUSD}</Text>
        <ScrollView >
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{
              height: 100,
              alignSelf: "center",
              marginBottom: 30,
            }}
            autoPlay
            speed={0.5}
            source={require("../assets/animations/cooking.json")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderCompleted;
