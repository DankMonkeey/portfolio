import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Text: React.FC = () => {
  return (
    <div className="App box-border flex justify-start h-full items-center font-bold text-[18px]  p-2">
      <Typewriter
        words={[
          "Filmaker chez OCP, festivale de kermess.",
          "Filmaker photographe chez media verse",
          "Cinématographe et photographe indépendant",
          "j'aide les entreprises à raconter leur histoire à travers des visuels captivants et des vidéos percutantes",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Text;
