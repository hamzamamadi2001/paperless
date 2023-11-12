"use client"

import React , {useState} from "react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Password from "@/app/components/iPassword"
import Email from "@/app/components/iEmail"
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter()

  async function login (){
    console.log(username,password)
    fetch('http://localhost:3000/cart/api', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username:username,password:password})
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
  }


  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
       <div className="w-screen gap-2 flex justify-center items-center mt-10 flex-col h-full">
       <p className="text-center font-bold text-primary-200 text-2xl">Login to the system</p>
       
       <Input
      isClearable
      type="username"
      label="username"
      variant="bordered"
      onChange={e=>{setUsername(e.target.value)}}
      placeholder="Enter username"
      defaultValue="Admin"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
         <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      onChange={e=>{setPassword(e.target.value)}}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />

<div  className="flex flex-wrap gap-4 items-center">  
        <Button href="/cart"  onClick={() => router.push('/cart')} color="primary" variant="shadow">
          Login
        </Button>  
      </div>


    
      </div>
   );
}
