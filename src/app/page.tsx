import Image from "next/image";
import Card from "@/app/components/listCard";
import Search from "@/app/components/searchBar";

import { ScrollShadow } from "@nextui-org/react";
import { Suspense } from 'react'


export default function Home() {
  return (
    <ScrollShadow>
      <div className="w-screen h-screen ">
        <Search></Search>
       </div>
    </ScrollShadow>
  );
}
