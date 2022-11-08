import React, { useContext } from "react";
import { InfoContext } from "../../pages/_app";

interface Props {}

const Hero = () => {
  const info = useContext(InfoContext);
  return (
    <div className="hero bg-base-200 min-h-screen lg:px-24 xl:px-44">
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col items-center lg:flex-row-reverse gap-4">
          <img
            src="https://thispersondoesnotexist.com/image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I&apos;m {info.name}</h1>
            <p className="py-6">{info.summary}</p>
            <button className="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
