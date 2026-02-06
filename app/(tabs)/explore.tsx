import { Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Back from "../components/Icons/Back";
import SportsCard from "../components/SportsCard";
import PoliticsCard from "../components/PoliticsCard";

export default function Index() {
  return (
    <View className="w-full h-full">
      {/* <Card1 /> */}

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 40,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* The Gradient Box */}
        <View className="mt-8">
          <View className="rounded-[20px] overflow-hidden border border-white/20">
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255)"]}
              className="w-[362px] h-[312px] justify-center items-center"
            >
              <SportsCard
                Imagesrc="Rugby"
                SportTitle="Super Bowl Champion 2026?"
                TeamA="Seattle Seahawks"
                TeamB="New England"
                TeamAPercentage="39%"
                TeamBPercentage="27"
              />
            </LinearGradient>
          </View>
        </View>

        {/* Individual Cards */}
        <View className="w-full h-full flex items-center gap-4">
          <View className="flex-row justify-between items-center w-full p-6">
            <Text
              className="text-[#731300] font-medium"
              style={{ fontSize: 22 }}
            >
              Politics
            </Text>
            <Back />
          </View>
          <SportsCard
            Imagesrc="Rugby"
            SportTitle="Super Bowl Champion 2026?"
            TeamA="Seattle Seahawks"
            TeamB="New England"
            TeamAPercentage="39%"
            TeamBPercentage="27"
          />
          <PoliticsCard />
          <SportsCard
            Imagesrc="Rugby"
            SportTitle="Super Bowl Champion 2026?"
            TeamA="Seattle Seahawks"
            TeamB="New England"
            TeamAPercentage="39%"
            TeamBPercentage="27"
          />
          <PoliticsCard />
        </View>
      </ScrollView>
    </View>
  );
}
