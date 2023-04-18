import { StyleSheet, Text, View, Image } from "react-native";

const Inventory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Les inventaires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Inventory;
