import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import loginstyle from "../styles/loginpage.module.css";
import Layout from "../components/loginlayout";
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
  return (
    <Layout>
       {/* <Carousel>
                <div>
                <Image src="/images/carousel-1.jpg"  layout="fill" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <Image src="/images/carousel-1.jpg"  layout="fill" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Image src="/images/carousel-1.jpg"  layout="fill" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}

    </Layout>
  );
}
