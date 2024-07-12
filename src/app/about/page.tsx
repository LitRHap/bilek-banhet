"use client";
import Navbar from "@/components/navbar";
import { easeInOut, motion } from "framer-motion";

export default function UserProfileAbout() {
  return (
    <>
      <Navbar pageType={"about"} />
      <main className="flex flex-col items-center justify-center min-h-[100vh]">
        <div className="w-[300px] h-[50px] relative p-[0.3rem] bg-white rounded-[15px] flex items-center justify-center">
          <div className="text-black text-2xl font-bold uppercase">
            about project
          </div>
        </div>

        <div className="mt-4 w-[335px] h-[200px]">
          <div className="w-[335px] h-[230px] left-0 top-0 bg-white rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[96px]">
            <div className="w-[321px] h-[115.97px] left-[17px] top-[58.82px] text-gray-400 text-sm font-medium p-4">
              Projek ini dibuat sebagai bentuk
              candaan belaka dan merupakan bagian
              dari pembelajaran saya dalam
              Next.js. Jika Anda menikmati projek
              ini, jangan ragu untuk memberikan ⭐
              pada repository ini. Terima kasih
              atas dukungannya!
              <br />
              <div className="mt-5 flex flex-row items-center w-full">
                <div className="w-[20%] h-[0.1rem] bg-gray-300" />
                <motion.a
                  href="https://github.com/SirGhazian/"
                  target="_blank"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.1,
                    ease: easeInOut,
                  }}
                  className="mx-6 text-3xl fa-brands fa-square-github"
                />
                <div className="w-[40%] h-[0.1rem] bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
