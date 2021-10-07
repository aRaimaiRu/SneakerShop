import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import loginstyle from "../../styles/loginpage.module.css";
import productstyle from "../../styles/Product.module.css";
import Layout from "../../components/productdetaillayout";
import SearchBar from "../../components/searchbar";
export default function Product() {
  const footer =       <footer className={productstyle.buyproductfooter}>
  <p>ราคา: XXXX</p>
  <p>บาท</p>
  <p className={productstyle.cancelfooterbtn}><button className={productstyle.roundbutton} >ยกเลิก</button></p>
  <p className={productstyle.buyfooterbtn}><button  className={productstyle.roundbutton} style={{backgroundColor:"green"}}>สั่งซื้อ</button></p>
  <p>ค่าส่ง: XXXX</p>
  <p>บาท</p>

 


</footer>;
  return (
    <Layout footer={footer}>
      <img
        src="/images/SneakerRed.jpg"
        className={productstyle.mainimage}
      ></img>
      <div className={productstyle.productdetailcontainer}>
        <div>
          <h2 className={productstyle.colorpink}>รองเท้ายี่ห้อ XYZ</h2>
          <h3 >รายละเอียดสินค้า</h3>
        </div>
        <div className={productstyle.productattributecontainer}>
          <table>
            <tr>
              <td>Size:</td>
              <td>40 42 44</td>
            </tr>
            <tr>
              <td>ประเภท:</td>
              <td>แบบสวม</td>
            </tr>
            <tr>
              <td>ส่งจาก:</td>
              <td>ที่ไหนสักแห่ง</td>
            </tr>
          </table>
        </div>
        {/* Shop Preview */}
        <div className={productstyle.flexrowleft}> {/* row*/}
        <div className={loginstyle.legoimage} style={{backgroundColor:"teal",width:"60px",height:"60px",fontSize:"20px",padding:"15px"}} >LEGO</div>
          <div className={productstyle.columngap1}>
            <h3 className={productstyle.colorpink} style={{padding:0,margin:0}}>ร้าน LEGO การรองเท้า</h3>
            <p>ร้านรองเท้าสำหรับทุกเพศทุกวัยจ้า</p>
            <button className={productstyle.roundbutton} style={{width:"100px",height:"fit-content",backgroundColor:"var(--pink)"}}>ติดต่อร้านค้า</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
