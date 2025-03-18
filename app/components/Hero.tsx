import Image from "next/image";
import EmailSubscibe from "./EmailSubscibe";
import Socials from "./Socials";
import Footer from "./Footer";

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
      <p className="text-white text-5xl md:text-7xl max-w-7xl mx-auto lg:text-8xl px-8 font-extrabold mt-8 md:mt-44 xl:mt-36 justify-center items-center text-center w-full">
        Local Vibes, Global Waves - Heard{" "}
        <span className="text-[#dd0d66] text-glow tracking-wider text-center flex items-center justify-center">
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
      <Socials />
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
