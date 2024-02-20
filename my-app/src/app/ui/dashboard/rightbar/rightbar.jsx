import React from 'react'
import {Card, CardHeader, CardBody, CardFooter,Divider,Button} from "@nextui-org/react";
import Link from 'next/link';
function  Rightbar() {
  return (
       <Card className="max-w-[320px] bg-[#182237] p-2  text-align  rounded-md">
       <CardHeader className="flex gap-5">
      
       <div className="flex flex-col p-1 items-center justify-center">
          <p className="text-md p-1 ">Available Now </p>
          
        </div>
       </CardHeader>
      
       <CardBody className=' m-2 flex items-center justify-center'>
         <p>Make beautiful websites regardless of your design experience.</p>
         <p>Make beautiful websites regardless of your design experience.</p>
     
        
       </CardBody>
      
       
      
     </Card>
  )
}

export default  Rightbar
