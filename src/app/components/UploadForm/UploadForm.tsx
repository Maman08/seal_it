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
    <form className={`flex flex-col mx-8 w-fit p-7 items-center justify-center bg-transparent backdrop-blur-sm border border-white rounded-lg shadow`}>
      <span className="text-2xl font-semibold">Upload The Document Here!</span>
      <label className={`m-2 text-sl font-medium text-gray-800`}>

        <input className={`text-sm w-60 text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-700 focus:outline-none dark:bg-gray-300 dark:border-gray-800 dark:placeholder-gray-700`} type="file" name="file" ref={fileInput} />
      </label>
      <button className={`text-2xl px-4 py-1 rounded-md border-2 bg-blue-700 border-blue-100 mt-4`} type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}