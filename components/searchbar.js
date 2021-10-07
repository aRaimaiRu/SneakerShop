import Link from 'next/link'
import style from './productdetaillayout.module.css'
import loginpage from '../styles/loginpage.module.css'
export default function SearchBar({children}){
    return(
        <div className={loginpage.loginwithcontainer} style={{marginTop:"30px",width:"100%"}}>
        <input type="text" className={loginpage.inputwidth100} style={{marginRight:"20px"}}/>
        <Link href="/">
            <img src="/images/searchimg.png" width={50} height={50} color="red"></img>
        </Link>
        </div>
    )

}