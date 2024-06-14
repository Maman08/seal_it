"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../src/app/components/Navbar/Navbar";
export default function Home() {
  const router = useRouter();
  const getStarted = () => {
    router.push("/login");
  };

  return (
    <>
    <Navbar />
<main className="flex flex-col items-center justify-between p-12  min-h-screen text-white bg-[url('/images/yuki.jpg')] bg-cover bg-no-repeat">      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl glass-morph p-10 gap-10 sm:p-4">
        <section className="text-center mb-12 ">
          <h6 className="text-m md:text-2xl lg:3xl font-extrabold mb-10 mt-20 sm:text-xl  ">
          The E2E Platform for Sealing
          </h6>
          <p className="text-lg mb-8 md:text-xl font-serif  ">
          Modernizing Government Document 
          Management with Blockchain Solutions
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white"
            onClick={getStarted}
          >
            Get Started
          </button>
        </section>
        <img
          src="../images/alfiya2.png"
          alt="My Image"
          className="mainImage place-self-center h-80 "
        />
      </section>

      <h1 className="features mt-32 text-2xl  md:text-3xl font-sans mb-10">
        Know More
      </h1>
{/* </main> */}
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-8 w-full max-w-7xl justify-items-center main-dabba md:mt-4">
        {/* Feature Card 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba ">
              <h3 className="text-xl font-semibold my-4">
              Trading Legally Owned Items with Minimum Hassle
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Simplifies the transfer process, reducing paperwork and intermediary involvement.  

              </p>
              <p className="text-white text-left rtl:text-right">
                • Blockchain provides a clear, immutable record of transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
              Digital Wallets for Essential Documents
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Eliminates the need to carry physical documents.

              </p>
              <p className="text-white text-left rtl:text-right">
                • Documents can be accessed and shared easily via mobile devices.

              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
              One-Time Payment for Blockchain Storage:
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                •  Instead of recurring cloud storage fees, offer a one-time payment model for data storage on the blockchain.

              </p>
              <p className="text-white text-left rtl:text-right">
                {/* • Effortless access to attendance records for students and
                tutors alike. */}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 4 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
              Verification and Storage of Old Documents
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Digitize and store old documents of ownership (stocks, mutual funds, etc.) on the blockchain.

              </p>
              <p className="text-white text-left rtl:text-right">
                • Protects against loss, damage, or forgery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );

}
