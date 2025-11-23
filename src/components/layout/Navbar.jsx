import { Image, User2Icon } from "lucide-react";

const navTopRightBtnItems = [
  {
    icons: <Image size={20} />,
  },
  {
    icons: <User2Icon size={20} />,
  },
];

function Navbar({ setAlgoMode }) {
  // Handler to update the algorithm mode when dropdown changes
  const handleAlgoChange = (e) => {
    console.log(e.target.value);
    
    setAlgoMode(e.target.value);
  };

  return (
    <nav className="w-full min-h-30 flex flex-col bg-amber-50 ">
      <div className="nav-top px-5 w-full h-[50%] flex items-center justify-between border-b border-[#193b39]">
        <div className="nt-left">
          <h1 className="text-2xl font-bold text-[#1f5950]">
            {" "}
            <span className="text-[#d5a19d]">Tone</span>Vault
          </h1>
        </div>
        <div className="nt-right">
          {navTopRightBtnItems.map((navLink) => (
            <button
              key={navLink.icons}
              className="p-2 hover:bg-amber-100 rounded-full"
            >
              {navLink.icons}
            </button>
          ))}
        </div>
      </div>
      <div className="nav-bot flex-1 flex items-center justify-between w-full">
        <div className="nb-left flex py-2 px-5">
          <p>press space button to generate random colors</p>
        </div>
        <div className="nb-right flex flex-col items-start space-y-2 px-5 py-1">
          <label
            htmlFor="gen-algo"
            className="font-semibold text-gray-700 mb-1"
          >
            Palette Algorithm
          </label>

          {/* Dropdown with onChange handler */}
          <select
            id="gen-algo"
            name="gen-algo"
            className="
              w-full
              max-w-xs
              border border-gray-300
              rounded-lg
              px-4 py-1
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              shadow-sm
              text-gray-900
              bg-white
              transition
            "
            defaultValue="combinational"
            onChange={handleAlgoChange}
          >
            <option value="combinational">Combinational (Random)</option>
            {["pastel", "dark", "vibrant", "natural", "neutral"].map((opt) => (
              <option key={opt} value={opt}>
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>

          <span className="text-xs text-gray-500 ml-1">
            Try "Vibrant", "Natural", etc.
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
