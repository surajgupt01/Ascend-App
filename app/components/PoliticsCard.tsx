import {View , Text , Image , TouchableOpacity} from "react-native"
import Bookmark from "./Icons/Bookmark";
import CircularProgress from "./Icons/Loader";
import Poly from "./Icons/Poly";

export default function PoliticsCard() {
  return (
    <View className="w-[331px] h-[226px] rounded-[23px] bg-white p-4 flex flex-col justify-between items-center">
      {/* Header */}
      <View className="flex-row justify-between items-start h-20">
        <View className="flex-row items-center">
          <View className="p-4">
            <Image
              style={{ width: 54, height: 54 }}
              source={require("../../assets/images/Eagle.png")}
            />
          </View>
          <Text className="text-[#731300] text-[17px] font-semibold w-[170px]">
            Trump-Denmark Greenland deal signed
          </Text>
        </View>
        <Bookmark />
      </View>

      {/* Bottom row */}
      <View className="flex-row justify-between items-end w-full   px-2">
        {/* Loader */}
        <CircularProgress />

        {/* Right column */}
        <View className="items-end gap-2 flex justify-end">
          <TouchableOpacity className="bg-[#F35233] h-[40px] w-[110px] rounded-full justify-center items-center">
            <Text className="text-white text-[14px] font-medium">Trade</Text>
          </TouchableOpacity>

          <Text className="text-[12px] text-gray-300 text-right">
            synced with{" "}
            <Text className="font-semibold text-[16px]">Kalshi</Text> <Poly />{" "}
            Polymarket
          </Text>
        </View>
      </View>
    </View>
  );
}
