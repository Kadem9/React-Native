import { View, Text, StyleSheet } from "react-native";

const Camera = () => {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Camera;
