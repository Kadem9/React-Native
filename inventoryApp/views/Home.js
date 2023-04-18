import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  render();
  return (
    <View style={styles.containerFlex}>
      <View style={styles.header}>
        <View style={styles.headerImageWrapper}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
        <Image
          style={styles.navburger}
          source={require("./assets/burger-bar.png")}
        />
      </View>

      <View style={styles.alertInfo}>
        <Text style={styles.pAlert}>
          En cas de problème technique : 06.16.36.05.35
        </Text>
      </View>
      <View style={styles.secondBox}>
        <Button
          onPress={() => {
            navigation.navigate("Second");
          }}
          title="Go to second page"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
  },
  header: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFE600",
    paddingStart: 20,
    paddingEnd: 20,
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  navburger: {
    padding: 15,
    width: 50,
    height: 80,
    resizeMode: "contain",
  },
  headerImageWrapper: {
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 80,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  alertInfo: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
  secondBox: {
    flex: 6,
    backgroundColor: "#fff",
  },
  pAlert: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 18,
  },
});

export default Home;
