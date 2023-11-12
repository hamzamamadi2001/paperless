"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Skelton from "@/app/components/skelton";

export default async function  App() {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-6 mt-10">
      
      <Skelton></Skelton>
      <Skelton></Skelton>
      <Skelton></Skelton>
      <Skelton></Skelton>
      <Skelton></Skelton>
    </div>
  );
}
