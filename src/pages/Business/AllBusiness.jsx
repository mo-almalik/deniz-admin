import React, { useState } from "react";
import AddBusiness from "./AddBusiness";
import { Modal, Card, Skeleton, Empty, Image, Popconfirm } from "antd";
import { HiEye, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { useGetBusinessesQuery, useDeleteBusinessMutation } from "../../features/business/businessApi";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import EditBusiness from "./EditBusiness";

function AllBusiness() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetBusinessesQuery({});
  const [deleteBusiness, { isLoading: loadingDelete }] = useDeleteBusinessMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(false); 
  const [currentBusiness, setCurrentBusiness] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
};

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentBusiness({});
    setEditingItem(false);
  };

  const handleDelete = async (id) => {
    const res = await deleteBusiness(id);
    if (res?.data?.statusMessage === "success") {
      toast.success(t("msg.deleteSuccess"));
    } else {
      toast.error(t("msg.deleteError"));
    }
  };
  const handleEdit = (business) => {
    setCurrentBusiness(business);  
    setEditingItem(true);
    showModal();
  };
  const handleAdd = () => {
    setCurrentBusiness({}); 
    setEditingItem(false);
    showModal();
  };


  return (
    <>
      <div className="flex justify-between items-center my-5">
        <h1 className="title">{t("fields-work")}</h1>
        <Button onClick={handleAdd}>{t("add-fields-work")}</Button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} active />)
          ) : isError ? (
            <div className="col-span-full text-center">
              <p className="text-red-500">{t("error-loading-data")}</p>
              <p>{error?.data?.message || t("try-again")}</p>
            </div>
          ) : data?.data.businessUnits?.length > 0 ? (
            data.data.businessUnits.map((el) => (
              <Card
                key={el._id}
                cover={
                  <Image
                    src={`http://localhost:5000/${el.logo}`}
                    alt={el.name}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                }
                actions={[
                  <button>
                    <HiOutlinePencilAlt
                    onClick={() => handleEdit(el)}
                    className="dark:text-gray-200 cursor-pointer"
                  />
                  </button>,
                  <Popconfirm
                    title={t("msg.deleteConfirm")}
                    okText={t("common.yes")}
                    cancelText={t("common.no")}
                    onConfirm={() => handleDelete(el._id)}
                    
                  >
                  <button>
                    <HiOutlineTrash className="dark:text-gray-200 cursor-pointer" />
                  </button>
                  </Popconfirm>,
                ]}
              >
                <Card.Meta title={el.name} description={el.description} />
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center">
              <Empty description={t("common.no-data")} />
            </div>
          )}
        </div>
      </div>

      <Modal
        title={editingItem ? t("edit-fields-work") : t("add-fields-work")}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
      {editingItem ? 
      <EditBusiness defaultValues={currentBusiness} onClose={handleCancel} />
      : 
      <AddBusiness onClose={handleCancel} /> }
       
      </Modal>
    </>
  );
}

export default AllBusiness;
