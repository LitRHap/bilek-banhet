import Image from "next/image";
import bgDesktop from "../../public/img/background_desktop.png";
import bgMobile from "../../public/img/background_mobile.png";

export default function AppBgImg() {
  return (
    <main>
      <div className="sm:collapse md:visible">
        <Image
          src={bgDesktop}
          alt="background"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
        />
      </div>

      <div className="sm:visible md:collapse">
        <Image
          src={bgMobile}
          alt="background"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
        />
      </div>
    </main>
  );
}
