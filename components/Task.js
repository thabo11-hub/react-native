import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemsText}>{props.text}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemsText: {
    maxHeight: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor:'#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
