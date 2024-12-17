
import React from 'react'
import { useTranslation } from 'react-i18next'
import productImage from "../../assets/product2.jpg"
import { Divider, Image, Popconfirm, Table } from 'antd'
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const { confirm } = Popconfirm;
function AllProducts() {
    const {t} = useTranslation()
 
   const handleDelete = (id) =>{
  console.log(id);
  
   }
      const products =[
        {id:1, name: 'فول سوداني', price: 100 ,image: productImage ,quantity:2},
        {id:2, name: 'سمسم', price: 200 ,image: productImage ,quantity:2},
        {id:3, name: 'قمح', price: 300 ,image: productImage ,quantity:2},
        {id:4, name: 'قمح', price: 300 ,image: productImage ,quantity:2},
        {id:5, name: 'قمح', price: 300 ,image: productImage ,quantity:2},
       
      ]
      const columns = [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
        },
        {
            title: t('columns.image'),
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Image width={50}  className='w-20 rounded-md' src={image} alt="product" />,
            ellipsis: true,
          },
        { title: t('columns.name'), dataIndex: 'name', key: 'name',
          
         },
        { title: t('columns.price'), dataIndex: 'price', key: 'price' ,responsive: ['md'], },
        { title: t('columns.quantity'), dataIndex: 'quantity', key: 'quantity'  ,responsive: ['md'],},
        {
          title: t('columns.actions'),
          key: 'action',
          render: (record) => (
            <div className='flex  items-center justify-start'>
              
              <Link to={`/edit-product/${record.id}`} className='hover:text-gray-700 text-gray-500 dark:text-gray-200 dark:hover:text-gray-300'>
                <HiOutlinePencilAlt size={16}   /> 
              </Link>
           
            
             <Divider type="vertical" />
              <Popconfirm title={t('are you sure delete this record?')} onConfirm={() => handleDelete(record.id)}>
                <HiOutlineTrash size={16}    className='hover:cursor-pointer hover:text-red-400 text-gray-500 dark:text-gray-200 dark:hover:text-red-400' />
              </Popconfirm>
            
            </div>
          ),
        }
        
      ]
       const dataSource = products.map((el) =>{
         return {
           key: el.id,
            id: el.id,
           name: el.name,
           price: el.price,
           image: el.image,
           quantity: el.quantity,
         }
       })
  return (
    <div>
        <h1 className='title'>{t('products')}</h1>

        {/* product list */}
        <div className='w-full '>
          
         <Table 
        //  scroll={{x: 1000}}
         columns={columns}
         dataSource={dataSource}
         pagination={false}

         />

        </div>

    </div>
  )
}

export default AllProducts