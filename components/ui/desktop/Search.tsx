import { search } from "@/public/icons";
import Image from "next/image";

const Search = () => {
  return (
    <div className="">
      <Image src={search} alt="search" className="h-8 w-8 p-[0.2rem]" />
    </div>
  );
};

export default Search;
