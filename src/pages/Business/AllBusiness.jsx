import { Card, Image, Modal, Skeleton, Empty, Spin, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AddBusiness from './AddBusiness';
import Button from '../../ui/Button';
import { useDeleteBusinessMutation, useGetBusinessesQuery } from '../../features/business/businessApi';
import { HiEye, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import Meta from 'antd/es/card/Meta';
import { toast } from 'react-toastify';

function AllBusiness() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetBusinessesQuery({});
  const[deleteBusiness,{isLoading:loadingDelete}] = useDeleteBusinessMutation();
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

  const handleDelete = async (id) => {
    
    const res= await deleteBusiness(id);
    if(res?.data?.statusMessage === 'success'){
      toast.success(t('msg.deleteSuccess'))
    }else{
      toast.error(t('msg.deleteError'))
    }
    
  
   
  }

  return (
    <>
      <Helmet>
        <title>{t('fields-work')}</title>
      </Helmet>
      
      <div className="flex justify-between items-center my-5">
        <h1 className="title">{t('fields-work')}</h1>

     
        <Button onClick={showModal}>
          {t('add-fields-work')}
        </Button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
           
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} active avatar={{ size: 'large', shape: 'square'  }} />
            ))
          ) : isError ? (
            <div className="col-span-full text-center">
              <p className="text-red-500">{t('error-loading-data')}</p>
              <p>{error?.data?.message || t('try-again')}</p>
            </div>
          ) : data?.data.businessUnits?.length > 0 ? (
            data.data.businessUnits.map((el) => (
              <div className="w-full text-center relative" key={el._id}>
                <Card
                  className="p-3 rounded-lg bg-white dark:bg-dark mx-auto"
                  cover={
                    <Image
                      src={`http://localhost:5000/${el.logo}`}
                      alt={el.name}
                      loading="lazy"
                      height={200}
                      className="object-cover rounded-lg"
                    />
                  }
                  actions={[
                    <button type="primary" onClick={() => console.log(el.id)}>
                      <HiEye className="dark:text-gray-200" />
                    </button>,
                    <button type="primary" onClick={() => console.log(el.id)}>
                    
                      <HiOutlinePencilAlt className="dark:text-gray-200" />
                    </button>,
                    <button type="primary" >
                    <Popconfirm
                    placement={"top"}
                    title={t('msg.deleteConfirm')}
                    // description={t('msg.deleteConfirm')}
                    okText={t('common.yes')}
                    cancelText={t('common.no')}
                    onConfirm={() => handleDelete(el._id)}
                  >
                <HiOutlineTrash className="dark:text-gray-200" />
              </Popconfirm>
                      
                    </button>,
                  ]}
                >
                  <Meta
                    title={el.name}
                    description={<p className="dark:text-gray-200">{el.description}</p>}
                  />
                </Card>
              </div>
            ))
          ) : (
           
            <div className="col-span-full text-center ">
              <Empty description={<>
                <div className='text-gray-900 dark:text-white mt-5'>
                  {t('common.no-data')}
                </div>
              </>} className='' />
            </div>
          )}
        </div>
      </div>

      
      <Modal
        title={t('add-fields-work')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddBusiness />
      </Modal>
    </>
  );
}

export default AllBusiness;
