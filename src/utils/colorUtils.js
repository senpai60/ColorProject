import { parseHSL } from "./hslParser";

export const generateColorShades = (hslString) => {
  // HSL string se values extract karna (e.g., "hsl(200, 50%, 50%)")
  const match = hslString.match(/hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
  
  if (!match) return [];

  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]);
  // l ko ignore karenge kyunki hume shades ke liye L vary karna hai

  const shades = [];
  // 10 se 95 tak loop chalayenge taaki pure black/white avoid ho sake (optional)
  // Coolors jaisa feel dene ke liye hum approx 20 shades generate karenge
  for (let l = 95; l >= 5; l -= 5) {
    shades.push(`hsl(${h}, ${s}%, ${l}%)`);
  }

  return shades;
};
