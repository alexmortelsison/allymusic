import Card from "../components/Card";
import Image from "next/image";
import Card2 from "../components/Card2";
export default function UpcomingPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto w-full px-4">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="object-cover -z-50 brightness-40"
        />
        <Card
          title={"March 30, 2025"}
          name={"TJ Monterde"}
          image={"/tj.jpg"}
          description={
            "Ally Music Presents: TJ Monterde  “Sarili Nating Mundo, US Tour”; with special guest Kz Tandigan. Directed by: John Prats and will be at Palladium Times Square on March 30, 2025."
          }
        />
      </div>
      <div className="relative bg-red h-screen justify-center items-center w-full px-8">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="object-cover -z-50 brightness-40"
        />
        <div className=" max-w-7xl mx-auto pt-32">
          <h1 className="text-white text-4xl">Upcoming Artists</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-4">
            <Card2 title={"June 2025"} name={"Dionela"} image={"/d.png"} />
            <div className="hidden md:inline-grid">
              <Card2 title={"August 2025"} name={"Jay-R"} image={"/j.jpg"} />
            </div>
            <div className="hidden md:inline-grid">
              <Card2
                title={"October 2025"}
                name={"KZ Tandigan"}
                image={"/k.jpg"}
              />
            </div>
            <div className="hidden md:inline-grid">
              <Card2 title={"December 2025"} name={"Barbie"} image={"/b.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
