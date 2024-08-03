"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popupOpen = () => setIsPopupOpen(true);
  const popupClose = () => setIsPopupOpen(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline bg-center">
        Hello world welcome to my exercise!
      </h1>
      
      <input 
        type="button" 
        className="s3-btn bg-blue-500 text-white py-2 px-4 rounded" 
        name="Open" 
        onClick={popupOpen} 
        value="Click to Show Popup" 
      />

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
            <input 
              type="button" 
              name="Close" 
              className="s3-btn-close bg-red-500 text-white py-1 px-3 rounded absolute top-2 right-2" 
              onClick={popupClose} 
              value="×" 
            />
            <h2 className="text-2xl mb-4 text-blue-500 ">This is a popup</h2>
            <p className="mb-4 text-blue-500">Hey I am a popup working with JavaScript</p>
          </div>
        </div>
      )}

    </main>
  );
}
