import React from "react";

export const metadata = {
  title: "about",
};

const Page = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let txt = "سلام به دوستان گلم! این که اپ ساده، طراحی شده با NextJS می باشد به منو هم نگاه بیاندازید";

  return (
    <>
      <div className="container w-7/12 mx-auto font-bold text-center mt-[15px] leading-tight" dir="rtl">
        {txt.split(" ").map((word, index) => (
          <div key={index} className="inline-block">
            <span className=" animate-pulse" style={{ fontSize: `${getRandomNumber(10, 140)}px` }}>
               &nbsp;{word}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
