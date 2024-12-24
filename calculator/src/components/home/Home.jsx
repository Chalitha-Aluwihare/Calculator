import React from "react";
import Img01 from "../../assets/home/img01.png";

const Home = () => {
  return (
    <div className="bg-[#5E5B5B]">
      {/* Image container */}
      <div className="relative flex justify-center h-screen p-4">
        <img className="rounded-[30px]" src={Img01} alt="" />

        <div className="absolute bottom-5">
          <button className="bg-[#0375F0] text-white px-5 py-2 rounded-full m-4">
            Get Started
          </button>
          <div>
            <h6 >WELCOME TO</h6>
            <h6>
              AI-POWERED
            </h6>
            <h6 >CALCULATOR</h6>
            <div >
              <h6 >
                KEY FEATURES
              </h6>
              <h6 >
                Voice-Powered Calculation
              </h6>
              <p >
                Perform calculations by speaking, ideal for <br></br>
                multitasking.Accurate, hands-free convenience.
              </p>

              <h6 >
                Smart Photo Calculation
              </h6>
              <p >
                Snap a photo of equations, and our app solves them, <br></br>
                perfect for quick solutions from notes or books.
              </p>

              <h6 >
                Precision Keyboard Input
              </h6>
              <p >
                Traditional keyboard input with an intuitive interface <br></br>
                for efficient calculations.
              </p>

              <h6 >
                Streamlined User Interface
              </h6>
              <p >
                User-friendly, clean design for easy access to all <br></br>
                features, suitable for students and professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Make this div a flex container */}
      </div>
    </div>
  );
};

export default Home;
