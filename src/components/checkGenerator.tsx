"use client";
import { motion } from "framer-motion";
import listData from "../data/listData";
import { useState } from "react";
import {
  variants1,
  variants2,
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
        <div className="flex items-center justify-center w-full">
          <div className="bg-red-400 p-10">
            <div className="flew flex-row">
              <div>
                <p className="mb-4 text-2xl font-semibold">
                  Masukkan Namamuu
                </p>
                <input
                  className="border-2 p-4 border-red-800"
                  value={namaUser}
                  onChange={(e) =>
                    setNamaUser(e.target.value)
                  }
                  placeholder="Masukkan Nama"
                ></input>
              </div>
              <div>
                <button
                  className={`font-semibold ${
                    !namaUser
                      ? "text-gray-600"
                      : "text-blue-900"
                  }`}
                  onClick={() => {
                    randomList();
                    setIsOpen(true);
                  }}
                  disabled={!namaUser} // Menambahkan validasi untuk mengaktifkan tombol hanya jika namaUser tidak kosong
                >
                  Cek
                </button>
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
          <div className="flex flex-col w-64 bg-blue-500 items-center">
            <div>
              <p>{namaUser}, kamu adalah:</p>
            </div>
            <div className="h-8">
              <p className="text-3xl">
                {hasilNama}
              </p>
            </div>
            <div className="h-8">
              <p>{hasilRarity}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
