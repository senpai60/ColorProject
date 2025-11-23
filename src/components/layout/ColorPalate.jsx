import { useState } from "react";

import PalateInteractions from "./PalateInteractions";

function ColorPalate({ colorObj, updateLock,showToast}) {
  const [showInteraction, setShowInteraction] = useState(false);
  const [lockedColor, setLockedColor] = useState(false);

  const handleLockToggle = () => {
    setLockedColor((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={() => setShowInteraction(true)}
      onMouseLeave={() => setShowInteraction(false)}
      className="flex-1 h-full justify-center hover:flex-2 transition-all"
      style={{ backgroundColor: colorObj.value }}
    >
      {showInteraction && (
        <PalateInteractions
          color={colorObj.value}
          locked={colorObj.locked}
          onLockToggle={updateLock}
          showToast={showToast}
        />
      )}
    </div>
  );
}

export default ColorPalate;
