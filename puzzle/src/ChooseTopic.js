import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ChooseTopic = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  function onChooseTopic(name) {
    localStorage.setItem("selectedTopic", name);
    navigate("/startButton");
  }

  return (
    <div className="h-screen bg-[url('https://t4.ftcdn.net/jpg/01/76/01/51/240_F_176015185_mPGNcaL7WygUCaaNWR5nhiC08H4tboBE.jpg')] bg-cover bg-center">
      <div className="flex flex-col md:flex-row justify-start items-center md:pl-24 pt-5 md:pt-0">
        <div
          className="h-36 w-36 bg-[url('https://i.postimg.cc/SKwt2tHK/Picsart-24-05-21-11-28-16-743-removebg-1.png')] bg-contain bg-no-repeat"
          data-aos="zoom-in-down"
        ></div>
        <h2
          className="text-2xl italic shadow-black font-black text-center mb-4 md:pl-72 md:pt-4"
          data-aos="zoom-in-down"
        >
          Choose your Topic
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 pt-8 mx-9 pl-10 md:pl-0 relative bottom-20">
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden border border-black shadow-gray-700 shadow-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://cdn.pixabay.com/video/2019/09/12/26796-359604154_tiny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold px-4 py-2 rounded-full bg-white-400 shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Nature")}
            >
              Nature
            </button>
          </div>
        </div>
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden border border-black shadow-gray-700 shadow-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://media.istockphoto.com/id/1250453654/video/doctors-professionals-staff-characters-in-hospital-corridor-animation.mp4?s=mp4-640x640-is&k=20&c=00pP6HoE7C3JOyA2uqGimLddqRc_8k5UpHVs3pkX8bo="
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Healthcare")}
            >
              Healthcare
            </button>
          </div>
        </div>
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden border shadow-gray-700 border-black shadow-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://media.istockphoto.com/id/1095475322/video/animation-of-abstract-city-skyline-and-transport-cars-train-airplane-background-seamless-loop.mp4?s=mp4-640x640-is&k=20&c=dcH-LKw2m2gpuz5LaMQxD2prhp0wVUbj-27nhxVh1Fs="
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Automobile")}
            >
              Automobile
            </button>
          </div>
        </div>
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden border border-black shadow-gray-700 shadow-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://media.istockphoto.com/id/1275099272/video/children-playing-with-funny-animals.mp4?s=mp4-640x640-is&k=20&c=VPtaNwPOojqHUZUW7PxB_cBG_OoImPv4695R-cy1WZo="
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Animals")}
            >
              Animals
            </button>
          </div>
        </div>
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden border border-black shadow-gray-700 shadow-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://media.istockphoto.com/id/1275089443/video/children-playing-with-funny-animals.mp4?s=mp4-640x640-is&k=20&c=o6nmMjlx_-y1Ssb8KUKGjrS3J5OjQe5pZLi_mFY7PrU="
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Sports")}
            >
              Sports
            </button>
          </div>
        </div>
        <div
          className="h-48 w-full lg:w-80 relative rounded-2xl overflow-hidden shadow-gray-700 shadow-2xl border border-black"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://media.istockphoto.com/id/1472896386/video/ice-cream-waffles-with-kiwi-and-nuts-for-childrens-breakfast-a-creative-and-healthy-idea-for.mp4?s=mp4-640x640-is&k=20&c=0ghizKvVDGvgwRtoJo7iGseNKMB9FuQh5MPB1vB4rfU="
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-transparent text-black font-bold text- px-4 py-2 rounded-full shadow-lg hover:bg-cyan-300 shadow-black"
              onClick={() => onChooseTopic("Food")}
            >
              Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTopic;
