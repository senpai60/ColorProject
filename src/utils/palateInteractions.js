import { hslToHexCode } from "./colorCodeConverter";

export const copyColor = async (color,showToast) => {
  try {
    const hexaColor = hslToHexCode(color);
    await navigator.clipboard.writeText(hexaColor);
    showToast(hexaColor)
    console.log(`${hexaColor} Copied!`);
  } catch (err) {
    console.error(err);
  }
};
