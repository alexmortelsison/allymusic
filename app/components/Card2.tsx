import Image from "next/image";

interface CardProps {
  title: string;
  name: string;
  image: string;
}

export default function Card2({ title, name, image }: CardProps) {
  return (
    <div className="relative h-[300px] rounded-2xl  shadow-xl shadow-[#216ca1]">
      <Image
        src={image}
        alt="."
        width={500}
        height={500}
        className="object-cover -z-50 rounded-2xl h-[400px]"
      />
      <div className="absolute top-80 lg:top-70">
        <p className="pl-4 pt-4 text-sm text-[#dd0d66]">{title}</p>
        <p className="text-white pl-4 text-3xl md:text-3xl lg:text-6xl font-bold">
          {name}
        </p>
      </div>
    </div>
  );
}
