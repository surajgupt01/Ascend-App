import { View, Text, Image, Modal, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PredictionMarketChart from "../components/ChartComponent/Chart";
import { ImageKey, imageMap } from "@/constants/Imagemap";
import IconBG from "../components/Icons/IconBg";
import Clock from "../components/Icons/Clock";
import Arrow from "../components/Icons/Arrow";
import { useState } from "react";
import LeverageSlider from "../components/Slider";

function SportsCardTitle({
  SportTitle,
  Imagesrc,
}: {
  SportTitle: string;
  Imagesrc: ImageKey;
}) {
  return (
    <View className="flex-row justify-center items-center ">
      <View className="relative p-4">
        <IconBG />
        <Image
          className="w-[36px] h-[37px] absolute left-6"
          source={imageMap[Imagesrc]}
        ></Image>
      </View>
      <View className="flex">
        <Text className="text-[#731300] text-[17px] font-semibold w-auto">
          {SportTitle}
        </Text>
        <View
          className="flex-row items-center gap-2 mt-1"
          style={{ marginLeft: 0 }}
        >
          <Text
            className="text-[#430B00] font-semibold "
            style={{ fontSize: 12 }}
          >
            United states
          </Text>
          <View className="w-1 h-1 bg-[#430B00] rounded-full"></View>
          <Text
            className="text-[#430B00] font-semibold"
            style={{ fontSize: 12 }}
          >
            Politics
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function Market() {
  const [open, setOpen] = useState(false);

  return (
    <View className="flex-1 p-2">
      <View className="rounded-[20px] w-full flex-1   overflow-hidden border border-white/20">
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
          className="w-auto p-2 flex-1"
        >
          <View className="items-start flex  ">
            <SportsCardTitle
              SportTitle="Super Bowl Champion 2026?"
              Imagesrc="Rugby"
            />
          </View>

          <View className="mt-4 w-full items-center">
            <PredictionMarketChart />
          </View>

          <TradeBottomSheet open={open} onClose={() => setOpen(false)} />

          <ScrollView
            className="p-2 "
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          >
            <LeverageChart />

            <View className="p-2 mb-2">
              <View className="flex-row items-center justify-between ">
                <View className="flex-row items-center gap-2">
                  <Image
                    className=""
                    style={{ width: 54, height: 54 }}
                    source={require("../../assets/images/Eagle.png")}
                  />
                  <Text className="bg-green-100 text-sm text-green-400 rounded-lg p-1">
                    {"Selected"}
                  </Text>
                </View>

                <View className="border border-gray-300 p-1 rounded-lg">
                  <Pressable onPress={() => setOpen(true)}>
                    <Arrow />
                  </Pressable>
                </View>
              </View>

              <View className="flex-row items-center justify-between gap-4 mt-2">
                <View className="flex justify-center">
                  <Text className="text-[#7B5A50] font-semibold">
                    {"Seattle Seahawks"}
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    {"$7,816,257 Vol."}
                  </Text>
                </View>
                <Text className="border border-gray-300 text-lg text-green-400 rounded-lg py-1 px-3">
                  {"70%"}
                </Text>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </View>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export function TradeBottomSheet({ open, onClose }: Props) {
  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      className="h-full w-full"
    >
      <Pressable
        onPress={onClose}
        className="flex-1 h-full w-full  justify-end backdrop-blur-xl bg-black/40"
      >
        <Pressable
          onPress={() => {}}
          className="bg-white rounded-[28px] px-5 pt-3 pb-6 m-4"
        >
          <View
            style={{ overflow: "visible" }}
            className="w-10 h-1 bg-gray-300 rounded-full self-center mb-3"
          />

          <Text className="text-center text-xs text-orange-400 mb-3">
            ZK-shielded by midnight
          </Text>

          <View className="p-2">
            <View className="flex-row items-center justify-between ">
              <View className="flex-row items-center gap-2">
                <Image
                  className=""
                  style={{ width: 54, height: 54 }}
                  source={require("../../assets/images/Eagle.png")}
                />
                <Text className="bg-green-100 text-sm text-green-400 rounded-lg p-1">
                  {"Selected"}
                </Text>
              </View>

              <View className="border border-gray-300 p-1 rounded-lg">
                <Pressable onPress={onClose}>
                  <View className="rotate-180">
                    <Arrow />
                  </View>
                </Pressable>
              </View>
            </View>

            <View className="flex-row items-center justify-between gap-4 mt-2">
              <View className="flex justify-center">
                <Text className="text-[#7B5A50] font-semibold">
                  {"Seattle Seahawks"}
                </Text>
                <Text className="text-gray-400 text-sm">
                  {"$7,816,257 Vol."}
                </Text>
              </View>
              <Text className="border border-gray-300 text-lg text-green-400 rounded-lg py-1 px-3">
                {"70%"}
              </Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-2xl p-4 mb-4">
            <Text className="text-gray-400 text-sm mb-1">Amount</Text>

            <View className="flex-row items-center justify-between">
              <Text className="text-gray-400">$</Text>
              <Text className="text-3xl font-semibold">$0</Text>
            </View>

            <View className="flex-row gap-2 mt-3">
              {["$1", "$20", "$100", "Max"].map((v) => (
                <View
                  key={v}
                  className="px-3 py-1 border border-gray-200 rounded-lg"
                >
                  <Text>{v}</Text>
                </View>
              ))}
            </View>
          </View>

          <LeverageSlider />

          <View className="flex-row gap-3 mb-4">
            <View className="flex-1 bg-green-500 py-3 rounded-full">
              <Text className="text-white text-center font-semibold">Long</Text>
            </View>

            <View className="flex-1 bg-red-100 py-3 rounded-full">
              <Text className="text-red-500 text-center font-semibold">
                Short
              </Text>
            </View>
          </View>

          <View className="border-t border-gray-100 pt-3">
            <View className="flex-row justify-between mb-1">
              <Text className="text-gray-400">Fee</Text>
              <Text className="text-orange-400">0.5 USDT</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="font-semibold">PnL</Text>
              <Text className="text-green-500 font-semibold">$0.0</Text>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function LeverageChart() {
  return (
    <View className="w-full flex justify-center">
      <View className="flex-row justify-center items-center w-full mt-4 ">
        <Text className="text-[#E8A894]">{"ZK-shielded by "}</Text>
        <Clock />
        <Text className="text-[#E8A894]">{" midnight"}</Text>
      </View>

      <View className="w-full p-2 mt-8">
        <Text className="text-[#7B5A50] font-semibold">
          {"Super Bowl Champion 2026"}
        </Text>
        <View className="flex-row items-center gap-4 mt-1">
          <Text className="bg-green-100 text-sm text-green-400 rounded-lg p-1">
            {"Long"}
          </Text>
          <Text className="text-gray-400 text-sm">{"$7,816,257 Vol."}</Text>
        </View>

        <LeverageSlider />

        <View>
          <View className="bg-white rounded-[20px] px-4 py-4 shadow-md shadow-black/5 ">
            {/* Header Row */}
            <View className="mb-2 flex-row justify-between items-start">
              <View className="flex-col justify-center gap-2">
                <Text className="text-[13px] text-[#7B5A50] font-medium">
                  zkhash
                </Text>
                <Text className="text-[14px] font-semibold text-[#4A2C2A] ">
                  #1223123131
                </Text>
              </View>
              <View className="flex-col justify-center gap-2 items-center">
                <Text className="text-[13px] text-[#7B5A50] font-medium">
                  Leverage
                </Text>
                <Text className="text-[14px] font-semibold text-[#4A2C2A] ">
                  5x
                </Text>
              </View>
              <View className="flex-col justify-center gap-2 items-center">
                <Text className="text-[13px] text-[#7B5A50] font-medium">
                  Current
                </Text>
                <Text className="text-[14px] font-semibold text-[#4A2C2A] ">
                  $54
                </Text>
              </View>
              <View className="flex-col justify-center gap-2 items-center">
                <Text className="text-[13px] text-[#7B5A50] font-medium"></Text>
                <Text className="text-[14px] font-semibold text-[#4A2C2A] "></Text>
              </View>
              <View className="flex-col justify-center gap-2">
                <Text className="text-[13px] text-[#7B5A50] font-medium">
                  Value
                </Text>
                <View>
                  <Text className="text-[14px] font-bold text-[#7A1E1E]">
                    $5,233
                  </Text>
                  <Text className="text-[12px] font-semibold text-[#1DB954] mt-1 ">
                    $7,816(545%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
