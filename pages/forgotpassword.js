import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import loginstyle from "../styles/loginpage.module.css";
import Layout from "../components/loginlayout";
export default function Register() {
  return (
    <Layout>
      <div className={loginstyle.inputcontainer}>
        <h1> รีเซ็ตรหัสผ่าน</h1>
        <label>อีเมลล์</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <label>รหัสผ่าน</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <label>ยืนยันรหัสผ่าน</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <div className={loginstyle.flexcolumncenter}>
        <Link href="/register"><button className={loginstyle.roundbutton} style={{margin:"5px 0"}}>สมัครสมาชิก</button></Link>
        </div>
      </div>
    </Layout>
  );
}