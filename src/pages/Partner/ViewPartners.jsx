import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Button, Card, Image, Pagination, Popconfirm } from "antd";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
const { Meta } = Card;

export default function ViewPartners() {
  const { t } = useTranslation();
  const isLoading = false;
  const partner = [
    {
      id: 1,
      name: "شركة الأموال",
      logo: "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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

      <h1 className="text-2xl font-bold">{t("our-partners")} </h1>

      <div className="my-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 lg:gap-6 w-full">
          {partner?.partner === 0 ? (
            <div className="text-start w-full">
              لا يوجد شركاء حاليا. يمكنك إضافة شريك جديد .
              <Link to={"#"}>اضافة شريك</Link>
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
                    src={item.logo}
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
    </>
  );
}
