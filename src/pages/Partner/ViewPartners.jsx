import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Card, Empty, Image, Modal, Pagination, Popconfirm } from "antd";
import { TbTrash } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDeletePartnerMutation, useGetPartnersQuery } from "../../features/partner/partnerApi";
import AddPartner from "./AddPartner";
import Button from "../../ui/Button";
import { LuChevronRight } from "react-icons/lu";
import { toast } from "react-toastify";
const { Meta } = Card;

export default function ViewPartners() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // تتبع الصفحة الحالية
  const [deletePartner, { isError, error }] = useDeletePartnerMutation();
  
  // تمرير الصفحة الحالية إلى الاستعلام
  const { isLoading, data } = useGetPartnersQuery({ page: currentPage });
  
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const partner = data?.data?.documents;
  const totalDocuments = data?.data?.totalDocuments;
  const pageSize = 10;

  const handleSuccess = () => setIsModalOpen(false);

  const handleDelete = async (id) => {
    const res = await deletePartner(id);
    
    
    if (res?.data?.statusMessage === "success") {
      toast.success(t('msg.deleteSuccess'));
    } else {
      toast.error(t('msg.deleteError'));
    }
  };

  // تحديث الصفحة الحالية عند تغييرها
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <Helmet>
        <title>{t("our-partners")}</title>
      </Helmet>

      <div className="flex justify-between items-center my-5">
        <h1 className="title">{t("our-partners")}</h1>
        <Button onClick={showModal}>{t("add-partner")}</Button>
      </div>

      <div className="my-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 lg:gap-6 w-full">
          {partner?.length === 0 ? (
            <div className="text-start w-full">
              <Empty
                description={
                  <span className="text-center text-gray-600 dark:text-gray-400">
                    {t("common.no-data")}
                  </span>
                }
              />
            </div>
          ) : (
            partner?.map((item, index) => (
              <Card
                loading={isLoading}
                key={index}
                className="w-full p-2 rounded-lg"
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
                      title={t("msg.deleteConfirm")}
                      okText={t("common.yes")}
                      cancelText={t("common.no")}
                      onConfirm={() => handleDelete(item._id)}
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
                  description={
                    <div className="dark:text-white">{item.description}</div>
                  }
                  className="dark:text-white"
                />
              </Card>
            ))
          )}
        </div>

        <Pagination
          className=" mt-5"
          current={currentPage} // ربط الصفحة الحالية
          total={totalDocuments}
          showSizeChanger={false}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} ${t("common.of")} ${total}`
          }
          pageSize={pageSize}
          onChange={handlePageChange} 
        />
      </div>

      <Modal
        title={t("add-partner")}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <AddPartner ModalOpen={handleSuccess} />
      </Modal>
    </>
  );
}
