// import { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import axios from 'axios';
// import {
//   useGlobalState,
//   setGlobalState,
//   setLoadingMsg,
//   setAlert,
// } from '../stores/index.jsx';
// import { mintNFT } from '../Blockchain.services.jsx';

// const CreateNFT = () => {
//   const [modal] = useGlobalState('modal');
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [fileUrl, setFileUrl] = useState('');
//   const [imgBase64, setImgBase64] = useState(null);

//   const pinataApiKey = '884f93bdab2c29f6f957';
//   const pinataSecretApiKey = '89bfd439562b0223a2f530275c7125a3e164a3856ee401b4763c5f0a42d26bae';

//   const onChange = async (e) => {
//     const reader = new FileReader();
//     if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

//     reader.onload = (readerEvent) => {
//       const file = readerEvent.target.result;
//       setImgBase64(file);
//       setFileUrl(e.target.files[0]);
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !price || !description) return;

//     setGlobalState('modal', 'scale-0');
//     setGlobalState('loading', { show: true, msg: 'Uploading IPFS data...' });

//     try {
//       const formData = new FormData();
//       formData.append('file', fileUrl);

//       const metadata = JSON.stringify({
//         name: title,
//         keyvalues: {
//           description: description,
//         },
//       });
//       formData.append('pinataMetadata', metadata);

//       const options = JSON.stringify({
//         cidVersion: 0,
//       });
//       formData.append('pinataOptions', options);

//       const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
//         maxContentLength: 'Infinity',
//         headers: {
//           'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//           pinata_api_key: pinataApiKey,
//           pinata_secret_api_key: pinataSecretApiKey,
//         },
//       });

//       const metadataURI = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
//       const nft = { title, price, description, metadataURI };
//       setLoadingMsg('Initializing transaction...');

//       mintNFT(nft).then((res) => {
//         if (res) {
//           setFileUrl(metadataURI);
//           resetForm();
//           setAlert('Minting completed...', 'green');
//           window.location.reload();
//         }
//       });
//     } catch (error) {
//       console.log('Error uploading file: ', error);
//       setAlert('Minting failed...', 'red');
//     }
//   };

//   const closeModal = () => {
//     setGlobalState('modal', 'scale-0');
//     resetForm();
//   };

//   const resetForm = () => {
//     setFileUrl('');
//     setImgBase64(null);
//     setTitle('');
//     setPrice('');
//     setDescription('');
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-screen h-screen flex items-center
//       justify-center bg-black bg-opacity-50 transform
//       transition-transform duration-300 ${modal}`}
//     >
//       <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
//         <form className="flex flex-col">
//           <div className="flex flex-row justify-between items-center">
//             <p className="font-semibold text-gray-400">Add NFT</p>
//             <button
//               type="button"
//               onClick={closeModal}
//               className="border-0 bg-transparent focus:outline-none"
//             >
//               <FaTimes className="text-gray-400" />
//             </button>
//           </div>

//           <div className="flex flex-row justify-center items-center rounded-xl mt-5">
//             <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
//               <img
//                 alt="NFT"
//                 className="h-full w-full object-cover cursor-pointer"
//                 src={
//                   imgBase64 ||
//                   'https://tse1.mm.bing.net/th?id=OIP.MgfkQ80RdbrN8tPQWvmWpAHaEK&pid=Api&P=0&h=180'
//                 }
//               />
//             </div>
//           </div>

//           <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
//             <label className="block">
//               <span className="sr-only">Choose profile photo</span>
//               <input
//                 type="file"
//                 accept="image/png, image/gif, image/jpeg, image/webp"
//                 className="block w-full text-sm text-slate-500
//                 file:mr-4 file:py-2 file:px-4
//                 file:rounded-full file:border-0
//                 file:text-sm file:font-semibold
//                 file:bg-[#19212c] file:text-gray-400
//                 hover:file:bg-[#1d2631]
//                 cursor-pointer focus:ring-0 focus:outline-none"
//                 onChange={onChange}
//                 required
//               />
//             </label>
//           </div>

//           <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
//             <input
//               className="block w-full text-sm
//               text-slate-500 bg-transparent border-0
//               focus:outline-none focus:ring-0"
//               type="text"
//               name="title"
//               placeholder="Title"
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//               required
//             />
//           </div>

//           <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
//             <input
//               className="block w-full text-sm
//               text-slate-500 bg-transparent border-0
//               focus:outline-none focus:ring-0"
//               type="number"
//               step={0.01}
//               min={0.01}
//               name="price"
//               placeholder="Price (Eth)"
//               onChange={(e) => setPrice(e.target.value)}
//               value={price}
//               required
//             />
//           </div>

//           <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
//             <textarea
//               className="block w-full text-sm resize-none
//               text-slate-500 bg-transparent border-0
//               focus:outline-none focus:ring-0 h-20"
//               type="text"
//               name="description"
//               placeholder="Description"
//               onChange={(e) => setDescription(e.target.value)}
//               value={description}
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="flex flex-row justify-center items-center
//             w-full text-white text-md bg-[#e32970]
//             hover:bg-[#bd255f] py-2 px-5 rounded-full
//             drop-shadow-xl border border-transparent
//             hover:bg-transparent hover:text-[#e32970]
//             hover:border hover:border-[#bd255f]
//             focus:outline-none focus:ring mt-5"
//           >
//             Mint Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateNFT;




import { useGlobalState, setGlobalState, setLoadingMsg, setAlert } from '../stores/index.jsx'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'
import { mintNFT } from '../Blockchain.services'

// Pinata API credentials
const API_KEY = '13c94fbc4023cead4835'
const API_SECRET = '75adbb7a9e2c344e79c9b837367f310dc1c48e6a7fb9d73a73c1940b4efb1ca2'

// Pinata API URL
const PINATA_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS'

const CreateNFT = () => {
  const [modal] = useGlobalState('modal')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !price || !description || !fileUrl) return

    setGlobalState('modal', 'scale-0')
    setGlobalState('loading', { show: true, msg: 'Uploading IPFS data...' })

    try {
      const formData = new FormData()
      formData.append('file', fileUrl)

      const res = await axios.post(PINATA_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: API_KEY,
          pinata_secret_api_key: API_SECRET,
        },
      })

      const metadataURI = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
      const nft = { title, price, description, metadataURI }

      setLoadingMsg('Initializing transaction...')
      setFileUrl(metadataURI)
      await mintNFT(nft)

      resetForm()
      setAlert('Minting completed...', 'green')
      window.location.reload()
    } catch (error) {
      console.log('Error uploading file: ', error)
      setAlert('Minting failed...', 'red')
    }
  }

  const changeImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result
      setImgBase64(file)
      setFileUrl(e.target.files[0])
    }
  }

  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setFileUrl('')
    setImgBase64(null)
    setTitle('')
    setPrice('')
    setDescription('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src={
                  imgBase64 ||
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
                }
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#19212c] file:text-gray-400
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="price"
              placeholder="Price (Eth)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white text-md bg-[#e32970]
              hover:bg-[#bd255f] py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#e32970]
              hover:border hover:border-[#bd255f]
              focus:outline-none focus:ring mt-5"
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNFT
