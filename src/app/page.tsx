// import CheckBrainrot from "../components/checkGenerator";
import dynamic from "next/dynamic";
import Loading from "./loading";
import PreLoader from "@/components/preloader";

const CheckBrainrot = dynamic(
  () => import("../components/checkGenerator"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <>
      <PreLoader />
      <main className="max-h-[100vh] w-full">
        <CheckBrainrot />
      </main>
    </>
  );
}
