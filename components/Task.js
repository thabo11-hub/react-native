import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemsText}>{props.text}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor:'#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor:'#55bcf6',
    opacity: 0.4,
  },
  itemsText: {},
  circular: {},
});

export default Task;
