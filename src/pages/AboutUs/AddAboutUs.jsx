import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AboutUsSchema } from "../../utils/Validations";
import { useTranslation } from "react-i18next";
import InputField from "../../components/Form/InputField";
import TextAreaField from "../../components/Form/TextAreaField";
import Button from "../../ui/Button";
import { useCreateAboutMutation, useUpdateAboutMutation } from "../../features/About/AboutApi";
import FileInput from "../../components/Form/FileInput";
import { Image } from "antd";
import { toast } from "react-toastify";

function AddAboutUs({about}) {
  const { t } = useTranslation();
  const [previewImage, setPreviewImage] = useState(null); 
  const [createAbout,{isError,error,isLoading}]=useCreateAboutMutation()
  const [updateAbout,{isError:updateIsError ,error:updateError}] = useUpdateAboutMutation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AboutUsSchema),
    defaultValues: about || {},
  });

  const onSubmit = async (data) => {
    
    const formData = new FormData();

    if (data.logo) {
      formData.append("logo", data.logo);  
    }
  
    formData.append("companyName[en]", data.companyName.en);
    formData.append("companyName[ar]", data.companyName.ar);

    formData.append("description[en]", data.description.en);
    formData.append("description[ar]", data.description.ar);

    formData.append("mission[en]", data.mission.en);
    formData.append("mission[ar]", data.mission.ar);

    formData.append("vision[en]", data.vision.en);
    formData.append("vision[ar]", data.vision.ar);

    formData.append("values[en]", data.values.en);
    formData.append("values[ar]", data.values.ar);

    formData.append("phone", data.phone);
    formData.append("whatsapp", data.whatsapp);
    const res = about ? await updateAbout({id:about._id , about:formData}) : await createAbout(formData);

    if (res?.data?.statusMessage === "success") {
      toast.success(t('msg.success'));
    } else {
      toast.error(res?.error?.data?.statusMessage || t('msg.error'));
    }
    
  }
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setValue("logo", file, { shouldValidate: true }); 
    }
  };
  
  useEffect(() => {
    if (about?.logo) {
      const logoPath = typeof about.logo === "string" ? about.logo : URL.createObjectURL(about.logo);
      setPreviewImage(logoPath);
    }
  }, [about]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
    {isError && <span className="text-red-500">{error?.data?.message}</span>}
    
      {/* Logo */}
      <div className="flex flex-col md:flex-row w-full gap-5">
        <FileInput
        name="logo"
        label={t("company.logo")}
        accept="image/*"
        onChange={(e)=>handleLogoChange(e)}
        error={errors?.logo}



         />
         {previewImage && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              معاينة الصورة:
            </label>
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
      </div>
      {/* Company Name */}
      <div className="flex flex-col md:flex-row w-full gap-5">
      <div className={'w-full'}>
      <InputField
        name="companyName.en"
        label={t("company.companyName") + ' (En)'}
        placeholder={t("company.companyName") + ' English'}
        register={register}
        error={errors?.companyName?.en}
        className={'w-full'}
      />
      </div>
      <div className={'w-full'}>
      <InputField
        name="companyName.ar"
        label={t("company.companyName") + ' (Ar)'}
        placeholder={t("company.companyName") + ' Arabic'}
        register={register}
        error={errors?.companyName?.ar}
        className={'w-full'}
       
      />
      </div>

      </div>
      <div className="flex flex-col md:flex-row w-full gap-5">
      <div className={'w-full'}>
      <InputField
        name="phone"
        label={t("company.phone")}
        placeholder={t("company.phone")}
        register={register}
        error={errors?.phone}
        className={'w-full'}
      />
      </div>
      <div className={'w-full'}>
      <InputField
        name="whatsapp"
        label={t("company.whatsapp")}
        placeholder={t("company.whatsapp")}
        register={register}
        error={errors?.whatsapp}
        className={'w-full'}
       
      />
      </div>

      </div>

      {/* Description */}
      <div className="flex flex-col md:flex-row w-full gap-5">
      <div className={'w-full'}>
        
      <TextAreaField
        name="description.en"
        label={t("company.description")+ ' (En)'}
        placeholder={t("company.description") + "English"}
        register={register}
        error={errors?.description?.en}
      />
      </div>
      <div className={'w-full'}>

      <TextAreaField
        name="description.ar"
        label={t("company.description")+ ' (Ar)'}
        placeholder={t("company.description") + "Arabic"}
        register={register}
        error={errors?.description?.ar}
      />
      </div>
  </div>
  
      {/* Mission */}
      <div className="flex flex-col md:flex-row w-full gap-5">
      <div className={'w-full'}>
      <TextAreaField
        name="mission.en"
        label={t("company.mission") + ' (En)'}
        placeholder={t("company.mission") + "English"}
        register={register}
        error={errors?.mission?.en}
      />
        </div>
        <div className={'w-full'}>
        
      <TextAreaField
        name="mission.ar"
        label={t("company.mission")+ ' (Ar)'}
        placeholder={t("company.mission")+ "Arabic"}
        register={register}
        error={errors?.mission?.ar}
      />
      </div>
 </div>

      {/* Vision */}
      <div className="flex flex-col md:flex-row w-full gap-5">
      <div className={'w-full'}>
      <TextAreaField
        name="vision.en"
        label={t("company.vision") + " (En)" }
        placeholder={t("company.vision") + "English"}
        register={register}
        error={errors?.vision?.en}
      />
       </div>
       <div className={'w-full'}>
      <TextAreaField
        name="vision.ar"
        label={t("company.vision")+ ' (Ar)'}
        placeholder={t("company.vision")+ "Arabic"}
        register={register}
        error={errors?.vision?.ar}
      />
        </div>
      </div>

      {/* Values */}
      <div className="flex flex-col md:flex-row w-full gap-5">
       <div className={'w-full'}>
       <TextAreaField
        name="values.en"
        label={t("company.values") + " (En)"}
        placeholder={t("company.values") + "English"}
        register={register}
        error={errors?.values?.en}
      />
       </div>
       <div className={'w-full'}>
      <TextAreaField
        name="values.ar"
        label={t("company.values") + " (Ar)"}
        placeholder={t("company.values") + " Arabic"}
        register={register}
        error={errors?.values?.ar}
      />
         </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" style={{ marginTop: "20px" }}>
  {about ? t('common.edit') : t('common.add')}
</Button>
    </form>
  );
}

export default AddAboutUs;
