import { useEffect } from "react";

function Toast({ color, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500); // auto close in 1.5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
        fixed top-6 left-6        /* position */
        px-4 py-3                    /* size */
        rounded-xl shadow-xl         
        text-white font-medium       
        animate-slide-fade           
      "
      style={{ backgroundColor: color }}
    >
      {color} copied!
    </div>
  );
}

export default Toast;
