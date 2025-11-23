import React, { useEffect, useState } from "react";
import GenerateButton from "../components/ui/GenerateButton";
import { randomColorGenerator } from "../utils/randomColorGenerator";
import ColorPalate from "../components/layout/ColorPalate";
import Toast from "../components/ui/Toast";

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

  useEffect(() => {
    const fetchRandomColors = () => {
      const colors = [];
      for (let i = 0; i < 5; i++) {
        colors.push({
          value: randomColorGenerator(),
          locked: false,
        });
      }
      setRandomColors(colors);
    };

    fetchRandomColors();
  }, []);

  return (
    <section className="w-full h-full flex">
      <GenerateButton setRandomColors={setRandomColors} />

      {randomColors.map((color, index) => (
        <ColorPalate
          key={color.value}
          colorObj={color}
          showToast={showToast}
          updateLock={() => {
            setRandomColors((prev) =>
              prev.map((c, i) =>
                i === index ? { ...c, locked: !c.locked } : c
              )
            );
          }}
        />
      ))}
      {toastColor && (
        <Toast color={toastColor} onClose={() => setToastColor(null)} />
      )}
    </section>
  );
}

export default ColorGenPage;
