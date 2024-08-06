"use client";
import style from "@/components/css/loading.module.css";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function PreLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute flex items-center w-screen h-screen bg-white z-40 pointer-events-none"
      >
        <section className={style.dotscontainer}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </section>
      </motion.main>
    </>
  );
}
