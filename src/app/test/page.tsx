import style from "@/components/css/loading.module.css";
import Image from "next/image";

export default function loading() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="relative w-[29rem] aspect-[1414/1075] mx-6">
          <Image
            src="/img/box_result.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="absolute z-[-1] drop-shadow-4xl"
          />

          <div className="absolute mt-[1.5%] w-[100%] h-[30%] flex items-center justify-center">
            <div className="flex flex-col text-center">
              <p className="text-2xl font-bold">
                Santos,
              </p>
              <p className="text-xl">
                Kamu Adalah:{" "}
              </p>
            </div>
          </div>

          <div className="absolute mt-[21%] w-[100%] h-[40%] flex items-center justify-center text-4xl font-bold">
            SKIBIDI SIGMA
          </div>

          <div className="absolute mt-[51%] w-[100%] h-[25%] flex items-center justify-center">
            Ulangi
          </div>
        </div>
      </div>
    </>
  );
}
