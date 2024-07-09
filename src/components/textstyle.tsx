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
            -webkit-text-stroke: 3px #424442;
            text-stroke: 2px blue;
          }
        `}
      </style>

      <div className="relative flex">
        <h1 className="p-2 text-4xl tracking-[0.1rem] bg-gradient-to-t from-stone-500 to-stone-200 inline-block text-transparent bg-clip-text z-20">
          {nameText}
        </h1>
        <h1 className="absolute p-2 text-4xl tracking-[0.1rem] textOutline">
          {nameText}
        </h1>
      </div>
    </>
  );
}
