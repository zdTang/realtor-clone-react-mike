import spinner from "../assets/svg/spinner.svg";

import React from "react";
// Sometimes it is just display very short time, so that we can open Console of the Browser to slow down performance
// to observe it.
function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-60">
      <img src={spinner} alt="loading" className="h-24" />
    </div>
  );
}

export default Spinner;
