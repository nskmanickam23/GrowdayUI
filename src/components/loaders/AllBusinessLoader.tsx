import React from "react";

const AllBusinessLoader = () => {
  return (
    <section className="absolute w-full h-full">
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="flex gap-2 justify-center items-center w-fit relative z-50">
          <div className="w-4 h-4 rounded-full bg-palettePrimary animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-palatteSecondary animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-slate-600 opacity-40 z-40"></div>
    </section>
  );
};

export default AllBusinessLoader;
