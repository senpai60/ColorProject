import { parseHSL } from "./hslParser";

export const generateColorShades = (hslStr) => {
  let shades = [];
  const { hue, saturation, light } = parseHSL(hslStr);
  for (let i = 0; i < 10; i++) {
    shades.push(`hsl(${hue}, ${saturation}%, ${i * 10 + 5}%`);
  }
  return shades;
};
