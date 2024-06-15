

// import { useEffect, useState } from 'react';
// import { setGlobalState, useGlobalState, truncate } from '../stores/index';

// const Artworks = () => {
//   const [nfts] = useGlobalState('nfts');
//   const [end, setEnd] = useState(4);
//   const [count] = useState(4);
//   const [collection, setCollection] = useState([]);

//   const setNFT = (nft) => {
//     setGlobalState('nft', nft);
//     setGlobalState('showModal', 'scale-100');
//   };

//   const getCollection = () => {
//     return nfts.slice(0, end);
//   };

//   useEffect(() => {
//     setCollection(getCollection());
//   }, [nfts, end]);

//   return (
//     <div className="bg-[#151c25] gradient-bg-artworks">
//       <div className="w-4/5 py-10 mx-auto">
//         <h4 className="text-white text-3xl font-bold uppercase text-gradient">
//           {nfts.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
//         </h4>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
//           {nfts.map((nft) => (
//             <div
//               key={nft.id}
//               className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3"
//             >
//               {nft.metadataURI && (
//                 <img
//                   src={nft.metadataURI}
//                   alt={nft.title ? truncate(nft.title, 6) : 'No Title'}
//                   className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
//                 />
//               )}
//               <h4 className="text-white font-semibold">{nft.title}</h4>
//               <p className="text-gray-400 text-xs my-1">
//                 {nft.description ? truncate(nft.description) : 'No Description'}
//               </p>
//               <div className="flex justify-between items-center mt-3 text-white">
//                 <div className="flex flex-col">
//                   <small className="text-xs">Current Price</small>
//                   <p className="text-sm font-semibold">{nft.cost} ETH</p>
//                 </div>

//                 <button
//                   onClick={() => setNFT(nft)}
//                   className="shadow-lg shadow-black text-white text-sm bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {nfts.length > 0 && nfts.length > collection.length ? (
//           <div className="text-center my-5">
//             <button
//               className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full cursor-pointer p-2"
//               onClick={() => setEnd(end + count)}
//             >
//               Load More
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default Artworks;



// import { useEffect, useState } from 'react'
// import { setGlobalState, useGlobalState } from '../stores/index'

// const Artworks = () => {
//   const [nfts] = useGlobalState('nfts')
//   const [end, setEnd] = useState(4)
//   const [count] = useState(4)
//   const [collection, setCollection] = useState([])

//   const getCollection = () => {
//     return nfts.slice(0, end)
//   }

//   useEffect(() => {
//     setCollection(getCollection())
//   }, [nfts, end])

//   return (
//     <div className="bg-[#151c25] gradient-bg-artworks">
//       <div className="w-4/5 py-10 mx-auto">
//         <h4 className="text-white text-3xl font-bold uppercase text-gradient">
//           {nfts.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
//         </h4>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
//           {nfts.map((nft, i) => (
//             <Card key={i} nft={nft} />
//           ))}
//         </div>

//         {nfts.length > 0 && nfts.length > collection.length ? (
//           <div className="text-center my-5">
//             <button
//               className="shadow-xl shadow-black text-white
//             bg-[#e32970] hover:bg-[#bd255f]
//             rounded-full cursor-pointer p-2"
//               onClick={() => setEnd(end + count)}
//             >
//               Load More
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// const Card = ({ nft }) => {
//   const setNFT = () => {
//     setGlobalState('nft', nft)
//     setGlobalState('showModal', 'scale-100')
//   }

//   return (
//     <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
//       <img
//         src={nft.metadataURI}
//         alt={nft.title}
//         className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
//       />
//       <h4 className="text-white font-semibold">{nft.title}</h4>
//       <p className="text-gray-400 text-xs my-1">{nft.description}</p>
//       <div className="flex justify-between items-center mt-3 text-white">
//         <div className="flex flex-col">
//           <small className="text-xs">Current Price</small>
//           <p className="text-sm font-semibold">{nft.cost} ETH</p>
//         </div>

//         <button
//           className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
//             hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
//           onClick={setNFT}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Artworks



// import { useEffect, useState } from 'react';
// import { setGlobalState, useGlobalState } from '../stores/index';

// const Artworks = () => {
//   const [nfts] = useGlobalState('nfts');
//   const [end, setEnd] = useState(4);
//   const [count] = useState(4);
//   const [collection, setCollection] = useState([]);

//   useEffect(() => {
//     setCollection(nfts.slice(0, end));
//   }, [nfts, end]);

//   return (
//     <div className="bg-[#151c25] gradient-bg-artworks">
//       <div className="w-4/5 py-10 mx-auto">
//         <h4 className="text-white text-3xl font-bold uppercase text-gradient">
//           {nfts.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
//         </h4>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
//           {collection.map((nft, i) => (
//             <Card key={i} nft={nft} />
//           ))}
//         </div>

//         {nfts.length > collection.length && (
//           <div className="text-center my-5">
//             <button
//               className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full cursor-pointer p-2"
//               onClick={() => setEnd(end + count)}
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Card = ({ nft }) => {
//   const setNFT = () => {
//     setGlobalState('nft', nft);
//     setGlobalState('showModal', 'scale-100');
//   };

//   return (
//     <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
//       <img
//         src={nft.metadataURI}
//         alt={nft.title}
//         className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
//       />
//       <h4 className="text-white font-semibold">{nft.title}</h4>
//       <p className="text-gray-400 text-xs my-1">{nft.description}</p>
//       <div className="flex justify-between items-center mt-3 text-white">
//         <div className="flex flex-col">
//           <small className="text-xs">Current Price</small>
//           <p className="text-sm font-semibold">{nft.price} ETH</p>
//         </div>

//         <button
//           className="shadow-lg shadow-black text-white text-sm bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
//           onClick={setNFT}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Artworks;
import React, { useEffect, useState } from 'react';
import { setGlobalState, useGlobalState } from '../stores/index';
import ii1 from "../images/i11.jpg";
import ii2 from "../images/ii2.jpg";
import ii3 from "../images/ii3.jpg";

const Artworks = () => {
  const [nfts] = useGlobalState('nfts');
  const [end, setEnd] = useState(4);
  const [count] = useState(4);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(nfts.slice(0, end));
  }, [nfts, end]);

  // Define static NFT data
  const staticNFTs = [
    {
      title: "Ethereum Astronaut",
      description: "A digital artwork depicting an astronaut in space, representing the Ethereum blockchain technology.",
      image: ii1,
      price: "0.5",
      owner: "0x1234567890abcdef1234567890abcdef12345678"
    },
    {
      title: "Digital Art - The Blockchain Era",
      description: "A masterpiece digital art that symbolizes the era of blockchain technology and its impact on creativity.",
      image: ii2,
      price: "1.0",
      owner: "0xabcdef1234567890abcdef1234567890abcdef12"
    },
    {
      title: "Abstract Digital NFT",
      description: "An abstract digital NFT showcasing the limitless creativity of digital art on the blockchain.",
      image: ii3,
      price: "0.75",
      owner: "0xabcdef1234567890abcdef1234567890abcdef13"
    }
  ];

  // Merge static NFTs with dynamic NFTs from global state
  const allNFTs = [...staticNFTs, ...nfts];

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          {allNFTs.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>

        {allNFTs.length > collection.length && (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft);
    setGlobalState('showModal', 'scale-100');
  };

  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <img
        src={nft.image} // Use image source directly here
        alt={nft.title}
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      />
      <h4 className="text-white font-semibold">{nft.title}</h4>
      <p className="text-gray-400 text-xs my-1">{nft.description}</p>
      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">{nft.price} ETH</p>
        </div>

        <button
          className="shadow-lg shadow-black text-white text-sm bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
          onClick={setNFT}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Artworks;
