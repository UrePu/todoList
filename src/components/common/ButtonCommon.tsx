import React from "react";
import { clsx } from "clsx";

interface ButtonCommonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  completed?: boolean;
}

const ButtonCommon = ({
  children,
  onClick,
  type = "button",
  completed,
}: ButtonCommonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "inline-block min-w-[80px] rounded-md px-4 py-2 text-white transition-colors",
        completed === true
          ? "bg-green-400 hover:bg-green-600"
          : completed === false
          ? "bg-red-400 hover:bg-red-600"
          : "bg-blue-600 hover:bg-blue-700"
      )}
    >
      {children}
    </button>
  );
};

export default ButtonCommon;
