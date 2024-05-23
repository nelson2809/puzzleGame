import React from "react";
import { useNavigate } from "react-router-dom";

const topicBackgroundVideos = {
  Nature: "https://media.istockphoto.com/id/1269851919/video/nature-background-with-colorful-flowers.mp4?s=mp4-640x640-is&k=20&c=KI1N1_uz_MOOdRHsMm6beedQvOQrigguexrO4yh_sXw=",
  Healthcare: "https://media.istockphoto.com/id/1250057258/video/female-doctor-using-medical-mask-with-earth-planet.mp4?s=mp4-640x640-is&k=20&c=PclvD1pZccOlFfBGrYVyzpfbtxK0qlo32-MQyqTw5dY=",
  Automobile: "https://media.istockphoto.com/id/1202881496/video/transportation.mp4?s=mp4-640x640-is&k=20&c=kvzO1tlFuBkbept3U3r8SwyYyxbodzOrtyKLx9AT1Bw=",
  Animals: "https://media.istockphoto.com/id/1380346858/video/crowd-cows-eeding-on-the-meadow.mp4?s=mp4-640x640-is&k=20&c=acBu7VGs9yiTpk6PSD89VN-lTmYKxlsNf5_Ey54WGpY=",
  Sports: "https://media.istockphoto.com/id/2148297795/video/illuminated-public-sports-arena-in-north-port-florida-with-people-playing-soccer-game-on.mp4?s=mp4-640x640-is&k=20&c=hv0WPBIGf0E5_r0RGTUmXJxQExd8GI5R4kny41FWFCk=",
  Food: "https://media.istockphoto.com/id/1210111931/video/chopped-fresh-parsley-falling-onto-pasta.mp4?s=mp4-640x640-is&k=20&c=65Oi8d_wBKhtwvvFyqwHBmNDMr7l7xvmqQexceVKv9A=",
};

const StartButtonCard = () => {
  const selectedTopic = localStorage.getItem('selectedTopic'); 
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
      >
        <source
          src={topicBackgroundVideos[selectedTopic]}
          type="video/mp4"
        />
       video tag.
      </video>
      <div
          className=" h-96 w-96 bg-[url('https://i.postimg.cc/SKwt2tHK/Picsart-24-05-21-11-28-16-743-removebg-1.png')] bg-contain bg-no-repeat relative bottom-20 left-24"
          data-aos="zoom-in-down"
        ></div>
      <div className="relative z-10 bg-white r-100 bg-opacity-80 p-8 rounded-xl shadow-2xl text-center right-60"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="text-lg mb-4">Click  to Start the game</div>
        <button
          className="transition duration-150 ease-in-out mt-4 px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
          onClick={() => {
            navigate('/game'); 
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartButtonCard;
