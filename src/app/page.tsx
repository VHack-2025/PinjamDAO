'use client'

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WorldIDLogin from "@/components/WorldIDLogin";
import { useRouter } from "next/navigation";
import { ISuccessResult } from "@worldcoin/idkit-core";

function Slogan() {
  
  const keywords = ['Simple', 'Secure', 'Swift']
  const duration = 3000
  const [currKeywordIndex, setCurrKeywordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrKeywordIndex((currKeywordIndex + 1) % keywords.length);
    }, duration)

    return () => clearInterval(interval)

  }, [currKeywordIndex, keywords.length])


  return (
    <div className="text-black text-[6rem] font-extrabold text-right">
      <h1 className="">Microloans</h1>
      <h1 className="">Made</h1>
      <AnimatePresence mode="wait">
        <motion.div
        key={currKeywordIndex}
        className="text-[#5202DB]"
        variants={{
          
        }}
        initial={{
          opacity: 0,
          translateX: -200,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        exit={{
          opacity: 0,
        }}
        >
          {keywords[currKeywordIndex]}.
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Login() {

  const router = useRouter()

  const onLoginSuccess = async (result: ISuccessResult) => {

    const response = await fetch('/api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(result)
    })

    if (!response.ok) {
        if (response.status === 404)
            router.push('/sign-up')
        else {
            const errorData = await response.json();
            throw new Error(errorData.error)
        }
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex h-32 w-[20rem] bg-[#6E61E3]/40 rounded-xl shadow-lg items-center justify-center">
      <WorldIDLogin onSuccess={onLoginSuccess}/>
    </div>
  )
}


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#EFF8FC] justify-center items-center">
      <Header userLoggedIn={false}/>
      <div className="flex flex-row w-full justify-evenly items-center">
        <Slogan />
        <Login />
      </div>
    </div>
  );
}