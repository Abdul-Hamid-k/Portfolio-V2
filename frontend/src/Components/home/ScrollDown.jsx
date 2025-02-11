import React from "react";

const ScrollDown = () => {
  return (
    <div className="hidden md:flex md:ml-[4.5rem] mt-3 lg:ml-[5.25rem]">
      <a href="#about" className="flex justify-center items-center stroke-l-primary dark:stroke-d-primary stroke-l-primary dark:stroke-d-primary">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-scroll"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              strokeWidth: "20px",
            }}
            className="stroke-l-primary dark:stroke-d-primary"
          ></path>
        </svg>
        <span className="font-medium">Scroll Down </span>
        <i className="ri-arrow-down-line text-[1.25rem] "></i>
      </a>
    </div>
  );
};

export default ScrollDown;
