import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import loginstyle from "../../styles/loginpage.module.css";
import searchstyle from "../../styles/search.module.css";
import Layout from "../../components/productdetaillayout";

export default function Search() {


  return (
    <Layout >
        <div style={{alignSelf:"start"}}>
        <h2>คำที่่ค้นหา : <span style={{color:"var(--pink)"}}> รองเท้ายี่ห้อ XYZ</span></h2>
        </div>
        <div className={searchstyle.searchresultcontainer}>
            <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>
            <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>
            <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>
            <img src="/images/SneakerRed.jpg" className={searchstyle.imageresult}></img>

        </div>
      
    </Layout>
  );
}
