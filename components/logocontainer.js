import Link from 'next/link'
import style from './loginlayout.module.css'
import homestyle from '../styles/Home.module.css'
export default function Loginlayout({children}){
    return(
        <>
        <div className={style.logincontainer}>
            {children}
        </div>
        </>
    )

}