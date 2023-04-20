import React, { Suspense } from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

const HomeLoader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image></Image>
      <View style={styles.wrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <Button
        style={{ marginTop: 20 }}
        buttonColor="#000"
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Connexion
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE600",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    objectFit: "contain",
    width: 300,
    height: 300,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 350,
    height: 300,
    backgroundColor: "#fff",
  },
});

export default HomeLoader;
