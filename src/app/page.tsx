// import CheckBrainrot from "../components/checkGenerator";
import dynamic from "next/dynamic";

const CheckBrainrot = dynamic(
  () => import("../components/checkGenerator"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <>
      <main className="max-h-[100vh] w-full">
        <CheckBrainrot />
      </main>
    </>
  );
}
