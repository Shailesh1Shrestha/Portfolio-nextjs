"use client";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

function Photography({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative h-auto">
      <div className="text-headingColor text-center mb-20">
        <p className="text-xl font-semibold mb-5">Photos</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Photography</h2>
      </div>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return <img src={s} alt={`Slide ${i}`} key={`slide-${i}`} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={`circle-${i}`}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
              role="button" // Added role attribute for accessibility
              tabIndex={0} // Added tabIndex for keyboard accessibility
              onKeyDown={(e) => {
                // Handle keyboard navigation
                if (e.key === "Enter" || e.key === " ") {
                  setCurrent(i);
                }
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Photography;
