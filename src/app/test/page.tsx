import style from "@/components/css/loading.module.css";
import TextStyle from "@/components/textstyle";
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="relative w-[29rem] aspect-[1414/1075] mx-6">
          <Image
            src="/img/box_result.png"
            alt="logo"
            width={0}
            height={0}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="absolute z-[-1] drop-shadow-4xl"
          />

          <div className="absolute mt-[2%] w-[100%] h-[30%] flex items-center justify-center">
            <div className="flex flex-col text-center">
              <p className="text-2xl font-bold">
                Santos ,
              </p>
              <p className="text-xl">
                Kamu Adalah:{" "}
              </p>
            </div>
          </div>

          <div className="absolute mt-[26%] w-[100%] h-[27%] flex items-center justify-center text-4xl font-bold">
            <TextStyle nameText="SANTOS" />
          </div>

          <div className="absolute mt-[47%] w-[100%] h-[13%] flex items-center justify-center text-xl font-bold">
            <p>0000 aura</p>
          </div>

          <div className="absolute mt-[55.5%] w-[100%] h-[25%] flex items-center justify-center hover:font-semibold ease-out duration-300">
            <a href="/">
              <span className="mr-[0.3rem]">
                Ulangi
              </span>
              <i className="text-xs fa-solid fa-rotate-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
