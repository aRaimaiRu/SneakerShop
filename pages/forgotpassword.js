import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import loginstyle from "../styles/loginpage.module.css";
import Layout from "../components/loginlayout";
import { useRouter } from 'next/router';
import {Store} from '../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import { useContext,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const onSubmit = async (dataa) => {
    console.log(dataa);
    if (dataa.password !== dataa.repassword) {
      alert('password not correct');
    }
    try {
      const {data} = await axios.put('/api/users/resetpassword', dataa);
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push('/');
    } catch (err) {
      if(err.response){
        console.log("err",err.response.data);
        alert(err.response.data.message);

      }
    }
  };
  return (
    <Layout>
      <form className={loginstyle.inputcontainer} onSubmit={handleSubmit(onSubmit)}>
        <h1> รีเซ็ตรหัสผ่าน</h1>
        <label>อีเมลล์</label>
        <input type="text" className={loginstyle.inputwidth100} {...register('email')}/>
        <label>รหัสผ่าน</label>
        <input type="password" className={loginstyle.inputwidth100} {...register('password')}/>
        <label>ยืนยันรหัสผ่าน</label>
        <input type="password" className={loginstyle.inputwidth100} {...register('repassword')}/>
        <div className={loginstyle.flexcolumncenter}>
        <button className={loginstyle.roundbutton} style={{margin:"5px 0"}} type="submit"
            value="submit">ยืนยัน</button>
        </div>
      </form>
    </Layout>
  );
}
