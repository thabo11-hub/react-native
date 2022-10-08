import { StatusBar } from "expo-status-bar";
import Task from './components/Task';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/*todays todo*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTittle}>Today's task</Text>

        <View style={styles.items}>
          {/*This is where the tasks will go*/}
          <Task />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    padding:80,
    paddingHorizontal:20,

  },
  sectionTittle: {
    fontSize:24,
    fontWeight: "bold",
  },
  items: {
  },
});
