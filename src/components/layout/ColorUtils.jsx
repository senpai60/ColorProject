import { hslToHexCode } from "../../utils/colorCodeConverter";
import { copyColor } from "../../utils/palateInteractions";

function ColorUtils({ utilColors }) {
  const handleColorManipulation = (color) => {
    copyColor(color);
  };
  return (
    <div className="w-full flex-1">
      {utilColors.map((color) => {
        const hashedColor = hslToHexCode(color);
        return (
          <button
            onClick={() => handleColorManipulation(hashedColor)}
            style={{ background: color }}
            className="w-full h-10"
          >
            {hashedColor}
          </button>
        );
      })}
    </div>
  );
}

export default ColorUtils;
