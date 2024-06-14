'use client'
import { usePathname } from "next/navigation"

import styles from "./Navbar.module.css"

export default function NavBar( ) {
  const pathname = usePathname();

  return(
    <div className= {`${styles.navbar} items-center flex w-full h-24 text-white`}>
      <div className="flex items-center justify-center font-bold px-1 w-full">
        <h2 className={`${styles.title} text-5xl text-center`}>SealIt</h2> 
      </div>
      
    </div>

  )
}