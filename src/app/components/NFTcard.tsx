"use client";
import styles from "./nft.module.css";
type detail = {
  title: string;
  bid: number;
};
const NFT_details = [
  {
    title: "NFT Title 1",
    bid: 1,
  },
  {
    title: "NFT Title 2",
    bid: 2,
  },
  {
    title: "NFT Title 2",
    bid: 2,
  },
  {
    title: "NFT Title 2",
    bid: 2,
  },
];

export default function NFTCard() {
  return (
    <div id="main" className={`${styles.container}`}>
      {NFT_details.map((detail: detail) => (
        <div id="main" className={`mx-4 my-24`}>
          <div className={`${styles.nft} backdrop-blur-xl`}>

            <h2 className="text-2xl">{detail.title}</h2>
            <p className="text-lg">{`Starting Bid: ${detail.bid} ETH`}</p>
            <button className={`${styles.nft_button}`}>Buy Now</button>
            <button className={`${styles.nft_button}`}>Sell</button>
            <button className={`${styles.nft_button}`}>Bid</button>
          </div>
        </div>
      ))}
    </div>
  );
}
