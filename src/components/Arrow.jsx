import React from "react";

function Arrow({className, onClick, direction, mt = 0 }) {
  return (
    <p className={"text-center mt-"+ mt + ' ' + className}>
      <img src={`/images/arrow-${direction}.png`} alt="scroll arrow" className="arrow-img" onClick={onClick} />
    </p>
  );
}

export default Arrow;