// import React, { useState } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   runOnJS,
// } from "react-native-reanimated";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { View , Text } from "react-native";

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SLIDER_WIDTH = Math.min(280, SCREEN_WIDTH - 60); // Responsive width
// const MAX_LEVERAGE = 100;
// const HANDLE_SIZE = 40;

// export default function LeverageSlider() {
//   const translateX = useSharedValue(0);
//   const savedTranslateX = useSharedValue(0);
//   const [leverage, setLeverage] = useState(1);

//   const gesture = Gesture.Pan()
//     .onBegin(() => {
//       savedTranslateX.value = translateX.value;
//     })
//     .onUpdate((e) => {
//       const newValue = savedTranslateX.value + e.translationX;
//       const clampedValue = Math.max(0, Math.min(newValue, SLIDER_WIDTH));
//       translateX.value = clampedValue;

//       const newLeverage = Math.max(
//         1,
//         Math.round((clampedValue / SLIDER_WIDTH) * MAX_LEVERAGE)
//       );
//       runOnJS(setLeverage)(newLeverage);
//     })
//     .onEnd(() => {
//       savedTranslateX.value = translateX.value;
//     });

//   const handleAnimatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: translateX.value }],
//   }));

//   const fillAnimatedStyle = useAnimatedStyle(() => ({
//     width: translateX.value,
//   }));

//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Leverage</Text>

//         <View style={[styles.sliderWrapper, { width: SLIDER_WIDTH + HANDLE_SIZE }]}>
//           {/* Track */}
//           <View style={[styles.track, { width: SLIDER_WIDTH }]}>
//             {/* Fill */}
//             <Animated.View style={[styles.fill, fillAnimatedStyle]} />

//             {/* Ticks */}
//             {Array.from({ length: 21 }).map((_, i) => (
//               <View
//                 key={i}
//                 style={[styles.tick, { left: (i / 20) * SLIDER_WIDTH }]}
//               />
//             ))}
//           </View>

//           {/* Handle */}
//           <GestureDetector gesture={gesture}>
//             <Animated.View style={[styles.handleContainer, handleAnimatedStyle]}>
//               {/* Badge */}
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{leverage}X</Text>
//               </View>
//               {/* Circle */}
//               <View style={styles.circle} />
//             </Animated.View>
//           </GestureDetector>
//         </View>
//       </View>
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   runOnJS,
// } from "react-native-reanimated";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";

// const SCREEN_WIDTH = Dimensions.get("window").width;
// const SLIDER_WIDTH = Math.min(280, SCREEN_WIDTH - 60);
// const MAX_LEVERAGE = 100;
// const HANDLE_SIZE = 40;

// export default function LeverageSlider() {
//   const translateX = useSharedValue(0);
//   const savedTranslateX = useSharedValue(0);
//   const [leverage, setLeverage] = useState(1);

//   const panGesture = Gesture.Pan()
//     .onBegin(() => {
//       savedTranslateX.value = translateX.value;
//     })
//     .onUpdate((e) => {
//       const next = savedTranslateX.value + e.translationX;
//       const clamped = Math.max(0, Math.min(next, SLIDER_WIDTH));
//       translateX.value = clamped;

//       const newLeverage = Math.max(
//         1,
//         Math.round((clamped / SLIDER_WIDTH) * MAX_LEVERAGE),
//       );
//       runOnJS(setLeverage)(newLeverage);
//     });

//   const handleAnimatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: translateX.value }],
//   }));

//   const fillAnimatedStyle = useAnimatedStyle(() => ({
//     width: translateX.value,
//   }));

//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Leverage</Text>

//         <View
//           style={[styles.sliderWrapper, { width: SLIDER_WIDTH + HANDLE_SIZE }]}
//         >
//           <View style={[styles.track, { width: SLIDER_WIDTH }]}>
//             <Animated.View style={[styles.fill, fillAnimatedStyle]} />
//             {Array.from({ length: 21 }).map((_, i) => (
//               <View
//                 key={i}
//                 style={[styles.tick, { left: (i / 20) * SLIDER_WIDTH }]}
//               />
//             ))}
//           </View>

//           {/* <GestureDetector gesture={panGesture}>
//             <Animated.View
//               style={[styles.handleContainer, handleAnimatedStyle]}
//             >
//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{leverage}X</Text>
//               </View>
//               <View style={styles.circle} />
//             </Animated.View>
//           </GestureDetector> */}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     width: "100%",
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   container: {
//     width: "100%",
//     maxWidth: 400,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 16,
//     fontWeight: "600",
//   },
//   sliderWrapper: {
//     height: 70,
//     position: "relative",
//   },
//   track: {
//     position: "absolute",
//     top: 31,
//     left: HANDLE_SIZE / 2,
//     height: 6,
//     backgroundColor: "#e5e5e5",
//     borderRadius: 3,
//   },
//   fill: {
//     height: "100%",
//     backgroundColor: "#22c55e",
//     borderRadius: 3,
//   },
//   tick: {
//     position: "absolute",
//     top: 0,
//     width: 1,
//     height: 6,
//     backgroundColor: "#d4d4d4",
//   },
//   handleContainer: {
//     position: "absolute",
//     top: 14,
//     left: 0,
//     width: HANDLE_SIZE,
//     height: HANDLE_SIZE,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   circle: {
//     width: HANDLE_SIZE,
//     height: HANDLE_SIZE,
//     borderRadius: HANDLE_SIZE / 2,
//     backgroundColor: "#22c55e",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   badge: {
//     position: "absolute",
//     top: -22,
//     backgroundColor: "#22c55e",
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 4,
//     minWidth: 42,
//     alignItems: "center",
//   },
//   badgeText: {
//     color: "#fff",
//     fontSize: 11,
//     fontWeight: "700",
//   },
// });


export default function LeverageSlider(){

  return(
    <View>
      <Text>Leverage Slider</Text>
    </View>
  )
}