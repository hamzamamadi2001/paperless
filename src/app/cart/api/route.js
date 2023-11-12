import clientPromise from '@/app/helper/mongo';
import { NextResponse } from 'next/server'

export async function POST(req,res) {
  const { searchParams } = new URL(req.url)
  console.log(searchParams)
  const wilaya = searchParams.get('username')
  const type = searchParams.get('password')


   console.log(wilaya,type)
   try {
    const client = await clientPromise;
    const db = client.db("HamzaTest");
 
const movies = await db
        .collection("users").find({}).toArray()

    console.log(movies)
         

        return NextResponse.json(movies)
 
 

  
  
 
    
     

} catch (e) {
    console.error(e);
}
  
  
    
  }
 