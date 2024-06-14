"use client";
import { useRef } from "react";
import styles from "./upload.module.css";
export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <form className={`flex flex-col mx-auto w-fit p-7 items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600`}>
      <span className="text-xl">Upload The Document Here!</span>
      <label className={`mb-2 text-sm font-medium text-gray-900 dark:text-white`}>
        
        <input className={`text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400`} type="file" name="file" ref={fileInput} />
      </label>
      <button className={`text-2xl px-4 py-1 rounded-full border-2 border-blue-100 shadow-sm shadow-blue-100 mt-4`} type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}