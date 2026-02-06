import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import NavBar from "../components/NavBar";
import "../../global.css";
import { LinearGradient } from "expo-linear-gradient";
import Nav from "../components/TopNav";

export default function TabsLayout() {
  return (
    <LinearGradient
      colors={[
        "#FFDAD3",
        "#FFDAD3",
        "#FFDBD4",
        "#FFDDD6",
        "#FEDFD9",
        "#FEE1DC",
        "#FDE5E0",
        "#FDE8E4",
        "#FCECE9",
        "#FCEFED",
        "#FBF3F1",
        "#FBF5F4",
        "#FAF7F7",
        "#FAF9F9",
        "#FAFAFA",
        "#FAFAFA",
      ]}
      locations={[
        0, 0.0667, 0.1333, 0.2, 0.2667, 0.3333, 0.4, 0.4667, 0.5333, 0.6,
        0.6667, 0.7333, 0.8, 0.8667, 0.9333, 1,
      ]}
    >
      <Nav />

      <View style={styles.container}>
        <View style={styles.content}>
          <Slot />
        </View>

        <NavBar />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: "visible", 
  },
});
