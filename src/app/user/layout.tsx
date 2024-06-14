"use client"
import styles from "./layout.module.css"
import { FaUser } from "react-icons/fa6";
import Link from "next/link"


export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className={`p-8 h-full overflow-scroll bg-[url("/images/bg-image.jpg")] bg-cover bg-no-repeat m-0`}>
      <Link href={`/admin/wallet`}>
        <button className="text-xl mx-4 text-white text-center absolute left-5 top-6 border-2 border-blue-100 shadow-sm hover:scale-105 shadow-blue-100 rounded-lg py-2 px-5">
          Wallet
        </button>
      </Link>
      <Link href={`/marketplace`}>
        <button className="text-xl mx-4 text-white text-center absolute left-32 top-6 border-2 border-blue-100 shadow-sm hover:scale-105 shadow-blue-100 rounded-lg py-2 px-5">
          MarketPlace
        </button>
      </Link>
      <div className="absolute top-4 right-5 flex items-center justify-center">
        
        <Link href={`/`}>
        <button className="border-2 text-xl border-black rounded-md shadow-sm shadow-black mx-3 px-3 py-1">
         Log Out
        </button>
        </Link>
        <FaUser className=" text-5xl text-white text-center border-2 rounded-full p-2" />
      </div>
      {children}
    </div>
  );
}