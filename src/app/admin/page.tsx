"use client";
import React, { useEffect, useState } from "react";

import Table from "./table";
export default async function Admin() {
    type doc = {
        id: string;
        type: string;
        user_id: string;
        src: string;
        name: string;
    };
    const Docs = [
        {
            id: "1",
            type: "Property Doc",
            user_id: "1",
            src: "user",
            name: "Property Doc",
          },
          {
            id: "1",
            type: "Property Doc",
            user_id: "1",
            src: "user",
            name: "Property Doc",
          },
          {
            id: "1",
            type: "Property Doc",
            user_id: "1",
            src: "user",
            name: "Property Doc",
          },
          {
            id: "1",
            type: "Property Doc",
            user_id: "1",
            src: "user",
            name: "Property Doc",
          },
          {
            id: "1",
            type: "Property Doc",
            user_id: "1",
            src: "user",
            name: "Property Doc",
          },
    ];
   
    let alertText = "New Documents to be Verified!"
    if(Docs.length!=0) {
     
        alertText = "New Documents to be Verified!"
    } else {
    
        alertText = "No New Documents!"
    }


  return (

    <div className=" flex flex-col m-8 overflow-scroll scroll-auto  text-white">
        <span className="mb-4 px-4 text-3xl  bg-black shadow-md shadow-black w-fit">
            <p className="text-2xl font-semibold ">{alertText}</p>
        </span>
        <div ></div>
        <Table />

    </div>
  );
}
