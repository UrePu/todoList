import React from "react";

interface ButtonCommonProps {
  children: string;
  onClick?: () => void;
}

const ButtonCommon = ({ children, onClick }: ButtonCommonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default ButtonCommon;
