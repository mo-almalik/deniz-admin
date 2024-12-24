import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "antd";
import InputField from "../../components/Form/InputField";
import { useUpdateBusinessMutation } from "../../features/business/businessApi";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";

function EditBusiness({ onClose, defaultValues }) {
  const { t } = useTranslation();
  const [updateBusiness, { isLoading }] = useUpdateBusinessMutation();
  const [previewImage, setPreviewImage] = useState(defaultValues.logo || null);
  
  const schema = z.object({
    name: z.string().min(3, t("validation.minLength")).max(50, t("validation.maxLength")),
    description: z.string().min(1, t("validation.required")).max(500),
    logo: z.any().optional(),
  });

  const {
    register,
    setValue,
    reset,
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
      setValue("logo", file); // استخدام setValue لتحديث الحقل
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (data.logo instanceof File) {
      formData.append("logo", data.logo);
    }

    const response = await updateBusiness({ id: defaultValues._id, business: formData });
    if (response?.data?.statusMessage === "success") {
      toast.success(t("msg.success"));
      onClose();
    } else {
      toast.error(response.error?.data?.message || t("msg.error"));
    }
  };

  useEffect(() => {
    reset(defaultValues);
    if (defaultValues.logo) {
      setPreviewImage(defaultValues.logo); // معاينة الصورة الافتراضية
    }
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors?.name && <span className="text-red-500">{errors.name.message}</span>}
      {errors?.description && <span className="text-red-500">{errors.description.message}</span>}

      <InputField
        name="name"
        label={t("fields.name")}
        placeholder={t("fields.namePlaceholder")}
        register={register}
        error={errors.name}
      />
      <InputField
        name="description"
        label={t("fields.description")}
        placeholder={t("fields.descriptionPlaceholder")}
        register={register}
        error={errors.description}
        type="textarea"
      />

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>{t("fields.logo")}</label>
        <input
          onChange={handleLogoChange}
          type="file"
          style={{
            border: errors.logo ? "1px solid red" : "1px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
            width: "100%",
          }}
        />
        {errors.logo && (
          <span style={{ color: "red", fontSize: "12px" }}>{errors.logo.message}</span>
        )}
      </div>

      {previewImage && (
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>{t("fields.logoPreview")}</label>
          <Image
            src={`http://localhost:5000/${previewImage}`}
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
        {t("common.edit")}
      </Button>
    </form>
  );
}

export default EditBusiness;
