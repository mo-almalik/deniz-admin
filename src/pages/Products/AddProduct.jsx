import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { z } from "zod";
import DynamicForm from '../../components/DynamicForm';
function AddProduct() {
  const {t} = useTranslation()
  const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.string().regex(/^\d+$/, "Price must be a valid number"),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    image: z.instanceof(File).optional(), 
    pdf: z.instanceof(File).optional(),   
  });
  const fields = [
    { name: "name", label: "Product Name", type: "text", placeholder: "Enter product name" },
    { name: "description", label: "Description", type: "text", placeholder: "Enter product description" },
    { name: "price", label: "Price", type: "text", placeholder: "Enter price" },
    { name: "metaTitle", label: "Meta Title", type: "text", placeholder: "Enter meta title" },
    { name: "metaDescription", label: "Meta Description", type: "text", placeholder: "Enter meta description" },
    { name: "image", label: "Product Image", type: "image" },
    { name: "pdf", label: "Product PDF", type: "file" },
  ];
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("metaTitle", data.metaTitle || "");
    formData.append("metaDescription", data.metaDescription || "");

    if (data.image) formData.append("image", data.image); 
    if (data.pdf) formData.append("pdf", data.pdf);

    console.log(data);
    
  };
  return <>
    <Helmet>
      <title>{t('add-product')}</title>
    </Helmet>
    <div>
    <h1 className='title'>{t('add-product')}</h1>
    <DynamicForm schema={schema} fields={fields} onSubmit={onSubmit} />

    </div>
  </>
}

export default AddProduct