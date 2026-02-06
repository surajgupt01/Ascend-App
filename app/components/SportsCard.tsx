import { View, Text, Image, TouchableOpacity } from "react-native";
import { imageMap, ImageKey } from "@/constants/Imagemap";
import IconBG from "./Icons/IconBg";
import Bookmark from "./Icons/Bookmark";
import Poly from "./Icons/Poly";

export function SportsCardTitle({
  SportTitle,
  Imagesrc,
}: {
  SportTitle: string;
  Imagesrc: ImageKey;
}) {
  return (
    <View className="flex-row justify-center items-center">
      <View className="relative p-4">
        <IconBG />
        <Image
          className="w-[36px] h-[37px] absolute left-6"
          source={imageMap[Imagesrc]}
        ></Image>
      </View>
      <Text className="text-[#731300] text-[17px] font-semibold w-auto ">
        {SportTitle}
      </Text>
    </View>
  );
}

export default function SportsCard({
  Imagesrc,
  SportTitle,
  TeamA,
  TeamB,
  TeamAPercentage,
  TeamBPercentage,
}: {
  Imagesrc: ImageKey;
  SportTitle: string;
  TeamA: string;
  TeamB: string;
  TeamAPercentage: string;
  TeamBPercentage: string;
}) {
  return (
    <View className="w-[331px] h-[226px] rounded-[23px] bg-white p-4 ">
      <View className=" flex-row justify-around items-start">
        <View className="w-[70%]">
          <SportsCardTitle SportTitle={SportTitle} Imagesrc={Imagesrc} />
        </View>
        <Bookmark />
      </View>

      <View className="flex-row justify-between  w-full mt-[18px]  ">
        <View className="gap-2">
          <Text className="text-[#430B00] text-[14px] font-semibold">
            {TeamA}
          </Text>
          <Text className="text-[#F35233] text-[20px] font-bold">
            {TeamAPercentage}
          </Text>
          <Text className="text-[#430B00] text-[14px] font-semibold">
            {TeamB}
          </Text>
          <Text className="text-[#F35233] text-[20px] font-bold">
            {TeamBPercentage}
          </Text>
        </View>
        <View className="flex-col justify-end gap-2 items-end">
          <TouchableOpacity className="bg-[#F35233] px-[22px] py-[8px] flex justify-center items-center h-[40px] w-[110px] rounded-full">
            <Text className="text-white text-[14px] font-medium">Trade</Text>
          </TouchableOpacity>
          <Text className="text-[12px] text-gray-300 ">
            synced with{" "}
            <Text className="font-semibold text-[16px]">Kalshi</Text> <Poly />{" "}
            Ploymarket
          </Text>
        </View>
      </View>
    </View>
  );
}
