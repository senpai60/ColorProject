import { Clipboard, Lock, Unlock } from "lucide-react";
import PalateInteractionButton from "../ui/PalateInteractionButton";
import { copyColor } from "../../utils/palateInteractions";
import { useState } from "react";

function PalateInteractions({ color, locked, onLockToggle, showToast }) {
    
  return (
        <div className="w-full px-5 py-2 max-h-2/3 bg-amber-50 flex items-center justify-center gap-5">
      <PalateInteractionButton onClick={() => copyColor(color,showToast)}>
        <Clipboard />
      </PalateInteractionButton>

      <PalateInteractionButton onClick={onLockToggle}>
        {locked ? <Lock /> : <Unlock />}
      </PalateInteractionButton>
    </div>
  );
}

export default PalateInteractions;
