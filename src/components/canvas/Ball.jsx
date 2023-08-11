import React from "react";

const Ball = ({ imgUrl }) => {
  return (
    // <div className="circle-container">
    <div className="flex justify-center items-center w-24 h-24 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-md">
      {/* <div className="circle"> */}
      <div className="w-20 h-20 rounded-full from-gray-300 to-gray-400 flex justify-center items-center">
        <img className="w-18 h-18" src={imgUrl} alt="Technology Icon" />
      </div>
    </div>
  );
};

export default Ball;
