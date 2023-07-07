import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import Textblock from '../components/textbox'
import { ContractContext } from '../contexts'


const s = {
  main: "min-h-full p-4 grid grid-cols-1 rounded-lg m-4 p-4 font-jcz",
  title: "text-5xl text-center font-underline",
  title2: "text-3xl text-center font-underline leading-loose text-[5eead4] hover:text-green-400",
  description: "text-center m-10 text-[#bbf7d0]",
  grid: "m-1 p-1 border-8 border-black grid grid-cols-2 gap-4 ",
  card: "m-8 max-w-0.5 grid grid-col-2 border-2 border-[#6ee7b7] hover:border-blue-400 ease-in duration-100 m-4 p-4  text-start rounded-lg",
  line1: "leading-7 text-2xl m-6",
  line2: "leading-7 text-xl lg:text-md 2m-4",
}

const colours = {
  torquoise: "#bbf7d0",
}

const Zi: NextPage = () => {

    // const {address, blockNumberData} = useContext(ContractContext);
    // const [addy, setAddy] = useState<any>("");
    // const [blockNumber, setBlockNumber] = useState<any>("");
    // console.log(addy);
    // useEffect(()=> {
    //   setAddy(address);
    //   setBlockNumber(blockNumberData);
    // }, [address, blockNumberData])
  
    
    return (
    <main>
      <div className="m-7 p-7"><div className={s.title}>The Zi Token </div></div>
      <div className="flex justify-center m-4">
        <Image src="/zi-bigseal-white.png" alt="Zi Logo" width={72} height={16} />
      </div>
      <div className="flex flex-col justify-center　m-4 p-4">
        <div className="flex justify-center text-2xl"></div>
        <div className="grid grid-cols-1 text-sm content-center m-8">
          <div className="text-center">日本語: 呉: ち | 漢: ち | 訓: ぬう, ぬい</div>
          <div className="text-center">粵: zi2 󱂡</div>
          <div className="text-center">閩: tsi	上</div>
          <div className="text-center">吳: tsy２</div>
          <div className="text-center">官話:  zhǐ | ㄓˇ</div>
        </div>
        <div className="grid grid-cols-1 gap-4 text-justify">
            <div>Zi, 黹, is a pictograph of fanciful patterns on a piece of cloth. Here, we repurpose it and extend its referent to "rationality", in the same way how lei 理, which once referred to the patterns on a piece of jade, now means "pattern", "logic" and "reason".</div>
            {/* <div>The Zi token is going to underpin all my art. It has a finite supply of 10,000,000.</div> */}
            <div></div>
        </div>
        
            <div className="flex justify-center p-8 text-justify">                    
            
                
                

            </div>
        </div>
      </main>
  )
}
export default Zi
