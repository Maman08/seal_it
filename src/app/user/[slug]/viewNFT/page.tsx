import styles from "./viewNft.module.css"
import NftList from "./NftList";

export default function MarketPlace() {
    type detail = {
        title: string;
        bid: number;
    }

  return (
      <div className={`${styles.body} bg-[url("/images/bg-image.jpg")] bg-cover bg-no-repeat my-0 mx-4`}>
        
        <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Your NFTs
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        
    
        <NftList></NftList>
      </div>

  );
}