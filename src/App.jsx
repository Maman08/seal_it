// import { useEffect } from "react";
// import Artworks from "./components/Artworks";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Transactions from "./components/Transaction";
// import { getAllNFTs,isWallectConnected } from "./Blockchain.services";
// import CreateNFT from "./components/CreateNFT";
// import UpdateNFT from "./components/UpdateNFT";
// import ShowNFT from "./components/ShowNFT";
// import Loading from "./components/Loading";
// import Alert from "./components/Alert";

// const App = () => {
//     useEffect(() => {
//         const initializeApp = async () => {
//             try {
//                 await isWallectConnected();
//                 await getAllNFTs();
//             } catch (error) {
//                 console.error('Error initializing app:', error);
//             }
//         };

//         initializeApp();
//     }, []);

//     return (
//         <div className="min-h-screen">
//             <div className="gradient-bg-hero">
//                 <Header />
//                 <Hero />
//             </div>
//             <Artworks />
//             <Transactions />
//             <CreateNFT />
//             <UpdateNFT />
//             <ShowNFT />
//             <Alert />
//             <Loading />
//         </div>
//     );
// };

// export default App;




import { useEffect } from 'react';
import Artworks from './components/Artworks';
import Header from './components/Header';
import Hero from './components/Hero';
import Transactions from './components/Transaction';
import { getAllNFTs, isWallectConnected } from './Blockchain.services';
import CreateNFT from './components/CreateNFT';
import UpdateNFT from './components/UpdateNFT';
import ShowNFT from './components/ShowNFT';
import Loading from './components/Loading';
import Alert from './components/Alert';

const App = () => {
    useEffect(() => {
        const initializeApp = async () => {
            try {
                await isWallectConnected();
                await getAllNFTs();
            } catch (error) {
                console.error('Error initializing app:', error);
            }
        };

        initializeApp();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-hero">
                <Header />
                <Hero />
            </div>
            <Artworks />
            <Transactions />
            <CreateNFT />
            <UpdateNFT />
            <ShowNFT />
            <Alert />
            <Loading />
        </div>
    );
};

export default App;