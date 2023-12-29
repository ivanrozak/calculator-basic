import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-auto w-[375px] h-[812px] px-4 py-12 rounded-[60px] bg-gradient-to-b from-[#242833] to-[#16181D] flex flex-col justify-end">
      {children}
    </div>
  );
};

export default Wrapper;
