// PASTEL (soft aesthetic)
export const pastelColor = () => {
  const h = Math.random() * 360;
  const s = 30 + Math.random() * 25; // LOW saturation
  const l = 70 + Math.random() * 20; // HIGH light
  return `hsl(${h}, ${s}%, ${l}%)`;
};


//DARK COLORS (deep & aesthetic)
export const darkColor = () => {
  const h = Math.random() * 360;
  const s = 40 + Math.random() * 40; // 40–80%
  const l = 10 + Math.random() * 20; // 10–30%
  return `hsl(${h}, ${s}%, ${l}%)`;
};
// VIBRANT COLORS (tech UI / neon)
export const vibrantColor = () => {
  const h = Math.random() * 360;
  const s = 70 + Math.random() * 25; // 70–95%
  const l = 45 + Math.random() * 10; // 45–55%
  return `hsl(${h}, ${s}%, ${l}%)`;
};


// MUTED / NATURAL COLORS (earthy)
export const naturalColor = () => {
  const h = Math.random() * 360;
  const s = 10 + Math.random() * 20; // 10–30%
  const l = 50 + Math.random() * 10; // 50–60%
  return `hsl(${h}, ${s}%, ${l}%)`;
};


// TRUE NEUTRAL / GRAY COLORS
export const neutralColor = () => {
  const h = Math.random() * 360;
  const s = Math.random() * 5; // 0–5%
  const l = 20 + Math.random() * 60; // 20–80%
  return `hsl(${h}, ${s}%, ${l}%)`;
};


/**
 * Generates a color based on the selected algorithm mode.
 * @param {string} algoMode - The desired color mode. Can be "pastel", "dark", 
 * "vibrant", "natural", "neutral", or "combinational".
 */
export const randomColorGenerator = (algoMode) => {
  console.log(algoMode);
  
  const modes = ["pastel", "dark", "vibrant", "natural", "neutral"];
  let finalMode = algoMode;

  // If the mode is "combinational" or an invalid mode is passed, pick a random one.
  if (algoMode === "combinational" || !modes.includes(algoMode)) {
    finalMode = modes[Math.floor(Math.random() * modes.length)];
  }

  switch (finalMode) {
    case "pastel":
      return pastelColor();
    case "dark":
      return darkColor();
    case "vibrant":
      return vibrantColor();
    case "natural":
      return naturalColor();
    case "neutral":
      return neutralColor();
    default:
      // Fallback for any unexpected cases, though the logic above should prevent this.
      return pastelColor();
  }
};
