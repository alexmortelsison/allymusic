import Image from "next/image";
import CountdownPage from "../components/CountdownPage";
export default function UpcomingPage() {
  return (
    <div className="flex flex-col justify-center items-start px-16">
      <div className="bg-black">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="object-cover -z-50 brightness-40"
        />
      </div>
      <div>
        <Image
          src={"/tj1.png"}
          alt="hero"
          fill
          className="object-cover -z-50 w-full hidden lg:block"
        />
        <div className="leading-none flex flex-col justify-between">
          <div>
            <p className="text-white text-4xl">March 30, 2025</p>
            <h1 className="text-white text-[150px]">Tj Monterde</h1>
            <div className="mt-64">
              <CountdownPage />
            </div>
          </div>
          <div>
            <p className="text-white text-7xl mt-[200px]">
              Live at The Palladium Times Square
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
