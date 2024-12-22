import React from "react";
import Img01 from "../../assets/home/img01.png";

const Home = () => {
  return (
    <div className="">
      {/* imge container */}
      <div className="flex justify-center h-screen p-4 ">
        <img className="rounded-xl" src={Img01} alt="" />
        <div className="absolute bottom-5">
        <span className="">Mian Calculator</span>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
