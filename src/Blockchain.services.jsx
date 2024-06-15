// import Web3 from "web3";
// import { setGlobalState, getGlobalState, setAlert } from './stores/index';
// import abi from "./abis/TimelessNFT.json";

// const { ethereum } = window;

// if (ethereum) {
//     window.web3 = new Web3(ethereum);
//     window.web3 = new Web3(window.web3.currentProvider);
// } else {
//     alert('Please install MetaMask');
// }

// const getEthereumContract = async () => {
//     const connectedAccount = getGlobalState('connectedAccount');
//     if (connectedAccount) {
//         const web3 = window.web3;
//         const networkId = await web3.eth.net.getId();
//         const networkData = abi.networks[networkId];
//         if (networkData) {
//             const contract = new web3.eth.Contract(abi.abi, networkData.address);
//             return contract;
//         } else {
//             return null;
//         }
//     } else {
//         return getGlobalState('contract');
//     }
// };

// const connectWallet = async () => {
//     try {
//         if (!ethereum) return alert('Please install MetaMask');
        
//         const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//         setGlobalState('connectedAccount', accounts[0].toLowerCase());
//     } catch (error) {
//         reportError(error);
//     }
// };

// const isWalletConnected = async () => {
//     try {
//         if (!ethereum) return alert('Please install MetaMask');
        
//         const accounts = await ethereum.request({ method: 'eth_accounts' });
        
//         window.ethereum.on('chainChanged', async(chainId) => {
//             window.location.reload();
//         });

//         window.ethereum.on('accountsChanged', async () => {
           
//                 setGlobalState('connectedAccount', accounts[0].toLowerCase());
//                 await isWalletConnected();
//             if(accounts.length){
//                 setGlobalState('connectedAccount', accounts[0].toLowerCase());
//             }else{
//                 alert('Please connect wallet');
//                 console.log("No Ethereum account found");
//             }
//         });

//         if (accounts.length > 0) {
//             setGlobalState('connectedAccount', accounts[0].toLowerCase());
//         } else {
//             alert('Please connect wallet');
//             console.log("No Ethereum account found");
//         }
//     } catch (error) {
//         reportError(error);
//     }
// };

// const mintNFT = async ({ title, description, metadataURI, price }) => {
//     try {
//         price = window.web3.utils.toWei(price.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');
//         const mintPrice = window.web3.utils.toWei('0.001', 'ether');

//         await contract.methods.payToMint(title, description, metadataURI, price).send({ from: connectedAccount, value: mintPrice });
//         return true;
//     } catch (error) {
//         reportError(error);
//         return false; 
//     }
// };

// const updateNFT=async({id,cost})=>{
//   try{
//     cost = window.web3.utils.toWei(price.toString(), 'ether');
//     const contract = await getEthereumContract();
//     const connectedAccount = getGlobalState('connectedAccount');

//     await contract.methods.changePrice(Number(id),cost).send({from:connectedAccount})
//   }catch(error){
//     reportError(error);

//   }
// }



// const buyNFT=async({id,cost})=>{
//     try{
//         cost = window.web3.utils.toWei(price.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');

//         await contract.methods.changePrice(Number(id),cost).send({from:connectedAccount})
//     }catch(error){
//         reportError(error);
//     }
// }


// const getAllNFTs = async () => {
//     try {
//         if (!ethereum) return alert('Please install MetaMask');
        
//         const contract = await getEthereumContract();
//         const nfts = await contract.methods.getAllNFTs().call();
//         const transactions = await contract.methods.getAllTransactions().call();
        
//         setGlobalState('nfts', structuredNfts(nfts));
//         setGlobalState('transactions', structuredNfts(transactions));
//     } catch (error) {
//         reportError(error);
//     }
// };

// const structuredNfts = (nfts) => {
//     return nfts.map((nft) => ({
//         id: Number(nft.id),
//         owner: nft.owner.toLowerCase(),
//         cost: window.web3.utils.fromWei(nft.cost),
//         title: nft.title,
//         metadataURI: nft.metadataURI,
//         timestamp: nft.timestamp,
//     })).reverse();
// };


// const reportError = (error) => {
//     setAlert(JSON.stringify(error), 'red');
//     throw new Error('No Ethereum object');
// };

// export { connectWallet, isWalletConnected ,mintNFT,getAllNFTs,updateNFT,buyNFT};


// import Web3 from "web3";
// import { setGlobalState, getGlobalState, setAlert } from './stores/index';
// import abi from "./abis/TimelessNFT.json";

// const { ethereum } = window;

// if (ethereum) {
//     window.web3 = new Web3(ethereum);
//     window.web3 = new Web3(window.web3.currentProvider);
// } else {
//     alert('Please install MetaMask');
// }

// const getEthereumContract = async () => {
//     const connectedAccount = getGlobalState('connectedAccount');
//     if (connectedAccount) {
//         const web3 = window.web3;
//         const networkId = await web3.eth.net.getId();
//         const networkData = abi.networks[networkId];
//         if (networkData) {
//             const contract = new web3.eth.Contract(abi.abi, networkData.address);
//             return contract;
//         } else {
//             throw new Error('Smart contract not deployed to detected network.');
//         }
//     } else {
//         return getGlobalState('contract');
//     }
// };

// const connectWallet = async () => {
//     try {
//         if (!ethereum) throw new Error('MetaMask is not installed');

//         const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//         setGlobalState('connectedAccount', accounts[0].toLowerCase());
//     } catch (error) {
//         reportError(error);
//     }
// };

// const isWalletConnected = async () => {
//     try {
//         if (!ethereum) throw new Error('MetaMask is not installed');
        
//         const accounts = await ethereum.request({ method: 'eth_accounts' });
        
//         ethereum.on('chainChanged', () => {
//             window.location.reload();
//         });

//         ethereum.on('accountsChanged', async (newAccounts) => {
//             if (newAccounts.length > 0) {
//                 setGlobalState('connectedAccount', newAccounts[0].toLowerCase());
//                 await isWalletConnected();
//             } else {
//                 setGlobalState('connectedAccount', null);
//                 alert('Please connect wallet');
//                 console.log("No Ethereum account found");
//             }
//         });

//         if (accounts.length > 0) {
//             setGlobalState('connectedAccount', accounts[0].toLowerCase());
//         } else {
//             alert('Please connect wallet');
//             console.log("No Ethereum account found");
//         }
//     } catch (error) {
//         reportError(error);
//     }
// };

// const mintNFT = async ({ title, description, metadataURI, price }) => {
//     try {
//         price = window.web3.utils.toWei(price.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');
//         const mintPrice = window.web3.utils.toWei('0.001', 'ether');

//         await contract.methods.payToMint(title, description, metadataURI, price).send({ from: connectedAccount, value: mintPrice });
//         return true;
//     } catch (error) {
//         reportError(error);
//         return false;
//     }
// };

// const updateNFT = async ({ id, cost }) => {
//     try {
//         cost = window.web3.utils.toWei(cost.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');

//         await contract.methods.changePrice(Number(id), cost).send({ from: connectedAccount });
//     } catch (error) {
//         reportError(error);
//     }
// };


// const buyNFT = async ({ id, cost }) => {
//     try {
//         const web3 = window.web3;
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');

//         const costInWei = web3.utils.toWei(cost.toString(), 'ether');

//         await contract.methods.purchaseNFT(Number(id)).send({
//             from: connectedAccount,
//             value: costInWei,
//         });

//         return true;
//     } catch (error) {
//         reportError(error);
//         return false;
//     }
// };



// const getAllNFTs = async () => {
//     try {
//         if (!ethereum) throw new Error('MetaMask is not installed');
        
//         const contract = await getEthereumContract();
//         const nfts = await contract.methods.getAllNFTs().call();
//         const transactions = await contract.methods.getAllTransactions().call();
        
//         setGlobalState('nfts', structuredNfts(nfts));
//         setGlobalState('transactions', structuredNfts(transactions));
//     } catch (error) {
//         reportError(error);
//     }
// };

// const structuredNfts = (nfts) => {
//     return nfts.map((nft) => ({
//         id: Number(nft.id),
//         owner: nft.owner.toLowerCase(),
//         cost: window.web3.utils.fromWei(nft.cost),
//         title: nft.title,
//         metadataURI: nft.metadataURI,
//         timestamp: nft.timestamp,
//     })).reverse();
// };

// const reportError = (error) => {
//     setAlert(JSON.stringify(error), 'red');
//     throw new Error('No Ethereum object');
// };

// export { connectWallet, isWalletConnected, mintNFT, getAllNFTs, updateNFT, buyNFT };



// import Web3 from "web3";
// import { setGlobalState, getGlobalState, setAlert } from './stores/index';
// import abi from "./abis/TimelessNFT.json";

// const { ethereum } = window;

// if (ethereum) {
//     window.web3 = new Web3(ethereum);
//     window.web3 = new Web3(window.web3.currentProvider);
// } else {
//     alert('Please install MetaMask');
// }

// const getEthereumContract = async () => {
//     if (typeof window.ethereum === 'undefined') {
//         throw new Error('MetaMask is not installed');
//     }

//     const connectedAccount = getGlobalState('connectedAccount');
//     if (connectedAccount) {
//         const web3 = new Web3(window.ethereum);
//         const networkId = await web3.eth.net.getId();
//         const networkData = abi.networks[networkId];
//         if (networkData) {
//             const contract = new web3.eth.Contract(abi.abi, networkData.address);
//             return contract;
//         } else {
//             throw new Error('Smart contract not deployed to detected network.');
//         }
//     } else {
//         return getGlobalState('contract');
//     }
// };

// const connectWallet = async () => {
//     try {
//         if (typeof window.ethereum === 'undefined') throw new Error('MetaMask is not installed');

//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setGlobalState('connectedAccount', accounts[0].toLowerCase());
//     } catch (error) {
//         reportError(error);
//     }
// };

// const isWalletConnected = async () => {
//     try {
//         if (typeof window.ethereum === 'undefined') throw new Error('MetaMask is not installed');
        
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        
//         window.ethereum.on('chainChanged', () => {
//             window.location.reload();
//         });

//         window.ethereum.on('accountsChanged', async (newAccounts) => {
//             if (newAccounts.length > 0) {
//                 setGlobalState('connectedAccount', newAccounts[0].toLowerCase());
//                 await isWalletConnected();
//             } else {
//                 setGlobalState('connectedAccount', null);
//                 alert('Please connect wallet');
//             }
//         });

//         if (accounts.length > 0) {
//             setGlobalState('connectedAccount', accounts[0].toLowerCase());
//         } else {
//             alert('Please connect wallet');
//         }
//     } catch (error) {
//         reportError(error);
//     }
// };

// const mintNFT = async ({ title, description, metadataURI, price }) => {
//     try {
//         price = window.web3.utils.toWei(price.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');
//         const mintPrice = window.web3.utils.toWei('0.001', 'ether');

//         await contract.methods.payToMint(title, description, metadataURI, price).send({ from: connectedAccount, value: mintPrice });
//         return true;
//     } catch (error) {
//         reportError(error);
//         return false;
//     }
// };

// const updateNFT = async ({ id, cost }) => {
//     try {
//         cost = window.web3.utils.toWei(cost.toString(), 'ether');
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');

//         await contract.methods.changePrice(Number(id), cost).send({ from: connectedAccount });
//     } catch (error) {
//         reportError(error);
//     }
// };

// const buyNFT = async ({ id, cost }) => {
//     try {
//         const web3 = window.web3;
//         const contract = await getEthereumContract();
//         const connectedAccount = getGlobalState('connectedAccount');

//         const costInWei = web3.utils.toWei(cost.toString(), 'ether');

//         await contract.methods.purchaseNFT(Number(id)).send({
//             from: connectedAccount,
//             value: costInWei,
//         });

//         return true;
//     } catch (error) {
//         reportError(error);
//         return false;
//     }
// };

// const getAllNFTs = async () => {
//     try {
//         if (!ethereum) throw new Error('MetaMask is not installed');
        
//         const contract = await getEthereumContract();
//         const nfts = await contract.methods.getAllNFTs().call();
//         const transactions = await contract.methods.getAllTransactions().call();
        
//         setGlobalState('nfts', structuredNfts(nfts));
//         setGlobalState('transactions', structuredNfts(transactions));
//     } catch (error) {
//         reportError(error);
//     }
// };

// const structuredNfts = (nfts) => {
//     return nfts.map((nft) => ({
//         id: Number(nft.id),
//         owner: nft.owner.toLowerCase(),
//         cost: window.web3.utils.fromWei(nft.cost),
//         title: nft.title,
//         metadataURI: nft.metadataURI,
//         timestamp: nft.timestamp,
//     })).reverse();
// };

// const reportError = (error) => {
//     console.error('Error:', error);
//     setAlert(JSON.stringify(error), 'red');
//     throw new Error('No Ethereum object');
// };

// export { connectWallet, isWalletConnected, mintNFT, getAllNFTs, updateNFT, buyNFT };



import Web3 from 'web3'
import { setGlobalState, getGlobalState, setAlert } from './stores/index'
import abi from './abis/TimelessNFT.json'
import ii1 from "./images/i11.jpg"
import ii2 from "./images/ii2.jpg"
import ii3 from "./images/ii3.jpg"
const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

const getEtheriumContract = async () => {
  const web3 = window.web3
  const networkId = await web3.eth.net.getId()
  const networkData = abi.networks[networkId]

  if (networkData) {
    const contract = new web3.eth.Contract(abi.abi, networkData.address)
    return contract
  } else {
    return null
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return reportError('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0].toLowerCase())
  } catch (error) {
    reportError(error)
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) return reportError('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0].toLowerCase())
      await isWallectConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0].toLowerCase())
    } else {
      setGlobalState('connectedAccount', '')
      reportError('Please connect wallet.')
    }
  } catch (error) {
    reportError(error)
  }
}

const structuredNfts = (nfts) => {
  return nfts
    .map((nft) => ({
      id: Number(nft.id),
      owner: nft.owner.toLowerCase(),
      cost: window.web3.utils.fromWei(nft.cost),
      title: nft.title,
      description: nft.description,
      metadataURI: nft.metadataURI,
      timestamp: nft.timestamp,
    }))
    .reverse()
}
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
  
  
  const getAllNFTs = async () => {
    try {
      if (!window.ethereum) return alert('Please install Metamask');
  
      const contract = await getEtheriumContract();
      const nfts = await contract.methods.getAllNFTs().call();
      const structuredNFTs = nfts.map((nft) => ({
        title: nft.title,
        description: nft.description,
        metadataURI: nft.metadataURI,
        price: window.web3.utils.fromWei(nft.price, 'ether'),
        owner: nft.owner
      }));
  
      // Combine static and dynamic NFTs
      const allNFTs = [...staticNFTs, ...structuredNFTs];
  
      setGlobalState('nfts', allNFTs);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      reportError(error);
    }
  };
  

const mintNFT = async ({ title, description, metadataURI, price }) => {
  try {
    price = window.web3.utils.toWei(price.toString(), 'ether')
    const contract = await getEtheriumContract()
    const account = getGlobalState('connectedAccount')
    const mintPrice = window.web3.utils.toWei('0.001', 'ether')

    await contract.methods
      .payToMint(title, description, metadataURI, price)
      .send({ from: account, value: mintPrice })

    return true
  } catch (error) {
    reportError(error)
  }
}

const buyNFT = async ({ id, cost }) => {
  try {
    cost = window.web3.utils.toWei(cost.toString(), 'ether')
    const contract = await getEtheriumContract()
    const buyer = getGlobalState('connectedAccount')

    await contract.methods
      .payToBuy(Number(id))
      .send({ from: buyer, value: cost })

    return true
  } catch (error) {
    reportError(error)
  }
}

const updateNFT = async ({ id, cost }) => {
  try {
    cost = window.web3.utils.toWei(cost.toString(), 'ether')
    const contract = await getEtheriumContract()
    const buyer = getGlobalState('connectedAccount')

    await contract.methods.changePrice(Number(id), cost).send({ from: buyer })
  } catch (error) {
    reportError(error)
  }
}

const reportError = (error) => {
  setAlert(JSON.stringify(error), 'red')
}

export {
  getAllNFTs,
  connectWallet,
  mintNFT,
  buyNFT,
  updateNFT,
  isWallectConnected,
}