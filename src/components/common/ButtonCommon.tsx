import React from "react";

const ButtonCommon = ({ children }: { children: string }) => {
  return (
    <button className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
      {children}
    </button>
  );
};

export default ButtonCommon;
