import { useEffect } from 'react'
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import Routers from './routers/router';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
   
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language; 
    document.documentElement.dir = direction; 
  }, [i18n.language]);

  return <>
  <ConfigProvider>
  <RouterProvider router={Routers} />
  </ConfigProvider>

  </>
}

export default App
