import style from "@/components/css/loading.module.css";

export default function Loading() {
  return (
    <>
      <main className="absolute flex items-center w-screen h-screen max-w-screen max-h-screen">
        <section className={style.dotscontainer}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </section>
      </main>
    </>
  );
}
