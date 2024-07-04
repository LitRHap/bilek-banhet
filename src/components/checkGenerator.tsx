"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import listData from "../data/listData";
import { useState } from "react";
import {
  variants1,
  variants2,
  variants3,
} from "../components/framer-motion/variant";

export default function CekBrainrot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasilNama, setNama] = useState("");
  let [namaUser, setNamaUser] = useState("");
  const [hasilRarity, setRarity] = useState(0);
  const [isClicked, setIsClicked] =
    useState(true);

  // fungsi play sfx
  function playSFX(indexSong: number) {
    const audioFiles = [
      "/audio/spin_sfx.WAV", // 0
      "/audio/tier_bad.WAV", // 1
      "/audio/tier_good.WAV", // 2
      "/audio/tier_best.WAV", // 3
    ];

    const audio = new Audio(
      audioFiles[indexSong]
    );

    if (indexSong == 0) {
      audio.volume = 0.3;
    } else {
      audio.volume = 0.8;
    }
    audio.play();
  }

  // fungsi async
  async function randomList() {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    // menyimpan angka random untuk index array
    let random;
    let hasilFinal = 0;

    // cek apakah ditekan
    if (isClicked) {
      // set tekan ke false (menghindari spam click)
      setIsClicked(false);

      // lopping angka secara random
      for (let index = 0; index < 30; index++) {
        random = Math.floor(
          Math.random() * listData.length
        );

        if (index % 2 == 0) {
          playSFX(0);
        }

        // delay 0.1 detik
        await new Promise((resolve) =>
          setTimeout(resolve, 100)
        );

        // passing angka ke array agar dapat digunakan sebagai index data ke
        random = Number(random);
        console.log(listData[random].nama);

        setNama(listData[random].nama);
        setRarity(listData[random].rarity);
        hasilFinal = listData[random].rarity;
      }

      if (hasilFinal >= 95) {
        playSFX(3);
      } else if (
        hasilFinal >= 80 &&
        hasilFinal < 95
      ) {
        playSFX(2);
      } else {
        playSFX(1);
      }
    }

    // jike proses selesai, maka kembalikan keadaan
    if (isClicked) {
      setIsClicked(true);
    }
  }

  return (
    <>
      {/* SECTION NAMA */}
      <motion.div
        variants={variants1}
        initial="open"
        animate={isOpen ? "close" : "open"}
      >
        <div className="relative px-3 flex flex-col items-center justify-center">
          <div className="px-8 sm:mt-12 xl:mt-20 flex items-center justify-center drop-shadow-lg pointer-events-none">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={400}
              height={400}
            />
          </div>
          <div className="pointer-events-none text-center sm:text-sm md:text-xl mb-8">
            Made by{" "}
            <a
              className="pointer-events-auto"
              href="https://github.com/SirGhazian/"
              target="_blank"
            >
              @SirGhazian
            </a>
          </div>

          {/* BORDER STROKE */}
          <div className="bg-black p-1 rounded-[1.3rem]">
            {/* CONTENT */}
            <div className="pb-9 relative rounded-t-3xl rounded-b-2xl bg-gradient-to-t from-[#4d739e] to-[#89a4c7] drop-shadow-xl">
              <div className="sm:p-3 md:p-6 rounded-2xl sm:w-[80vw] md:w-[40rem]   bg-gradient-to-t from-[#6899d2] to-[#a9c7ed]">
                <div className="mb-10 bg-white sm:p-3 md:p-4 rounded-2xl border-b-4 border-r-4 border-gray-300 shadow-md">
                  <p className="sm:text-[0.7rem] xl:text-[1rem] text-center">
                    Tools ini akan mendeteksi
                    namamu kemudian
                    mengkalkulasikan seberapa
                    brainrot dan banyak aura yang
                    kamu punya fr fr no cap!
                  </p>
                </div>

                <div>
                  <div className="mb-4 sm:text-sm md:text-2xl font-semibold text-center">
                    Masukkan Namamu
                  </div>
                  <form
                    className="relative mb-6 flex flex-col items-center justify-center"
                    onSubmit={(e) => {
                      e.preventDefault();
                      randomList();
                      setIsOpen(true);
                    }}
                  >
                    <input
                      value={namaUser}
                      onChange={(e) =>
                        setNamaUser(
                          e.target.value
                        )
                      }
                      className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-500 shadow-md"
                      placeholder="Slamet Kopling"
                    />
                    <button
                      className={`absolute top-20 cursor-pointer transition-all text-white px-6 py-2 rounded-lg border-b-[4px] 
                    ${
                      !namaUser
                        ? "bg-gray-400 border-gray-500"
                        : "bg-blue-500 border-blue-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    }`}
                      disabled={!namaUser} // Menambahkan validasi untuk mengaktifkan tombol hanya jika namaUser tidak kosong
                    >
                      Button
                    </button>
                  </form>
                </div>
              </div>
              <div className="relative flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION GENERATOR */}
      <motion.div
        variants={variants2}
        initial="close"
        animate={isOpen ? "open" : "close"}
        transition={{ delay: 0.8 }}
      >
        <div className="flex justify-center">
          <div className="flex flex-col w-72 bg-blue-500 items-center">
            <div>
              <p>
                {namaUser
                  .charAt(0)
                  .toUpperCase() +
                  namaUser.slice(1)}
                , kamu adalah:
              </p>
            </div>
            <div className="h-8">
              <p className="text-3xl">
                {hasilNama.toUpperCase()}
              </p>
            </div>
            <div className="h-8">
              <p>{hasilRarity}</p>
            </div>
            <motion.div
              variants={variants3}
              initial="slideStart"
              animate={
                isOpen ? "slideEnd" : "slideStart"
              }
              transition={{
                duration: 0.5,
                delay: 6.5,
              }}
            >
              <a href="/">Ulangi</a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
