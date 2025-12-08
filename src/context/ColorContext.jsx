import { useContext, createContext, useState } from "react";

const ColorContext = createContext(null);

const ColorProvider = ({ children }) => {
  const [randomColors, setRandomColors] = useState([]);
  const [algoMode, setAlgoMode] = useState("combinational");

  const handleColorUpdate = (index, newColor) => {
    setRandomColors((prev) =>
      prev.map((c, i) => (i === index ? { ...c, value: newColor } : c))
    );
  };

  const handleAlgoChange = (e) => {
    console.log(e.target.value);

    setAlgoMode(e.target.value);
  };

  const value = {
    randomColors,
    algoMode,
    handleColorUpdate,
    handleAlgoChange,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
