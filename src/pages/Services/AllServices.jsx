import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import serviceIcon from "../../assets/services.jpg"
import { Button, Card, Image, Modal } from 'antd'
import { HiEye, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'
import Meta from 'antd/es/card/Meta'
import AddServices from './AddServices'
function AllServices() {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const editService = (id) => {
        console.log("edit service", id);
    }

    const deleteService = (id) => {
        console.log("delete service", id);
    }
    const services =[
        {id:1, name: 'خدمات توزيع', image: serviceIcon  , description:" associated image for service"},
        {id:2, name: 'خدمات صيانة', image: serviceIcon , description:" associated image for service" },
        {id:3, name: 'خدمات فني', image: serviceIcon , description:" associated image for service" },
        {id:4, name: 'خدمات تجارية', image: serviceIcon , description:" associated image for service" },
        
    ]
  return <>
  <Helmet>
    <title>{t('services')}</title>
  </Helmet>

<div className='flex justify-between items-center my-5'>
<h1 className='title'>{t('services')}</h1>

{/* add service button */}
<Button type='primary' onClick={showModal}>
 {t('add-service')}
</Button>
</div>

{/* service list */}
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

     
     {services.map((el)=> <>
         <div className='w-full text-center relative'>
             <Card
              
             className='p-3 rounded-lg bg-white dark:bg-dark mx-auto ' 
             cover={
                 <Image
                     src={el.image}
                     alt={el.name}
                     className='rounded-lg'
                 />
             }
             actions={
             [
                 <button type="primary" onClick={()=>console.log(el.id)}>
                     <HiEye  className='dark:text-gray-200' />
                 </button>,
                 <button type="primary" onClick={()=>console.log(el.id)}>
                     <HiOutlinePencilAlt className='dark:text-gray-200'  />
                 </button>,
                 <button type="primary" onClick={()=>console.log(el.id)}>
                     <HiOutlineTrash  className='dark:text-gray-200' />
                 </button>,
             ]}
             >
              <Meta
                title={el.name}
                description ={<p className='dark:text-gray-200'>
                    {el.description}
                </p>}

                 />

             </Card>
         </div>
     </>)}
      
  </div>

  <Modal 
   title={t('add-service')}
   open={isModalOpen}
   onOk={handleOk}
   onCancel={handleCancel}
   footer={null}
  >
    <AddServices />
  </Modal>
  </>
}

export default AllServices