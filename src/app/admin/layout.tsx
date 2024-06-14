"use client"
import styles from "./layout.module.css"
import { FaUserGear } from "react-icons/fa6";
import Link from "next/link"


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className={`${styles.background} p-8 h-full overflow-scroll m-0`}>
      <Link href={`/admin/wallet`}>
        <button className="text-xl mx-4 text-white text-center absolute left-5 top-6 border-2 border-blue-100 shadow-sm hover:scale-105 shadow-blue-100 rounded-lg py-2 px-5">
          Wallet
        </button>
      </Link>
      <div className="absolute top-6 right-5 flex ">
        <FaUserGear className=" text-6xl text-white text-center border-2 rounded-full p-2" />
        
        <Link href={`/`}>
        <button className="border-2 text-xl border-black rounded-md shadow-sm shadow-black ml-3 px-3 py-1">
         Log Out
        </button>
        </Link>
      </div>

  
      {children}
    </div>
  );
}