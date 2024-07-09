export default function TextStyle({
  nameText,
  auraText,
}: {
  nameText: string;
  auraText: number;
}) {
  let colorText = "";
  let colorText1 = "";

  if (auraText >= 1000) {
    // aura lebih dari 1000
    (colorText =
      "from-[#AE8526] via-[#F7EF8A] to-[#D2AC47] textGradient"),
      (colorText1 = "drop-shadow-glow");
  } else if (auraText >= 1 && auraText <= 999) {
    // aura lebih dari 1 dan kurang dari 1000
    colorText = "from-[#6583D4] to-[#0DCFFF]";
  } else if (auraText <= 0) {
    // aura kurang dari atau sama dengan 0
    colorText = "from-stone-500 to-stone-200";
  }

  return (
    <>
      <style>
        {`
          .textOutline {
            -webkit-text-stroke: 2.5px #424442;
          }
          @media (min-width: 680px) {
            .textOutline {
              -webkit-text-stroke: 3px #424442;
            }
          }

          .textGradient {
            background-size: 200% 200%;
            animation: gradientAnimation 2s ease infinite;
          }
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
        `}
      </style>

      <div className="relative flex">
        <h1
          className={`p-2 sm:text-2xl md:text-4xl tracking-[0.1rem] bg-gradient-to-t ${colorText}   inline-block text-transparent bg-clip-text z-20`}
        >
          {nameText}
        </h1>
        <h1
          className={`absolute p-2 sm:text-2xl md:text-4xl tracking-[0.1rem] textOutline ${colorText1}`}
        >
          {nameText}
        </h1>
      </div>
    </>
  );
}
