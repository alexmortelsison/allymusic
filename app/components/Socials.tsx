import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export default function Socials() {
  return (
    <div className="flex justify-center mt-8 space-x-4 items-center">
      <a href="" target="">
        <Image
          src={"/ig.webp"}
          alt="hero"
          width={20}
          height={20}
          className="object-cover z-0"
        />
      </a>
      <a href="" target="">
        <FaFacebook className="invert" size={20} />
      </a>
      <a href="" target="">
        <Image
          src={"/tt.png"}
          alt="hero"
          width={20}
          height={20}
          className="object-cover z-0"
        />
      </a>
      <a href="" target="">
        <FaXTwitter className="invert" size={20} />
      </a>
    </div>
  );
}
