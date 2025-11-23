import {
  Clipboard,
  Lock,
  Unlock,
  GripVertical,
  SwatchBook,
} from "lucide-react";
import PalateInteractionButton from "../ui/PalateInteractionButton";
import { copyColor } from "../../utils/palateInteractions";
import { generateColorShades } from "../../utils/colorUtils";
import { useState } from "react";
import ColorUtils from "./ColorUtils";

function PalateInteractions({
  setRandomColors,
  color,
  locked,
  onLockToggle,
  showToast,
  dragListeners,
  dragAttributes,
}) {
  const [generatedShades, setGeneratedShades] = useState([]);

  const displayShades = (color) => {
    const shades = generateColorShades(color);
    setGeneratedShades(shades);
  };
  return (
    <>
      <div className="mt-20 rounded-2xl px-5 py-3 bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 animate-slide-fade">
        {/* Dragger Button */}
        <PalateInteractionButton
          className="cursor-grab active:cursor-grabbing touch-none"
          {...dragListeners}
          {...dragAttributes}
        >
          <GripVertical size={20} />
        </PalateInteractionButton>

        {/* Existing Buttons */}
        <PalateInteractionButton onClick={() => copyColor(color, showToast)}>
          <Clipboard size={20} />
        </PalateInteractionButton>

        <PalateInteractionButton onClick={onLockToggle}>
          {locked ? <Lock size={20} /> : <Unlock size={20} />}
        </PalateInteractionButton>
        <PalateInteractionButton onClick={() => displayShades(color)}>
          <SwatchBook size={20} />
        </PalateInteractionButton>
      </div>
      {generatedShades && (<div className="w-full h-full">
        <ColorUtils utilColors={generatedShades}/>
      </div>)}
    </>
  );
}

export default PalateInteractions;
