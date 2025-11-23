import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PalateInteractions from "./PalateInteractions";
import PalateWebContent from "./PalateWebContent";

function ColorPalate({ id, colorObj, updateLock, showToast }) {
  const [showInteraction, setShowInteraction] = useState(false);
  const [lockedColor, setLockedColor] = useState(false);

  const handleLockToggle = () => {
    setLockedColor((prev) => !prev);
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Helps us keep the UI open while dragging
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: colorObj.value,
    zIndexYB: isDragging ? 50 : "auto", // Bring dragging item to front
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onMouseEnter={() => setShowInteraction(true)}
      onMouseLeave={() => setShowInteraction(false)}
      className="flex-1 h-full flex items-end justify-center hover:flex-[1.2] transition-[flex] duration-300 ease-in-out"
    >
      <PalateWebContent />  
      {(showInteraction || isDragging) && (
        <PalateInteractions
          color={colorObj.value}
          locked={colorObj.locked}
          onLockToggle={updateLock}
          showToast={showToast}
          // Pass drag handles down
          dragAttributes={attributes}
          dragListeners={listeners}
        />
      )}
    </div>
  );
}

export default ColorPalate;
