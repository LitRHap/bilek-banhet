"use client";
import Navbar from "@/components/navbar";
import PreLoader from "@/components/preloader";

export default function UserProfileAbout() {
  return (
    <>
      <PreLoader />
      <Navbar pageType={"about"} />
      <main className="flex flex-col items-center h-[100vh]">
        <div className="sm:mt-[25vh] md:mt-[30vh] w-[300px] h-[50px] relative p-[0.3rem] rounded-[15px] flex items-center justify-center bg-white/20 backdrop-blur-md border-white border-2">
          <div className="text-gray-600 text-2xl font-bold uppercase">
            about project
          </div>
        </div>

        <div className="mt-4 w-[335px] h-[230px] left-0 top-0 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[96px] bg-white/20 backdrop-blur-md border-white border-2">
          <div className="w-[321px] h-[115.97px] left-[17px] top-[58.82px] text-gray-500 text-sm font-medium p-4">
            Projek ini dibuat sebagai bentuk jokes
            belaka dan merupakan bagian dari
            pembelajaran saya dalam NextJs. Jika
            Anda menikmati projek ini, jangan ragu
            untuk memberikan ⭐ pada repository
            ini. Terima kasih atas dukungannya!
            <br />
            <div className="mt-5 flex flex-row items-center w-full">
              <div className="w-[35%] h-[0.1rem] bg-gray-300" />
              <a
                href="https://github.com/SirGhazian/"
                target="_blank"
                className="mx-6 text-3xl text-gray-500 fa-brands fa-square-github"
              />
              <div className="w-[35%] h-[0.1rem] bg-gray-300" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
