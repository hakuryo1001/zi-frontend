import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import Textblock from '../components/textbox'
import { ContractContext } from '../contexts'
import ContractList from "../components/contractList";

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

const Home: NextPage = () => {

    
    return (
    <main>
      <div className="m-7 p-7"><div className={s.title}>Hakuryo</div></div>
      <div className="flex justify-center">
        <Image src="/hakuryo_signature_final_white.png" alt="Vercel Logo" width={72} height={16} />
      </div>
      
      <div className="flex flex-col">
            <div className="flex justify-center p-8 text-justify">
              
          
            I am a humble smart contract developer, digital artist, and struggling logician - although 
            I would like to think of myself more as an alchemist. Indeed, the Crypto Dev is an Alchemist 
            searching for the philosopher's stone, and  the AI dev is a wizard searching for the homunculi.  
            I am making digital art and crypto games. My work draws heavy inspiration from discussions in mathematics, 
            philosophy, and logic. I want to realise these theoretical mathematical and metaphysical objects in digitally
             and financially tangible forms that humans can interact with. 

            </div>
            
        </div>
        <div>
          
        </div>

          
      </main>
  )
}
export default Home

