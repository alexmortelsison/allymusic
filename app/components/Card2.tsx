import Image from "next/image";

interface CardProps {
  title: string;
  name: string;
  image: string;
  description: string;
}

export default function Card2({ title, name, image, description }: CardProps) {
  return (
    <div className="relative h-[600px] rounded-2xl bg-black/50 hover:bg-black/0">
      <Image
        src={image}
        alt="."
        fill
        className="object-cover -z-50 rounded-2xl brightness-90"
      />
      <p className="text-white pl-4 pt-4 text-sm">{title}</p>
      <p className="text-white pl-4 text-2xl md:text-3xl lg:text-6xl lg:mt-8 font-bold">
        {name}
      </p>
      <p className="text-white pl-4 text-sm font-bold bottom-0 absolute pb-8 font-sans text-start leading-none md:w-[50%]">
        {description}
      </p>
    </div>
  );
}
