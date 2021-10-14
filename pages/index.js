import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import loginstyle from "../styles/loginpage.module.css";
import { Carousel } from "react-responsive-carousel";
import EmblaCarousel from "../components/EmblaCarousel";
import productstyle from "../styles/Product.module.css"
import searchstyle from "../styles/search.module.css";
import homestyle from "../styles/HomePage.module.css";
import Layout from "../components/productdetaillayout";
export default function Home() {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Layout >
      <div className={homestyle.homenavbar}>
      <div className={homestyle.divider}><h1>โปรไฟล์</h1></div>
      <div className={homestyle.divider}><h1>เปิดร้าน</h1></div>
      <div className={homestyle.divider}><h1>รายการสินค้า</h1></div>
      <div className={homestyle.divider} style={{border:"none"}}><h1>ข่าวสาร</h1></div>
      </div>
      <h1 style={{alignSelf:"start"}}>ข่าวสาร</h1>
      <EmblaCarousel slides={slides} />
      <h1>รายการสินค้า</h1>
      <div className={searchstyle.searchresultcontainer}>
          <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>
          <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>
      </div>
    </Layout>
  );
}
