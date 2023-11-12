import { Card, CardBody, Button,Image } from "@nextui-org/react";
 
function page({ image, title, price, description, category }) {
  return (
    <div className="grid grid-cols-3 text-foreground bg-background">
      <div className="w-full grid grid-flow-col grid-rows-5 col-span-1 h-screen bg-slate-500">
        <div className="row-span-4  text-foreground bg-background">
          <img
             
            
 

            className=" object-contain w-full h-full"
            src={image}
          />
        </div>
        <div className="w-1/2 overflow-x-scroll gap-2 flex justify-center items-center row-span-1   text-foreground bg-background">
          <Image
            width="100px"
            height="50px"
            src={image}
          />
          <Image
            width="100px"
            height="50px"
            src={image}
          />
          <Image
            width="100px"
            height="50px"
            src={image}
          />
          <Image
            width="100px"
            height="50px"
            src={image}
          />
          <Image
            shadow="sm"
            width="100px"
            height="50px"
            src={image}
          />
        </div>
      </div>
      <div className="w-full col-span-2 h-screen">
        <p className="font-bold text-4xl m-10">{title}</p>
        <div className="m-5">
          <p>author name | {category} | {price}$</p>
        </div>
        <div className="m-5">
          <p>{description}</p>{" "}
        </div>
        <div className="m-10">
          <p>Available sizes</p>{" "}
        </div>
        <div className="flex justify-start items-center gap-3 m-5">
          <Button color="primary" variant="shadow">
            XL
          </Button>{" "}
          <Button color="primary" variant="shadow">
            L
          </Button>{" "}
          <Button color="primary" variant="shadow">
            M
          </Button>
        </div>
        <div className="m-10">
          <div className="flex justify-center items-center gap-3 m-5">
            <Button color="primary" variant="shadow">
              Add to cart
            </Button>{" "}
            <Button color="secondary" variant="shadow">
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
