import { StyleSheet } from "react-native";
import React from "react";
import Login from "./auth/login";
import { View } from "@/components/View";
import Home from "./mainLayout/home";

const Welcome = () => {
  return (
    <View>
      <Login />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
