import { Button } from "@/components/ui/button";
import Image from "next/image";
import CountdownPage from "./CountdownPage";

interface CardProps {
  title: string;
  name: string;
  image: string;
  description: string;
}

export default function Card({ title, name, image, description }: CardProps) {
  return (
    <div className="relative h-[500px] lg:h-[500px] rounded-2xl bg-black/50 hover:bg-black/0 w-full">
      <Image
        src={image}
        alt="."
        fill
        className="object-cover -z-50 rounded-2xl brightness-90"
      />
      <p className="text-white pl-4 md:pl-8 pt-4 lg:pt-8 text-sm">{title}</p>
      <p className="text-white pl-4 md:pl-8 text-2xl md:text-3xl lg:text-6xl lg:pt-4 font-bold">
        {name}
      </p>
      <p className="text-white  pl-4 md:pl-8 text-sm font-bold bottom-0 absolute pb-24 font-sans text-start leading-none md:w-[50%]">
        {description}
      </p>
      <Button className="text-white text-sm font-bold bottom-8 left-5 md:left-6 absolute font-sans cursor-pointer">
        More info
      </Button>
      <div className="text-white text-sm font-bold -bottom-0 md:-right-220 w-full absolute font-sans cursor-pointer hidden lg:inline-flex">
        <CountdownPage />
      </div>
    </div>
  );
}
