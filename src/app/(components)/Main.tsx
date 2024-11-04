import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {children}
    </div>
  );
};

export default Main;
