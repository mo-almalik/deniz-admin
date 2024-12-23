import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Card, Empty, Image, Modal, Pagination, Popconfirm } from "antd";
import { TbTrash } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useGetPartnersQuery } from "../../features/partner/partnerApi";
import AddPartner from "./AddPartner";
import Button from "../../ui/Button";
const { Meta } = Card;

export default function ViewPartners() {
  const { t } = useTranslation();
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
  const {isError,error,isLoading,data} = useGetPartnersQuery({})
  const partner = data?.data?.documents;


  const handleSuccess = () => {
    setIsModalOpen(false);
};
  const handleDelete = (id) => {
    // delete partner from your data source
    // set partner state with the updated data
    console.log("delete partner", id);
  };
  return (
    <>
      <Helmet>
        <title> {t("our-partners")} </title>
      </Helmet>

      <div className="flex justify-between items-center my-5">
      <h1 className="title">{t("our-partners")} </h1>

      <Button onClick={showModal}>
          {t('add-partner')}
        </Button>
      </div>

      <div className="my-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 lg:gap-6 w-full">
          {partner?.partner === 0 ? (
            <div className="text-start w-full">
              <Empty 
              description={
                <span className="text-center text-gray-600 dark:text-gray-400">
                  {t('common.no-data')}
                </span>
              }
               />
            </div>
          ) : (
            partner?.map((item, index) => (
              <Card
                loading={isLoading}
                key={index}
                className="w-full p-2  rounded-lg"
                cover={
                  <Image
                    alt={item.name}
                    src={`http://localhost:5000/${item.image}`}
                    loading="lazy"
                    height={150}
                    className="object-cover rounded-lg"
                  />
                }
                actions={[
                  <div className="flex items-center justify-center">
                    <Popconfirm
                      title="هل تريد حذف هذا الشريك؟"
                      okText="نعم"
                      cancelText="لا"
                      onConfirm={() => handleDeletePartner(item._id)}
                      okButtonProps={{
                        loading: isLoading,
                      }}
                    >
                      <span>
                        <TbTrash className="dark:text-white" />
                      </span>
                    </Popconfirm>
                  </div>,
                ]}
              >
                <Meta
                  title={item.name}
                  description=<div className="dark:text-white">
                    {item.description}
                  </div>
                  className="dark:text-white"
                />
              </Card>
            ))
          )}
        </div>
      </div>



      <Modal
        title={t('add-partner')}
        open={isModalOpen}
        onOk={handleOk}
        onClose={handleCancel}
        onCancel={handleCancel}
        footer={false}
      >
        <AddPartner ModalOpen={handleSuccess} />
      </Modal>
    </>
  );
}
