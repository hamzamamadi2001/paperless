import Skelton from "@/app/components/skelton";
import Cardd from "@/app/components/card"
import { title } from "process";
async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async  function  App() {
   
  const data = await getData()

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-6 mt-10">
      {data.map((item, index) => (
        <Cardd image={item.image} price={item.price} index={index} title={item.title} id={item.id}></Cardd>
      ))}
  
    </div>
  );
}
