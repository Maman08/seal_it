
// 'use client'
// import { usePathname } from "next/navigation"
// import { useRouter } from 'next/navigation'
// import styles from "./Navbar.module.css"

// export default function NavBar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
// <div className="flex items-center justify-between w-full h-28 text-white p-10 bg-slate-900">     
//    <h2 className={`${styles.title} text-5xl`}>SealIt</h2>
//       <div className="flex items-center">
//         <button onClick={() => router.push('/')} className="text-xxl mr-4 font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Home</button>
//         <button onClick={() => router.push('/login')} className="text-xxl font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Login</button>
//       </div>
//     </div>
//   )
// }
'use client'
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import toast from 'react-hot-toast';
import styles from "./Navbar.module.css"; // Import custom CSS module for styles
import { any } from 'zod';

const Navbar = () => {
  const [user, setUser] = useState(null); // Use state to track the user's authentication state
  const router = useRouter();

  // Add a useEffect to listen for changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user); // Update the user state when the authentication state changes
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    // Sign out the user
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Sign out successful");
      router.push(`/`);
    }).catch((error) => {
      // An error happened.
      console.error(error);
      toast.error("Unable to sign out");
    });

    // After successful sign-out, you can also clear the user state if needed
    setUser(null);
  };

  return (
    <div className="flex items-center justify-between w-full h-28 text-white p-10 bg-slate-900">
      <h2 className={`${styles.title} text-5xl`}>SealIt</h2>
      <div className="flex items-center">
        <button onClick={() => router.push('/')} className="text-xxl mr-4 font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Home</button>
        {user ? (
          <button onClick={handleSignOut} className="text-xxl font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Sign Out</button>
        ) : (
          <button onClick={() => router.push('/login')} className="text-xxl font-bold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out">Login</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;