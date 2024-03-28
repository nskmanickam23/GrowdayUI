import React from "react";

const Loader = () => {
  return (
    <section className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 blur"></div>
      <div className="flex gap-2 justify-center items-center relative z-50">
        <div className="w-4 h-4 rounded-full bg-palettePrimary animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-palatteSecondary animate-bounce [animation-delay:.7s]"></div>
      </div>
    </section>
  );
};

export default Loader;
