import Cardd from "@/app/product/page"

async function getData(id:number) {
    const res = await fetch('https://fakestoreapi.com/products/'+id)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  async function page({params}) {
    const id = params.id
  const data = await getData(id)

    return (
        <div>
            <Cardd description={data.description} category={data.category} image={data.image} title={data.title} price={data.price} ></Cardd>
        </div>
    );
}

export default  page;