"use client"

import { FaUserGear } from "react-icons/fa6";

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="p-8 h-full overflow-scroll m-0">
            <button className="text-xl mx-4 text-white text-center absolute left-56 top-6 border-2 border-blue-100 shadow-sm hover:scale-105 shadow-blue-100 rounded-lg py-2 px-5">Wallet</button>
            <FaUserGear className=" text-6xl text-white text-center absolute top-6 right-5 border-2 rounded-full p-2" />
            {children}
        </div>
        
    )
}