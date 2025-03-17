import Image from "next/image";
import EmailSubscibe from "./EmailSubscibe";

export default function Hero() {
  return (
    <div className="max-w-8xl mx-auto md:px-16">
      <div className="bg-black">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="object-cover -z-50 brightness-40"
        />
      </div>
      <p className="text-white text-5xl md:text-6xl max-w-7xl mx-auto lg:text-8xl px-24 font-extrabold mt-16 md:mt-24 justify-center items-center text-center w-full">
        Local Vibes, Global Waves - Heard{" "}
        <span className="text-[#dd0d66] text-glow tracking-wider">
          Everywhere.
        </span>
      </p>
      <p className="text-gray-400 text-lg md:text-2xl max-w-7xl mx-auto lg:text-2xl font-bold justify-center items-center text-center w-[340px] md:w-[640px] lg:w-[1100px] mt-4">
        From Local Stages to Global Arenas - Enjoy Live Performances from the
        Best New Artists.
      </p>
      <div className=" flex justify-center items-center cursor-pointer mt-8 lg:mt-16">
        <EmailSubscibe />
      </div>
    </div>
  );
}
