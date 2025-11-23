import { Clipboard, Lock, Unlock, GripVertical } from "lucide-react";
import PalateInteractionButton from "../ui/PalateInteractionButton";
import { copyColor } from "../../utils/palateInteractions";
import { useState } from "react";

function PalateInteractions({
  color,
  locked,
  onLockToggle,
  showToast,
  dragListeners,
  dragAttributes,
}) {
  return (
    <div className="mb-20 rounded-2xl px-5 py-3 bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 animate-slide-fade">
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
    </div>
  );
}

export default PalateInteractions;
