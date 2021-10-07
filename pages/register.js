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
        <h1> สมัครสมาชิก</h1>
        <label>อีเมลล์</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <label>รหัสผ่าน</label>
        <input type="password" className={loginstyle.inputwidth100} />
        <label>ยืนยันรหัสผ่าน</label>
        <input type="password" className={loginstyle.inputwidth100} />
        {/* name surname */}
        <div className={loginstyle.loginwithcontainer} >
          <div className={loginstyle.inputcontainer} style={{marginRight:"10px"}}>
            <label>ชื่อ</label>
            <input type="text" className={loginstyle.inputwidth100} />
          </div>
          <div className={loginstyle.inputcontainer} style={{marginLeft:"10px"}}>
            <label>นามสกุล</label>
            <input type="text" className={loginstyle.inputwidth100} />
          </div>
        </div>

        <label>ที่อยู่</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <label>เบอร์โทร</label>
        <input type="text" className={loginstyle.inputwidth100} />
        <div className={loginstyle.loginwithcontainer} style={{margin:"10px 0"}}>
            <input type="checkbox" />
            <span className={loginstyle.font12}> ข้าพเจ้ายอมรับเงื่อนไข</span>
        </div>
        <div className={loginstyle.flexcolumncenter}>
        <Link href="/register"><button className={loginstyle.roundbutton} style={{margin:"5px 0"}}>สมัครสมาชิก</button></Link>
        </div>
      </div>
    </Layout>
  );
}
