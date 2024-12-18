import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function AddUser() {
    const { t } = useTranslation()
 
  return <>
  <Helmet>
   <title>{t('add-user')}   </title>
  </Helmet>
   <h1 className='title'>{t('add-user')}</h1>

   <div>
    
   </div>
  </>
}

export default AddUser