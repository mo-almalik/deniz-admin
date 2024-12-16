import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import CountComponent from '../../components/CountComponent';
function Home() {
  const {t} = useTranslation()
  return <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="My Admin Panel" />
    </Helmet>

 
      <h1 className='title'>{t('dashboard')}</h1>

     <CountComponent />
     
  </>
}

export default Home