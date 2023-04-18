import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.containerFlex}>
      {/* Boxe de mon header */}
      <View style={styles.header}>
        <View style={styles.headerImageWrapper}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <Image
          style={styles.navburger}
          source={require("../assets/burger-bar.png")}
        />
      </View>

      {/* Boxe des alerts */}
      <View style={styles.alertInfo}>
        <Text style={styles.pAlert}>
          En cas de problème technique : 06.16.36.05.35
        </Text>
      </View>

      {/* Boxe des applications */}
      <View style={styles.secondBox}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Inventory");
            }}
            style={styles.box}
          >
            <Image
              source={require("../assets/appHome/010-notes.png")}
              style={styles.image}
            />
            <View style={styles.boxText}>
              <Text style={styles.boxTitle}>Inventaire</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen2");
            }}
            style={styles.boxTwo}
          >
            <Image
              source={require("../assets/appHome/024-books.png")}
              style={styles.image}
            />
            <View style={styles.boxText}>
              <Text style={styles.boxTitleTwo}>Demandes</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen3");
            }}
            style={styles.boxTwo}
          >
            <Image
              source={require("../assets/appHome/025-settings.png")}
              style={styles.image}
            />
            <View style={styles.boxText}>
              <Text style={styles.boxTitleTwo}>Paramètres</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen4");
            }}
            style={styles.box}
          >
            <Image
              source={require("../assets/appHome/018-calendar.png")}
              style={styles.image}
            />
            <View style={styles.boxText}>
              <Text style={styles.boxTitle}>Matchs</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

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
    height: 120,
    width: 120,
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
    height: 100,
    width: 140,
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
    marginTop: 10,
  },
  pAlert: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "45%",
    aspectRatio: 1,
    margin: "2.5%",
    backgroundColor: "#FFE600",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  boxTwo: {
    width: "45%",
    aspectRatio: 1,
    margin: "2.5%",
    backgroundColor: "#262626",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "60%",
    height: "70%",
    resizeMode: "contain",
  },
  boxText: {
    alignItems: "center",
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  boxTitleTwo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#fff",
  },
});
