import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const  CircularProgress = ({ percentage = 33 }) => {
  const size = 55;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <View className="flex-row  items-center   h-full">
      <View className="justify-center items-center">
        <Svg width={size} height={size}>
          {/* Background Circle (Grey) */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#F2F2F2"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle (Yellow) */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#FFB800"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // This gives it the rounded edges
            rotation="-90" // Rotates start point to the top
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        {/* Center Percentage Text */}
        <View className="absolute">
          <Text className="text-[#FF4D00] text-xl font-bold">{percentage}%</Text>
        </View>
      </View>
      
      <Text className="ml-4 text-[#3C1E1E] text-sm font-semibold">Chance</Text>
    </View>
  );
};


export default CircularProgress