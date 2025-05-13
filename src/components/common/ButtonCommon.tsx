import React from "react";
import { clsx } from "clsx";

interface ButtonCommonProps {
  children: string;
  onClick?: () => void;
  completed?: boolean;
}

const ButtonCommon = ({ children, onClick, completed }: ButtonCommonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-block min-w-[80px] rounded-md px-4 py-2 text-white transition-colors",
        "bg-blue-600 hover:bg-blue-700",
        completed === true && "bg-green-400 hover:bg-green-600",
        completed === false && "bg-red-400 hover:bg-red-600"
      )}
    >
      {children}
    </button>
  );
};

export default ButtonCommon;
