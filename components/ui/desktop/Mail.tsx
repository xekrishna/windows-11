import { mail } from "@/public/icons";
import Image from "next/image";

const Mail = () => {
  return (
    <div className="">
      <Image src={mail} alt="search" className="h-8 w-8 p-[0.23rem]" />
    </div>
  );
};

export default Mail;
