import React from 'react'
import productImage from "../../assets/product2.jpg"
import { Image, Table } from 'antd'
function Order() {
      const products =[
        {
        id:1,
        name: 'فول سوداني',
        price: 100 ,
        image: productImage ,
        quantity:2,
        clientName:"mohamad Ali" ,
        clientPhone:"0123456789",
        clientEmail:"mohamad@example.com",

        
        },
       
            
       
      ]

      const columns = [
        {
            title: 'الصورة',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Image width={50}  className='w-20 rounded-md' src={image} alt="product" />,
          },
        { title: 'الاسم', dataIndex: 'name', key: 'name' },
        { title: 'السعر', dataIndex: 'price', key: 'price',responsive: ['md'] },
        { title: 'الكمية', dataIndex: 'quantity', key: 'quantity' },
        { title: 'اسم العميل', dataIndex: 'clientName', key: 'clientName' },
        { title: 'رقم الهاتف', dataIndex: 'clientPhone', key: 'clientPhone',responsive: ['md'] },
        { title: 'البريد الإلكتروني', dataIndex: 'clientEmail', key: 'clientEmail',responsive: ['md'] },
       
      ]
      const dataSource = products.map((product) => ({...product, total: product.price * product.quantity }))
  return <>
<div className='w-full '>
          
         <Table 
        
         columns={columns}
         dataSource={dataSource}
         pagination={false}

         />

        </div>
  </>
}

export default Order