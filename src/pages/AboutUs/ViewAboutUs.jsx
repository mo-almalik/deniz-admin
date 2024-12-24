import React, { useEffect, useState } from 'react';
import AddAboutUs from './AddAboutUs';
import { useTranslation } from 'react-i18next';
import { Segmented } from 'antd';
import { useGetAboutQuery } from '../../features/About/AboutApi';
import Button from '../../ui/Button';

function ViewAboutUs() {
  const { t, i18n } = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const { data, isLoading } = useGetAboutQuery();
  const [lang, setLang] = useState('en');
  const [aboutId, setAboutId] = useState({});

  const about = data?.data;
 


  useEffect(() => {
    const currentLang = i18n.language; 
    setLang(currentLang);  
  },[i18n.language]);

const handleEdit = (data) => {
  setIsEdit(true);
  setAboutId(data)

}

const handleCancle = () => {
  setIsEdit(false);
  setAboutId({})
}

console.log(aboutId);

  return (
    <>
      <h1 className="title">{t('about-us')}</h1>

      <div className="my-5">
        <Segmented
          className="p-3 font-medium text-md dark:text-white dark:bg-dark"
          options={[
            { label: 'المعلومات الاساسية', value: 'List' },
            { label: 'معلومات الشركة', value: 'Kanban' },
            { label: 'عنوان الشركة', value: 'Card' },
            { label: 'منصات التواصل', value: 'Media' },
            { label: 'بيانات التواصل  ', value: 'File' },
          ]}
          onChange={(value) => console.log(value)} 
        />
        <div className="mt-5"></div>
      </div>
      {about?.map((el, index) => (
        <div key={index} className="mb-4">
          <h2>{el.companyName?.[lang] || t('No company name available')}</h2>
          <div>
          <h4>{t('company.description')}</h4>
          <p>{el.description?.[lang] || t('No description available')}</p>
          </div>
         
          <div>
          <h4>{t('company.mission')}</h4>
          <p>{el.mission?.[lang] || t('No mission available')}</p>
          </div>
          <p>{el.vision?.[lang] || t('No vision available')}</p>
          <p>{el.values?.[lang] || t('No values available')}</p>
                {/* edit butm */}
      <Button  onClick={()=>handleEdit(el)}>
        {t('common.edit')}
      </Button>
      <Button  onClick={()=>handleCancle()}>
        {t('common.cancel')}
      </Button>
        </div>
      ))}



    
      {isEdit && <AddAboutUs about={aboutId}  />}
    </>
  );
}

export default ViewAboutUs;
