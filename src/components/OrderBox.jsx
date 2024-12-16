import React from 'react'
import { Avatar } from 'antd'
import { LuArrowUpLeft } from "react-icons/lu";
import productImage from "../assets/product2.jpg"
import { Link, Links } from 'react-router-dom';
function OrderBox() {
  const products =[
    {id:1, name: 'فول سوداني', price: 100 ,image: productImage ,quantity:2},
    {id:2, name: 'سمسم', price: 200 ,image: productImage ,quantity:2},
    {id:3, name: 'قمح', price: 300 ,image: productImage ,quantity:2},
   
  ]
  return <>
    <div className='flex flex-col gap-y-3 px-4 md:px-8'>
    {products.map(product => (
      <div key={product.id} className='flex items-center justify-between gap-4'>
      <div className='flex items-center  gap-4 w-[50%]'>
      <Avatar 
        src={product.image}
        size={50}
        shape="circle"
        alt="Product"
        className='border-2 border-gray-200'
       
      />
       <div >
       <h3>{product.name}</h3>
       </div>
      </div>
     
        <div>
        <p >{product.quantity}</p>
        </div>

        <p> ${product.price}</p>
       <div  className='bg-light w-8 h-8 rounded-full flex justify-center items-center'>
      <Link to={'#'}> 
      <LuArrowUpLeft />
      </Link>


       </div>
      </div>
    ))}
    </div>
  </>
}

export default OrderBox