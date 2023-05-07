import React from "react";

function CustomButton({ text, styles, icon }) {
  return (
    <div>
      <button
        className={`flex gap-3 justify-center items-center${
          styles
            ? styles
            : "w-[170px] py-3 rounded-[64px] bg-brand-main text-white-main"
        }`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
