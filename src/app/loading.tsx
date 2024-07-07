import style from "@/components/css/loading.module.css";

export default function loading() {
  return (
    <>
      <section className={style.dotscontainer}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </section>
    </>
  );
}
