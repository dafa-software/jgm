import Link from "next/link";
import Image from "next/image";
import { NavigationData } from "~/data";
import { SearchIcon } from "./icons";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <nav className="fixed flex w-full flex-wrap items-center justify-between bg-white p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Image src="/logo.png" alt="JGM Servijson" width={100} height={100} />
      </div>
      <div className="hidden w-full flex-grow md:block md:w-auto lg:items-center">
        <div className="flex gap-6">
          {NavigationData.map((props, index) => (
            <Link
              {...props}
              key={index}
              className="text-blue-900 hover:text-blue-600"
            >
              {props.title}
            </Link>
          ))}
        </div>
      </div>
      <MobileNavigation />
      <div className="hidden md:flex">
        <SearchIcon className="h-6 w-6" color="black" />
      </div>
    </nav>
  );
}
