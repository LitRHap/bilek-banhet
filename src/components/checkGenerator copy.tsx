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
import TextStyle from "./textstyle";

export default function CheckBrainrot() {
  const [isOpen, setIsOpen] = useState(false);
  const [resultName, setName] = useState("");
  const [resultAura, setAura] = useState("");
  let [inputName, setInputName] = useState("");
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
        console.log(listData[random].name);

        setName(listData[random].name);
        setAura(listData[random].aura + " Aura");

        // convert string aura ke number
        hasilFinal = Number(
          listData[random].aura
        );
      }

      if (hasilFinal >= 1000) {
        // aura lebih dari 8000
        playSFX(3);
      } else if (
        // aura lebih dari 100
        hasilFinal >= 1 &&
        hasilFinal <= 999
      ) {
        playSFX(2);
      } else if (hasilFinal <= 0) {
        // aura kurang dari 0
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
        <div className="px-3 flex flex-col">
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
              className="pointer-events-auto hover:text-blue-600 hover:font-semibold ease-out duration-300"
              href="https://github.com/SirGhazian/"
              target="_blank"
            >
              @SirGhazian
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative mx-6 w-[29rem] sm:aspect-[1500/1349] md:aspect-[1500/1142] flex justify-center">
            <Image
              src="/img/box_desktop.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="absolute z-[-1] sm:collapse md:visible drop-shadow-4xl"
            />

            <Image
              src="/img/box_mobile.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="absolute pointer-events-none z-[-1] sm:visible md:collapse"
            />

            <div className="absolute w-[80%] h-[23.5%] mt-[8%] p-2 flex items-center justify-center">
              <p className="sm:text-[0.65rem] md:text-[0.8rem] xl:text-[0.9rem] text-center font-medium">
                Tools ini akan mendeteksi namamu
                kemudian mengkalkulasikan seberapa
                brainrot dan banyak aura yang kamu
                punya fr fr no cap!
              </p>
            </div>

            {/* INPUT */}
            <div className="absolute mt-[33%] w-full h-[60%]">
              <div className="sm:mt-4 md:mt-0 md:text-lg font-semibold text-center text-white drop-shadow-md">
                Masukkan Namamu
              </div>
              <form
                className="mt-2 flex flex-col items-center justify-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  randomList();
                  setIsOpen(true);
                }}
              >
                <input
                  value={inputName}
                  onChange={(e) =>
                    setInputName(e.target.value)
                  }
                  className="sm:mt-1 md:mt-2 input rounded-full sm:px-5 md:px-8 sm:py-2 md:py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-500 shadow-md"
                  placeholder="Slamet Kopling"
                />
                <button
                  className={`mt-4 cursor-pointer transition-all text-white px-10 py-2 rounded-2xl border-b-[4px] drop-shadow-md 
                    ${
                      !inputName
                        ? "bg-gradient-to-b from-gray-300 to-gray-400 border-gray-500"
                        : "bg-gradient-to-b from-cyan-500 to-blue-500 border-blue-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    }`}
                  disabled={!inputName} // Menambahkan validasi untuk mengaktifkan tombol hanya jika inputName tidak kosong
                >
                  Check
                </button>
              </form>
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
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-72 bg-blue-500 items-center">
            <div>
              <p>
                {inputName
                  .charAt(0)
                  .toUpperCase() +
                  inputName.slice(1)}
                , kamu adalah:
              </p>
            </div>
            <div className="h-8  mb-10">
              <div className="text-3xl">
                <TextStyle
                  nameText={resultName.toUpperCase()}
                />
              </div>
            </div>
            <div className="h-8">
              <p>{resultAura}</p>
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
