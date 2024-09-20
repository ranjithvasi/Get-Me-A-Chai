import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex gap-4 flex-col justify-center items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base ">
        <div className=" flex md:gap-20 gap-6 font-bold text-3xl md:text-5xl justify-center items-center">
          Get Me A Chai{" "}
          <span>
            <img src="/tea.gif" width={88} alt="" />
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div>
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start Now !
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"> s</div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-2xl mb-14 font-bold text-center">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-700  rounded-full  p-2"
              width={88}
              src="/you.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-700  rounded-full  p-2"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold text-center">Fan want to contribute</p>
            <p className="text-center">
              Your fans are willing to contribute financially
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-700  rounded-full  p-2"
              width={88}
              src="/fans.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"> s</div>

      <div className="text-white container mx-auto pb-32 pt-14 ">
        <h2 className="text-2xl mb-14 font-bold text-center">
          Learn more about us
        </h2>

        <div className=" flex justify-center items-center">
          <iframe
            className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]"
            src="https://www.youtube.com/embed/QFN-CuILJW0?si=QziYGbhDeiobOP2m"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
