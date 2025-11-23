import { Clipboard, Lock, Unlock, Grid, GripVertical } from "lucide-react";
import PalateInteractionButton from "../ui/PalateInteractionButton";
import { copyColor } from "../../utils/palateInteractions";
import { generateColorShades } from "../../utils/colorUtils"; // Import utility
import { useState } from "react";

function PalateInteractions({
  color,
  locked,
  onLockToggle,
  showToast,
  onUpdateColor,
  dragAttributes, // Drag drop props
  dragListeners,
}) {
  const [showShades, setShowShades] = useState(false);
  const shades = generateColorShades(color);

  return (
    <div className="mb-20 rounded-2xl px-3 py-2 bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center gap-3 animate-slide-fade relative z-50">
      {/* Shades Popup - Positioned absolute relative to this container */}
      {showShades && (
        <div
          className="absolute top-1/2 mb-4 bg-white rounded-xl shadow-2xl p-2 grid grid-cols-3 gap-1 w-32 animate-in fade-in zoom-in duration-200"
          onMouseLeave={() => setShowShades(false)} // Mouse hatane par close
        >
          {shades.map((shade) => (
            <button
              key={shade}
              className="w-8 h-8 rounded-full border border-gray-100 hover:scale-110 transition-transform shadow-sm cursor-pointer"
              style={{ backgroundColor: shade }}
              onClick={() => {
                onUpdateColor(shade); // Color update karega
                setShowShades(false); // Popup close
              }}
              title={shade}
            />
          ))}
        </div>
      )}

      {/* Drag Handle */}
      <PalateInteractionButton
        className="cursor-grab active:cursor-grabbing"
        {...dragListeners}
        {...dragAttributes}
      >
        <GripVertical size={18} />
      </PalateInteractionButton>

      {/* Shades Button */}
      <PalateInteractionButton onClick={() => setShowShades(!showShades)}>
        <Grid size={18} />
      </PalateInteractionButton>

      {/* Copy Button */}
      <PalateInteractionButton onClick={() => copyColor(color, showToast)}>
        <Clipboard size={18} />
      </PalateInteractionButton>

      {/* Lock Button */}
      <PalateInteractionButton onClick={onLockToggle}>
        {locked ? <Lock size={18} /> : <Unlock size={18} />}
      </PalateInteractionButton>
    </div>
  );
}

export default PalateInteractions;
