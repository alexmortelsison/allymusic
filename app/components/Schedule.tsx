import Card from "../components/Card";
import Image from "next/image";

export default function Schedule() {
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
          image={"/logo.png"}
          description={
            "Ally Music Presents: TJ Monterde  “Sarili Nating Mundo, US Tour”; with special guest Kz Tandigan. Directed by: John Prats and will be at Palladium Times Square on March 30, 2025."
          }
        />
      </div>
    </div>
  );
}
