import style from "@/components/css/loading.module.css";

export default function Loading() {
  return (
    <>
      <main className="flex items-center min-h-[100vh]">
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
