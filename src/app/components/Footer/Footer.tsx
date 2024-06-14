
import React from 'react';
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className= {`text-white ${styles.footer} flex items-center justify-center text-center w-full relative bottom-0`}>
            <p className="text-5xl font-bold ">#SealTheFuture</p>
        </div>
    )
}
