import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <Link href="https://api.whatsapp.com/send?phone=21964127226">
      <div className="group fixed bottom-2 right-2 flex h-28 w-28 items-end justify-end p-2">
        <div
          className="absolute z-50 flex animate-bounce items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-xl"
          style={{ animationDuration: "2s" }}
        >
          <Image src="/logos/whatsapp.svg" alt="" width={28} height={28} />
        </div>
      </div>
    </Link>
  );
};

export default Whatsapp;
