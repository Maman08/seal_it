"use-client"

import styles from "./marketplace.module.css"
import NFTCard from "../components/NFTcard";

export default function MarketPlace() {
    type detail = {
        title: string;
        bid: number;
    }

  return (
      <div className={`${styles.body} bg-[url("/images/bg-image.jpg")] bg-cover bg-no-repeat my-0 mx-4`}>
        
        <div className={`text-xl mx-3 p-5`}>
          <h1>NFT Marketplace</h1>
        </div>
    
        <NFTCard></NFTCard>
      </div>
   
  );
}
