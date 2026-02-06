import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import ExploreIcon from "./Icons/Explore";
import SearchIcon from "./Icons/SearchIcon";
import AccountIcon from "./Icons/AccountIcon";

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Pressable
        onPress={() => router.replace("/Explore")}
        className="flex justify-center items-center"
      >
        <ExploreIcon />
        <Text style={styles.text}>Home</Text>
      </Pressable>

      <Pressable
        onPress={() => router.replace("/Search")}
        className="flex justify-center items-center"
      >
        <SearchIcon />
        <Text style={styles.text}>Search</Text>
      </Pressable>

      <Pressable
        onPress={() => router.replace("/setting")}
        className="flex justify-center items-center"
      >
        <AccountIcon />
        <Text style={styles.text}>Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 10,
  },
});
