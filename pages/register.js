import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import loginstyle from '../styles/loginpage.module.css';
import Layout from '../components/loginlayout';
import { Store } from '../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import React, { useContext, useEffect } from 'react';
export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const onSubmit = (data) => {
    if (data.password !== data.repassword) {
      alert('password not correct');
    }
    console.log(data);
  };
  return (
    <Layout>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1> สมัครสมาชิก</h1>
        <label>อีเมลล์</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('email')}
        />
        <label>รหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('password')}
        />
        <label>ยืนยันรหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('repassword')}
        />
        {/* name surname */}
        <div className={loginstyle.loginwithcontainer}>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginRight: '10px' }}
          >
            <label>ชื่อ</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('name')}
            />
          </div>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginLeft: '10px' }}
          >
            <label>นามสกุล</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('lastname')}
            />
          </div>
        </div>

        <label>ที่อยู่</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('address')}
        />
        <label>เบอร์โทร</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('tel')}
        />
        <div
          className={loginstyle.loginwithcontainer}
          style={{ margin: '10px 0' }}
        >
          <input type="checkbox" required />
          <span className={loginstyle.font12}> ข้าพเจ้ายอมรับเงื่อนไข</span>
        </div>
        <div className={loginstyle.flexcolumncenter}>
          {/* <Link href="/register"> */}
          <button
            className={loginstyle.roundbutton}
            style={{ margin: '5px 0' }}
            type="submit"
            value="submit"
          >
            สมัครสมาชิก
          </button>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}
