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

export default function ChekBrainrot() {
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
              className="pointer-events-auto"
              href="https://github.com/SirGhazian/"
              target="_blank"
            >
              @SirGhazian
            </a>
          </div>

          <div className="relative w-full">
            <div className="w-full flex justify-center z-[-1] bg-blue-200">
              <Image
                src="/img/box.png"
                alt="logo"
                width={400}
                height={400}
                className="pointer-events-none"
              />
            </div>

            <div className="absolute inset-0 mt-6 mb-6 flex flex-col items-center">
              <div className="mx-5">
                <div className="max-w-[20rem] max-h-[10rem] sm:p-3 xl:p-3 sm:text-[0.8rem] xl:text-[1rem] text-center mt-1">
                  Tools ini akan mendeteksi namamu
                  kemudian mengkalkulasikan
                  seberapa brainrot dan banyak
                  aura yang kamu punya fr fr no
                  cap!
                </div>

                {/* INPUT */}
                <div>
                  <div className="mt-9 mb-2 sm:text-sm md:text-2xl font-semibold text-center">
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
                      value={inputName}
                      onChange={(e) =>
                        setInputName(
                          e.target.value
                        )
                      }
                      className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-500 shadow-md"
                      placeholder="Slamet Kopling"
                    />
                    <button
                      className={`absolute top-20 cursor-pointer transition-all text-white px-6 py-2 rounded-lg border-b-[4px] 
                    ${
                      !inputName
                        ? "bg-gray-400 border-gray-500"
                        : "bg-blue-500 border-blue-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    }`}
                      disabled={!inputName} // Menambahkan validasi untuk mengaktifkan tombol hanya jika inputName tidak kosong
                    >
                      Check
                    </button>
                  </form>
                </div>
              </div>
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
