"use client";

import Image from "next/image";

const Portrait = () => {
  return (
    <div className="w-[300px] h-full ml-auto">
      <Image
        src="/images/portrait.png"
        alt=""
        quality={100}
        width={500}
        height={500}
        className="object-cover ml-auto "
      />
    </div>
  );
};

export default Portrait;
