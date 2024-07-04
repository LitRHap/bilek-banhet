export default function TextStyle({
  nameText,
}: {
  nameText: string;
}) {
  return (
    <>
      <style>
        {`
          .textOutline {
            -webkit-text-stroke: 3px red;
            text-stroke: 2px blue;
          }
        `}
      </style>

      <div className="relative flex">
        <h1 className="p-2 bangers text-5xl tracking-[0.2rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text z-20">
          {nameText}
        </h1>
        <h1 className="absolute bangers p-2 text-5xl tracking-[0.2rem] textOutline">
          {nameText}
        </h1>
      </div>
    </>
  );
}
