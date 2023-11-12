"use client"

import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import File from "@/app/components/fileUpload"

function cart() {
    const [counter, setCounter] =useState(0);

    return (<div className="w-full h-full p-2 " >
        <div className="bg-yellow-400 gap-5 h-full w-full  overflow-y-scroll  flex justify-center items-center flex-col" >
        <File></File>
        <File></File>
        <File></File>
 <File></File>

    </div>
    </div>
    );
}

export default cart;