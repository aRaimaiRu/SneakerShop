import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import loginstyle from "../styles/loginpage.module.css";
import Layout from "../components/loginlayout";
export default function Home() {
  return (
    <Layout>
      <div className={loginstyle.legoimage}>LEGO</div>
      <div className={loginstyle.inputcontainer}>
        <label>อีเมลล์</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <label>รหัสผ่าน</label>
        <input type="password" className={loginstyle.inputwidth100} />
        <div className={loginstyle.loginwithcontainer} style={{margin:"10px 0"}}>
          <Image
            src="/images/facebookicon.png"
            alt="facebookicon"
            width={30}
            height={30}
          />
          <Image
            src="/images/googleicon.png"
            alt="googleicon"
            width={30}
            height={30}
          />
        </div>
        <div
          className={loginstyle.flexcolumncenter}
        >
          <Link href="/product/1" ><button className={loginstyle.roundbutton} style={{margin:"10px 0"}}>เข้าสู่ระบบ</button></Link>
          <Link href="/register"><button className={loginstyle.roundbutton} style={{margin:"5px 0"}}>สมัครสมาชิก</button></Link>
          <Link href="/forgotpassword">
            <a className={loginstyle.font12} >ลืมรหัสผ่าน</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
