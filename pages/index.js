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
        <p>อีเมลล์</p>
        <input type="text" className={loginstyle.inputwidth100} />
        <p>รหัสผ่าน</p>
        <input type="password" className={loginstyle.inputwidth100} />
        <div className={loginstyle.loginwithcontainer}>
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
          className={loginstyle.inputcontainer}
          style={{ alignItems: "center" }}
        >
          <button className={loginstyle.roundbutton}>เข้าสู่ระบบ</button>
          <button className={loginstyle.roundbutton}>สมัครสมาชิก</button>
          <Link href="/forgotpassword">
            <span className={loginstyle.font12}>ลืมรหัสผ่าน</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
