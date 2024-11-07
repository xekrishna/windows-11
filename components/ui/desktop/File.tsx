import { file } from "@/public/icons";
import Image from "next/image";

const File = () => {
  return (
    <div>
      <Image src={file} alt="file" className="h-8 w-8 p-[0.15rem]" />
    </div>
  );
};

export default File;
