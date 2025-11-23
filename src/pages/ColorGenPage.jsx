import React, { useEffect, useState } from "react";
import GenerateButton from "../components/ui/GenerateButton";
import { randomColorGenerator } from "../utils/randomColorGenerator";
import ColorPalate from "../components/layout/ColorPalate";
import Toast from "../components/ui/Toast";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const generatedColors = [
  "rgb(224, 187, 228)",
  "rgb(149, 125, 173)",
  "rgb(210, 145, 188)",
  "rgb(254, 200, 216)",
  "rgb(255, 223, 211)",
];

function ColorGenPage() {
  const [randomColors, setRandomColors] = useState([]);

  const [toastColor, setToastColor] = useState(null);

  const showToast = (copiedColor) => {
    setToastColor(copiedColor);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      setRandomColors((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  useEffect(() => {
    const fetchRandomColors = () => {
      const colors = [];
      for (let i = 0; i < 5; i++) {
        colors.push({
          id: `palette-${i}-${Date.now()}`,
          value: randomColorGenerator(),
          locked: false,
        });
      }
      setRandomColors(colors);
    };

    fetchRandomColors();
  }, []);

  const handleColorUpdate = (index, newColor) => {
    setRandomColors((prev) =>
      prev.map((c, i) => (i === index ? { ...c, value: newColor } : c))
    );
  };

  return (
    <section className="w-full h-full flex overflow-hidden">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={randomColors}
          strategy={horizontalListSortingStrategy}
        >
          {randomColors.map((color,index) => (
            <ColorPalate
            setRandomColors={setRandomColors}
              key={color.id} // Use ID as key, not value
              id={color.id}  // Pass ID to component
              colorObj={color}
              showToast={showToast}
              onUpdateColor={(newColor) => handleColorUpdate(index, newColor)}
              updateLock={() => {
                setRandomColors((prev) =>
                  prev.map((c) =>
                    c.id === color.id ? { ...c, locked: !c.locked } : c
                  )
                );
              }}
            />
          ))}
        </SortableContext>
      </DndContext>

      <GenerateButton setRandomColors={setRandomColors} />

      {toastColor && (
        <Toast color={toastColor} onClose={() => setToastColor(null)} />
      )}
    </section>
  );
}

export default ColorGenPage;
