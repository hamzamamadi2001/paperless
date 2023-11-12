"use client"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
function card({image,title,index,price,id}) {
    return (
        <Link href={`product/${id}`} className="col-span-1 w-full">
        <Card
        shadow="sm"
        key={index}
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="w-full" >
          <img
            
             
            
            alt={title}
            className="h-56  w-full "
            src={image}
          />
        </CardBody>
        <CardFooter className="text-ellipsis overflow-hidden text-small flex flex-col justify-between ">
          <b className=" h-10 text-ellipsis overflow-hidden">{title}</b>
          <p className=" text-xl text-green-500">{price}$</p>
        </CardFooter>
      </Card>
      </Link>
    );
}

export default card;