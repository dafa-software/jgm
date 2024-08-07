import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <Link href="https://api.whatsapp.com/send?phone=5521964127226">
      <div className="absolute bottom-0 right-16 z-50 md:bottom-16">
        <div className="fixed flex flex-col items-center justify-start rounded-full bg-green-500 p-3 text-white shadow-xl md:flex">
          <Image src="/logos/whatsapp.svg" alt="" width={28} height={28} />
        </div>
      </div>
    </Link>
  );
};

export default Whatsapp;
