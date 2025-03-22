"use client"

import { DatePicker } from "@/components/DatePicker";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Image from 'next/image'

export default function SignUp() {

  const router = useRouter()

    const submitSignUp = async (formdata: FormData) => {
        const object = {
            username: formdata.get('username')
        }

        // halleluyah
        const response = await fetch('/api/sign-up', {
            method: 'POST',
            body: JSON.stringify(object)
        })
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error)
        } else
            router.push('/dashboard')
    }  

    return (
        <div className="flex flex-col h-screen w-screen bg-[#EFF8FC] justify-center items-center">
          <div className="text-5xl font-bold text-black pb-10">
            Before you begin, we'll need some details.
          </div>
          <div className="text-black">
            <form
            className="flex flex-row space-x-8 justify-center items-center"
            action={submitSignUp}>
                
              <div className="flex flex-col space-y-2">
                <div className="space-y-1">
                  <div className="text-xl pl-2">Username</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="username" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Full Name</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="fullName" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Date of Birth</div>
                  <DatePicker />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Gender</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="phone"/>
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Identification Number</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="IDNumber" placeholder="xxxxxx-xx-xxxx"/>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="space-y-1">
                  <div className="text-xl pl-2">Phone Number</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="phone" placeholder="+60"/>
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Residency Status</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="phone"/>
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Employment Status</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="username" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Martial Status</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="fullName" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Education Level</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="fullName" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="space-y-1">
                  <div className="text-xl pl-2">Address Line 1</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="phone"/>
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Address Line 2</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="phone"/>
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">Postcode</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="username" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">City</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="fullName" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl pl-2">State</div>
                  <input className="bg-white text-black w-96 h-12 p-5 rounded-lg inset-shadow-sm inset-shadow-indigo-200"
                  name="fullName" />
                </div>
              </div>

              <motion.button 
                className="flex flex-row justify-center items-center w-24 h-12 bg-[#6E61E3]
                rounded-lg cursor-pointer mt-7"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                <Image src={'/rightarrow.svg'} alt='next' width={25} height={25}/>
              </motion.button>
            </form>
          </div>
        </div>
    )
}