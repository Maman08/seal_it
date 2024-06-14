"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
export default function User({ params }: { params: { slug: string } }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full flex-row justify-around">
        <UploadForm />

        <div className="max-w-sm h-72 p-6 pt-16 mx-8 bg-transparent backdrop-blur-sm border border-gray-200 rounded-lg shadow">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
              View NFTs
            </h5>
          </a>
          <p className="mb-3 font-normal text-white dark:text-gray-400">
            View all your documents stored here.
          </p>
          <a
            href="/user"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Click here
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
          </a>
        </div>
      </div>

      <a
        href="#"
        className="flex flex-col mt-10 mx-auto items-center bg-transparent backdrop-blur-sm bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className=" object-cover w-full rounded-t-lg m-0 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/images/nft-img.jpg"
          alt="img"
        ></img>
        <div className="flex flex-col justify-center p-4 leading-normal h-72">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
            Buy/Sell/Bid in Market Place!
          </h5>
          <p className="mb-3 font-normal text-wrap text-white dark:text-gray-400">
          Specialized NFT marketplace for documents enables users to buy, sell, and bid on documents, 
          ensuring secure and transparent transactions through blockchain technology. 
          </p>
        </div>
      </a>
    </div>
  );
}
