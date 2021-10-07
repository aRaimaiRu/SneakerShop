import Link from 'next/link'
import style from './productdetaillayout.module.css'
import homestyle from '../styles/Home.module.css'
import SearchBar from './searchbar'
export default function Productdetaillayout({children,footer}){
    return(
        <>
        <div className={style.webcontainer}>
            <div className={style.container}>
                <div className={style.container} style={{width:"66%",height:"100%",position:"relative"}}>
                <SearchBar></SearchBar>
                {children}
                </div>
                {footer}
            </div>
            

        </div>
        </>
    )

}