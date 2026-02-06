 const imageMap = {
  eagle: require("../assets/images/Eagle.png"),
  Rugby : require("../assets/images/Rugby.png")
  
} as const;


type ImageKey = keyof typeof imageMap;

export {ImageKey , imageMap}

export default {}