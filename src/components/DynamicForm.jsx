import React from "react";
import { Form, Input, Button, Upload } from "antd";
import { useForm, Controller } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const DynamicForm = ({ schema, fields, onSubmit, defaultValues = {} }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleFileUpload = (file, fieldName) => {
    setValue(fieldName, file); 
    return false;
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          validateStatus={errors[field.name] ? "error" : ""}
          help={errors[field.name]?.message}
        >
          <Controller
            name={field.name}
            control={control}
            render={({ field: controllerField }) => {
              switch (field.type) {
                case "text":
                  return <Input {...controllerField} placeholder={field.placeholder} />;
                case "file":
                  return (
                    <Upload
                      beforeUpload={(file) => handleFileUpload(file, field.name)}
                      listType="text"
                    >
                      <Button icon={<UploadOutlined />}>
                        {field.buttonLabel || "Upload File"}
                      </Button>
                    </Upload>
                  );
                case "image":
                  return (
                    <Upload
                      beforeUpload={(file) => handleFileUpload(file, field.name)}
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>
                        {field.buttonLabel || "Upload Image"}
                      </Button>
                    </Upload>
                  );
                default:
                  return null;
              }
            }}
          />
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
