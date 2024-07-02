"use client";
import listData from "../data/listData";
import { useState } from "react";

export default function Home() {
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
      <main className="min-h-[100vh] w-full content-center">
        <div className="flex flex-col items-center mb-10">
          <input
            className="border-2 border-red-800"
            value={namaUser}
            onChange={(e) =>
              setNamaUser(e.target.value)
            }
            placeholder="Masukkan Nama"
          ></input>
          <p>namamu: {namaUser}</p>
          <p>test</p>
          <button
            onClick={randomList}
            className="bg-blue-300 py-1 px-4 rounded-md"
          >
            CEK
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p>{namaUser}, kamu adalah:</p>
          <div className="h-8">
            <p className="text-3xl">
              {hasilNama}
            </p>
          </div>
          <div className="h-8">
            <p>{hasilRarity}</p>
          </div>
        </div>
      </main>
    </>
  );
}
