import style from "@/components/css/loading.module.css";

export default function loading() {
  return (
    <>
      <div className="min-w-full min-h-[100vh] flex items-center justify-center">
        <section className={style.dotscontainer}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </section>
      </div>
    </>
  );
}
