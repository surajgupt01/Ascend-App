// import { Shadow } from "@shopify/react-native-skia";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Share } from "react-native";
import { CurveType, LineChart, yAxisSides } from "react-native-gifted-charts";
import Bookmark from "../Icons/Bookmark";
import ShareIcon from "../Icons/Share";

const DATA = {
  "1H": {
    // 1-hour data: Very jagged, high noise, minor fluctuations
    "Seattle Seahawks": [
      { value: 60.2 },
      { value: 60.5 },
      { value: 59.8 },
      { value: 59.2 },
      { value: 60.1 },
      { value: 61.5 },
      { value: 63.0 },
      { value: 62.4 },
      { value: 61.8 },
      { value: 61.2 },
      { value: 60.5 },
      { value: 59.1 },
      { value: 58.4 },
      { value: 57.9 },
      { value: 58.2 },
      { value: 59.5 },
      { value: 60.3 },
      { value: 61.1 },
      { value: 62.5 },
      { value: 63.0 },
    ],
    "New England": [
      { value: 39.8 },
      { value: 39.5 },
      { value: 40.2 },
      { value: 40.8 },
      { value: 39.9 },
      { value: 38.5 },
      { value: 37.0 },
      { value: 37.6 },
      { value: 38.2 },
      { value: 38.8 },
      { value: 39.5 },
      { value: 40.9 },
      { value: 41.6 },
      { value: 42.1 },
      { value: 41.8 },
      { value: 40.5 },
      { value: 39.7 },
      { value: 38.9 },
      { value: 37.5 },
      { value: 37.0 },
    ],
  },
  "1D": {
    // 1-day data: Smooth trends with one or two "news events" (spikes)
    "Seattle Seahawks": [
      { value: 55.0 },
      { value: 56.2 },
      { value: 54.8 },
      { value: 53.1 },
      { value: 52.5 },
      { value: 58.0 },
      { value: 65.2 },
      { value: 68.1 },
      { value: 70.4 },
      { value: 69.1 },
      { value: 67.5 },
      { value: 65.2 },
      { value: 66.8 },
      { value: 67.5 },
      { value: 68.2 },
      { value: 66.4 },
      { value: 65.1 },
      { value: 64.2 },
      { value: 63.5 },
      { value: 68.0 },
    ],
    "New England": [
      { value: 45.0 },
      { value: 43.8 },
      { value: 45.2 },
      { value: 46.9 },
      { value: 47.5 },
      { value: 42.0 },
      { value: 34.8 },
      { value: 31.9 },
      { value: 29.6 },
      { value: 30.9 },
      { value: 32.5 },
      { value: 34.8 },
      { value: 33.2 },
      { value: 32.5 },
      { value: 31.8 },
      { value: 33.6 },
      { value: 34.9 },
      { value: 35.8 },
      { value: 36.5 },
      { value: 32.0 },
    ],
  },
  "1W": {
    // 1-week data: Long-term cycles, less "noise," more steady growth/decay
    "Seattle Seahawks": [
      { value: 45.0 },
      { value: 46.5 },
      { value: 48.0 },
      { value: 50.2 },
      { value: 52.1 },
      { value: 51.5 },
      { value: 53.0 },
      { value: 55.4 },
      { value: 58.2 },
      { value: 60.1 },
      { value: 62.5 },
      { value: 61.2 },
      { value: 59.8 },
      { value: 60.5 },
      { value: 63.4 },
      { value: 65.2 },
      { value: 66.8 },
      { value: 67.5 },
      { value: 68.9 },
      { value: 68.0 },
    ],
    "New England": [
      { value: 55.0 },
      { value: 53.5 },
      { value: 52.0 },
      { value: 49.8 },
      { value: 47.9 },
      { value: 48.5 },
      { value: 47.0 },
      { value: 44.6 },
      { value: 41.8 },
      { value: 39.9 },
      { value: 37.5 },
      { value: 38.8 },
      { value: 40.2 },
      { value: 39.5 },
      { value: 36.6 },
      { value: 34.8 },
      { value: 33.2 },
      { value: 32.5 },
      { value: 31.1 },
      { value: 32.0 },
    ],
  },
  "1M": {
    // 1-week data: Long-term cycles, less "noise," more steady growth/decay
    "Seattle Seahawks": [
      { value: 45.0 },
      { value: 46.5 },
      { value: 48.0 },
      { value: 50.2 },
      { value: 52.1 },
      { value: 51.5 },
      { value: 53.0 },
      { value: 55.4 },
      { value: 58.2 },
      { value: 60.1 },
      { value: 62.5 },
      { value: 61.2 },
      { value: 59.8 },
      { value: 60.5 },
      { value: 63.4 },
      { value: 65.2 },
      { value: 66.8 },
      { value: 67.5 },
      { value: 68.9 },
      { value: 68.0 },
    ],
    "New England": [
      { value: 55.0 },
      { value: 53.5 },
      { value: 52.0 },
      { value: 49.8 },
      { value: 47.9 },
      { value: 48.5 },
      { value: 47.0 },
      { value: 44.6 },
      { value: 41.8 },
      { value: 39.9 },
      { value: 37.5 },
      { value: 38.8 },
      { value: 40.2 },
      { value: 39.5 },
      { value: 36.6 },
      { value: 34.8 },
      { value: 33.2 },
      { value: 32.5 },
      { value: 31.1 },
      { value: 32.0 },
    ],
  },
  ALL: {
    // 1-week data: Long-term cycles, less "noise," more steady growth/decay
    "Seattle Seahawks": [
      { value: 45.0 },
      { value: 46.5 },
      { value: 48.0 },
      { value: 50.2 },
      { value: 52.1 },
      { value: 51.5 },
      { value: 53.0 },
      { value: 55.4 },
      { value: 58.2 },
      { value: 60.1 },
      { value: 62.5 },
      { value: 61.2 },
      { value: 59.8 },
      { value: 60.5 },
      { value: 63.4 },
      { value: 65.2 },
      { value: 66.8 },
      { value: 67.5 },
      { value: 68.9 },
      { value: 68.0 },
    ],
    "New England": [
      { value: 55.0 },
      { value: 53.5 },
      { value: 52.0 },
      { value: 49.8 },
      { value: 47.9 },
      { value: 48.5 },
      { value: 47.0 },
      { value: 44.6 },
      { value: 41.8 },
      { value: 39.9 },
      { value: 37.5 },
      { value: 38.8 },
      { value: 40.2 },
      { value: 39.5 },
      { value: 36.6 },
      { value: 34.8 },
      { value: 33.2 },
      { value: 32.5 },
      { value: 31.1 },
      { value: 32.0 },
    ],
  },
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CHART_PADDING = 35;
const FIXED_CHART_WIDTH = SCREEN_WIDTH - CHART_PADDING;

export default function PredictionChart() {
  const [range, setRange] = useState<"1H" | "1D" | "1W" | "1M" | "ALL">("1H");

  const currentData = DATA[range]["Seattle Seahawks"];
  const totalPoints = currentData.length;

  const dynamicSpacing = (FIXED_CHART_WIDTH - 90) / (totalPoints - 1);

  const teams = Object.keys(DATA[range]);
  const teamPercentageRef = React.useRef([{ value: "0" }, { value: "0" }]);

  const chartData1 = React.useMemo(
    () => [...DATA[range]["Seattle Seahawks"]],
    [range],
  );
  const chartData2 = React.useMemo(
    () => [...DATA[range]["New England"]],
    [range],
  );
  const dataSet = React.useMemo(
    () => [
      {
        data: chartData1,
        color: "#FF4D2D",
        thickness: 1,
        hideDataPoints: true,
        curved: true,
      },
      {
        data: chartData2,
        color: "#FF3ED1",
        thickness: 1,
        hideDataPoints: true,
        curved: true,
      },
    ],
    [chartData1, chartData2],
  );

  return (
    <View
      style={{ alignItems: "center" }}
      className="w-full p-2 rounded-lg  relative"
    >
      {/* Time Filters */}
      <View className="w-full flex-row items-center justify-between  gap-1 p-2 ">
        <View className="flex-row items-center justify-center gap-1 ">
          <View className="w-1 h-1 bg-[#FF4D2D] rounded-full"></View>
          <Text className="text-[#FF4D2D] font-semibold text-[12px]">
            {teams[0]} {teamPercentageRef.current[0]?.value}
            {"%"}
          </Text>
          <View className="w-1 h-1 bg-[#FF3ED1] rounded-full ml-2"></View>
          <Text className="text-[#FF3ED1] font-semibold text-[12px]">
            {teams[1]} {teamPercentageRef.current[1]?.value}
            {"%"}
          </Text>
        </View>

        <View className="flex-row justify-center items-center gap-2">
          <View className="border border-gray-200 p-1 bg-gray-50 rounded-lg flex-row gap-1 justify-center items-center">
            <ShareIcon />
          </View>
          <View className="border border-gray-200 p-1 bg-gray-50 rounded-lg flex-row gap-1 justify-center items-center">
            <Bookmark />
          </View>
        </View>
      </View>
      <View className="flex-row  gap-2 text justify-start w-full  ">
        {(["1H", "1D", "1W", "1M", "ALL"] as const).map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setRange(t)}
            className={` p-1 rounded-md  ${range === t ? "bg-gray-50 border border-gray-200" : ""} `}
          >
            <Text style={{ fontSize: 10 }}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-[30px] tracking-widest absolute top-20 left-10 text-[#73130066]">
        {"Ascend"}
      </Text>

      <View
        style={{
          width: FIXED_CHART_WIDTH,
        }}
        className="flex items-center justify-center"
      >
        <LineChart
          key={range}
          dataSet={dataSet}
          width={FIXED_CHART_WIDTH - 60}
          height={200}
          spacing={dynamicSpacing}
          endSpacing={20}
          maxValue={80}
          stepValue={10}
          noOfSections={8}
          hideOrigin={true}
          curveType={CurveType.QUADRATIC}
          yAxisLabelSuffix="%"
          yAxisTextStyle={{
            fontSize: 10,
            color: "#9CA3AF",
            fontWeight: "500",
          }}
          isAnimated
          animateOnDataChange
          animationDuration={1200}
          animationEasing="easeInOut"
          yAxisSide={yAxisSides.RIGHT}
          yAxisColor="transparent"
          xAxisColor="transparent"
          rulesColor="#D3D3D3"
          pointerConfig={{
            pointerColorsForDataSet: [
              "#FF4D2D", // Seattle Seahawks
              "#FF3ED1", // New England
            ],

            pointerStripColor: "#ff6d4d",
            pointerStripWidth: 1,
            pointerVanishDelay: 500,
            activatePointersOnLongPress: false,
            pointerLabelWidth: 100,
            shiftPointerLabelX: 80,
            persistPointer: true,

            autoAdjustPointerLabelPosition: true,

            pointerLabelComponent: (items: any) => {
              teamPercentageRef.current = items;

              return (
                <View
                  className="shadow-lg duration-500 transition-all z-100 "
                  style={{
                    padding: 6,
                    borderRadius: 12,
                    shadowRadius: 8,
                    elevation: 10,
                    width: 115,
                    // marginLeft : 30,
                    // marginRight : 30,
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    // marginRight: 25,
                    zIndex: 100,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 5,
                      zIndex: 150,
                      backgroundColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FF4D2D",
                        fontWeight: "800",
                        fontSize: 9,
                      }}
                    >
                      {teams[0]}
                      {"  " + items[0]?.value}%
                    </Text>
                    <Text
                      style={{
                        color: "#FF3ED1",
                        fontWeight: "800",
                        fontSize: 9,
                      }}
                    >
                      {teams[1]}
                      {"  " + items[1]?.value}%
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <View className="w-full p-1">
          <Text className="text-[12px] text-gray-500">
            {"$68M Volume "}
            {" | "}
            {" Jan 12,2026"}
          </Text>
        </View>
      </View>
    </View>
  );
}
