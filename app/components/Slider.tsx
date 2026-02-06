import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Platform, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";


const MIN_LEVERAGE = 1;
const MAX_LEVERAGE = 1000;
const HANDLE_SIZE = 28;
const HANDLE_HEIGHT = 40;
const TRACK_HEIGHT = 22;

type LeverageSliderProps = {
  onLeverageChange?: (leverage: number) => void;
  initialLeverage?: number;
  type?: "long" | "short";
};

export default function LeverageSlider({
  onLeverageChange,
  initialLeverage = 1,
  type = "long",
}: LeverageSliderProps) {
  // Responsive width calculation
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const SLIDER_WIDTH = Math.max(200, Math.min(SCREEN_WIDTH * 0.6, 400));

  // State
  const [leverage, setLeverage] = useState(initialLeverage);

  // Theme colors based on type
  const colors =
    type === "long"
      ? ["#DCFCE7", "#86EFAC", "#22C55E"]
      : ["#FDE7DF", "#F8B4A0", "#E45D3D"];

  const trackColor = type === "long" ? "#22C55E" : "#E45D3D";

  // Shared values for animation
  const translateX = useSharedValue(
    ((initialLeverage - MIN_LEVERAGE) / (MAX_LEVERAGE - MIN_LEVERAGE)) *
    SLIDER_WIDTH
  );
  const savedTranslateX = useSharedValue(0);

  // Update leverage with callback
  const updateLeverage = (value: number) => {
    setLeverage(value);
    onLeverageChange?.(value);
  };

  // Pan gesture handler
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      savedTranslateX.value = translateX.value;
    })
    .onUpdate((event) => {
      const newValue = savedTranslateX.value + event.translationX;
      const clampedValue = Math.max(0, Math.min(newValue, SLIDER_WIDTH));
      translateX.value = clampedValue;

      // Calculate leverage with stepped values
      const rawLeverage =
        MIN_LEVERAGE +
        (clampedValue / SLIDER_WIDTH) * (MAX_LEVERAGE - MIN_LEVERAGE);

      let steppedLeverage = MIN_LEVERAGE;
      if (rawLeverage <= 50) {
        steppedLeverage = Math.round(rawLeverage);
      } else if (rawLeverage <= 200) {
        steppedLeverage = Math.round(rawLeverage / 5) * 5;
      } else {
        steppedLeverage = Math.round(rawLeverage / 10) * 10;
      }

      runOnJS(updateLeverage)(steppedLeverage);
    })
    .onEnd(() => {
      savedTranslateX.value = translateX.value;
    });

  // Animated styles
  const handleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const fillAnimatedStyle = useAnimatedStyle(() => ({
    width: translateX.value,
  }));

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Leverage</Text>

        <View style={styles.sliderWrapper}>
          {/* Track with gradient */}
          <View style={[styles.trackContainer, { width: SLIDER_WIDTH }]}>
            <LinearGradient
              colors={colors as any}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.track,
                Platform.OS === "web" && ({ cursor: "pointer" } as any),
              ]}
            >
              {/* Fill indicator */}
              <Animated.View style={[styles.fill, fillAnimatedStyle]} />

              {/* Ticks */}
              {Array.from({ length: 30 }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.tick,
                    { left: (i / 29) * (SLIDER_WIDTH - 12) + 6 },
                  ]}
                />
              ))}
            </LinearGradient>
          </View>

          {/* Draggable Handle */}
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.handleContainer,
                handleAnimatedStyle,
                Platform.OS === "web" && ({ cursor: "grab" } as any),
              ]}
            >
              <View style={[styles.handle, { backgroundColor: trackColor }]} />
            </Animated.View>
          </GestureDetector>

          {/* Badge */}
          <View style={styles.badgeWrapper}>
            <View
              style={[styles.badgeArrow, { borderRightColor: trackColor }]}
            />
            <View style={[styles.badge, { backgroundColor: trackColor }]}>
              <Text style={styles.badgeText}>{leverage}X</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  container: {
    width: "100%",
    maxWidth: 600,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    color: "#846964",
    fontWeight: "600",
    marginBottom: 8,
  },
  sliderWrapper: {
    height: 60,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  trackContainer: {
    position: "relative",
    height: TRACK_HEIGHT,
    marginLeft: HANDLE_SIZE / 2,
    marginRight: 8,
  },
  track: {
    height: "100%",
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
  },
  fill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "transparent",
  },
  tick: {
    position: "absolute",
    top: 6,
    width: 2,
    height: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 1,
  },
  handleContainer: {
    position: "absolute",
    left: HANDLE_SIZE / 2,
    top: (60 - HANDLE_HEIGHT) / 2,
    width: HANDLE_SIZE,
    height: HANDLE_HEIGHT,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    zIndex: 10,
  } as any,
  handle: {
    width: 4,
    height: 20,
    borderRadius: 2,
  },
  badgeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  badgeArrow: {
    width: 0,
    height: 0,
    borderTopWidth: 14,
    borderBottomWidth: 14,
    borderRightWidth: 12,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  badge: {
    height: 28,
    minWidth: 60,
    width: 60,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
});
