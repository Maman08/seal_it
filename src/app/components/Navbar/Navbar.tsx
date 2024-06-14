
'use client'
import { usePathname } from "next/navigation"

import styles from "./Navbar.module.css"

export default function NavBar() {
  const pathname = usePathname();

  return (
<div className="flex items-center justify-between w-full h-28 text-white p-10 bg-slate-900">     
   <h2 className={`${styles.title} text-5xl`}>SealIt</h2>
      <div className="flex items-center">
        <button className="text-xxl mr-4 font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Home</button>
        <button className="text-xxl font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Signup</button>
      </div>
    </div>
  )
}