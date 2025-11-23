import { Command } from "lucide-react";
import { randomColorGenerator } from "../../utils/randomColorGenerator";
import { useEffect } from "react";
function GenerateButton({ setRandomColors }) {
  const fetchRandomColors = () => {
    setRandomColors((prev) =>
      prev.map((colorObj) =>
        colorObj.locked
          ? colorObj
          : { ...colorObj, value: randomColorGenerator() }
      )
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setRandomColors((prev) =>
          prev.map((c) =>
            c.locked ? c : { ...c, value: randomColorGenerator() }
          )
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setRandomColors]);

  return (
    <button
      onClick={fetchRandomColors}
      className="px-5 h-12 border flex items-center gap-3 rounded-2xl bg-amber-50 border-white fixed left-[50%] -translate-x-[50%] bottom-10"
    >
      <Command className="inline-block" size={15} />
      <span>SPACE</span>
    </button>
  );
}

export default GenerateButton;
