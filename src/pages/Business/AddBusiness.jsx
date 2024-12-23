import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "antd";  
import InputField from "../../components/InputField";
import { useCreateBusinessMutation } from "../../features/business/businessApi";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button"

function AddBusiness({ defaultValues = {} }) {
  const { t } = useTranslation();
  const [createBusiness,{isLoading,data,isError,error}] =useCreateBusinessMutation()
  const [previewImage, setPreviewImage] = useState(null); 
  const schema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(1).max(500),
    logo: z.instanceof(File),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
    
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl); 
      register("logo", { value: file }); 
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("logo", data.logo);
    formData.append("name", data.name);
    formData.append("description", data.description);
    const response  = await createBusiness(formData)
    if(response?.data?.statusMessage === "success") {
      toast.success(t('msg.success'))
    }else if (response.error.data.statusMessage === "failed"){
      toast.error(t('msg.error'))
    }

    
  };

  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
    {isError && <span className="text-red-500">{error?.data?.message}</span>}
        <InputField
          name="name"
          label="Name"
          placeholder={"Name"}
          register={register}
          error={errors.name}
        />
        <InputField
          name="description"
          label="Description"
          placeholder={"Description"}
          register={register}
          error={errors.description}
          type="textarea"
        />

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            رفع ملف
          </label>
          <input
            onChange={(e) => handleLogoChange(e)}
            type="file"
            style={{
              border: errors.file ? "1px solid red" : "1px solid #ccc",
              padding: "8px",
              borderRadius: "4px",
              width: "100%",
            }}
          />
          {errors.file && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.file.message}
            </span>
          )}
        </div>

       
        {previewImage && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              معاينة الصورة:
            </label>
            <Image
              src={previewImage}  
              alt="Preview"
              width={200}
              height={200}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <Button type="submit" loading={isLoading}>
          {t('common.add')}
        </Button>
      </form>
    </>
  );
}

export default AddBusiness;
