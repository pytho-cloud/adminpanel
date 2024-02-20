import React from 'react'
import {Card, CardHeader, CardBody, CardFooter,Divider,Button} from "@nextui-org/react";
import Link from 'next/link';

function  Cards() {
  return (
       <Card className="max-w-[300px] bg-[#182237]  rounded-md p-2">
       <CardHeader className="flex ">
      
       <div className="flex flex-col">
          <p className="text-md">Inverse's </p>
          <p className="text-small text-default-500">Hello sir!</p>
        </div>
       </CardHeader>
      
       <CardBody>
         <p>Make beautiful websites regardless of your design experience.</p>
         
        
       </CardBody>
      
       {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
      
     </Card>
  )
}

export default  Cards


