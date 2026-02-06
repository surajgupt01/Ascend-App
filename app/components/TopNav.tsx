import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import Trophy from "./Icons/Trophy";
import ChartBar from "./Icons/Chartbar";
import { router } from "expo-router";
export default function Nav() {
  const subSections: string[] = [
    "Bookmarked",
    "Trending",
    "New All",
    "Politics",
    "Sports",
    "Culture",
    "Crypto",
    "Climate",
    "Economics",
    "Mentions",
    "Companies",
    "Financial",
    "Tech & Science",
  ];
  return (
    <View>
      <View className="flex-row p-[16px] justify-between items-center bg-transparent top-[20px]">
        <Image
          source={require("../../assets/images/icon-v2.png")}
          className="w-[28px] h-[28px] rounded-[6.13px]"
        />

        <TouchableOpacity
          className="bg-white gap-[4px] rounded-[8px] flex-row items-center p-[6px] h-[30px]"
          onPress={() => router.replace("/Market")}
        >
          <ChartBar />
          <Text className="font-semibold text-[#6B4841] text-[14px]">
            Markets
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="gap-[4px] flex-row items-center p-[6px] h-[30px]">
          <Trophy />
          <Text className="font-semibold text-[#6B4841] text-[14px]">
            Leaderboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#F35233] px-[12px] h-[34px] rounded-full justify-center items-center">
          <Text className="text-white text-[13px] font-medium">Deposit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={subSections}
        className=" flex-grow-0"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="m-[14px] flex-row gap-2  h-6 ">
            <TouchableOpacity>
              <Text className="text-[#6B4841] text-[12px]">{item}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
