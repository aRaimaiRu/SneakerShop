import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import loginstyle from '../styles/loginpage.module.css';
import Layout from '../components/loginlayout';
import { useRouter } from 'next/router';
import {Store} from '../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import { useContext,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function LoginPage() {
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
    try {
      const {data} = await axios.post('/api/users/login', dataa);
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push('/');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Layout>
        <div className={loginstyle.legoimage}>LEGO</div>
        <form className={loginstyle.inputcontainer} onSubmit={handleSubmit(onSubmit)} >
          <label>อีเมลล์</label>
          <input type="text" className={loginstyle.inputwidth100} {...register('email')} />
          <label>รหัสผ่าน</label>
          <input type="password" className={loginstyle.inputwidth100} {...register('password')}/>
          <div
            className={loginstyle.loginwithcontainer}
            style={{ margin: '10px 0' }}
          >
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
          <div className={loginstyle.flexcolumncenter}>
              <button
                className={loginstyle.roundbutton}
                style={{ margin: '10px 0' }}
                type='submit'
                value='submit'
              >
                เข้าสู่ระบบ
              </button>
            <Link href="/register">
              <button
                className={loginstyle.roundbutton}
                style={{ margin: '5px 0' }}
              >
                สมัครสมาชิก
              </button>
            </Link>
            <Link href="/forgotpassword">
              <a className={loginstyle.font12}>ลืมรหัสผ่าน</a>
            </Link>
          </div>
        </form>
    </Layout>
  );
}
