import { useEffect } from 'react'
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import Routers from './routers/router';
import { useSelector } from 'react-redux';
import { darkAlgorithm, defaultAlgorithm } from "antd/lib/theme";
import './i18n';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const { i18n } = useTranslation();
  const themeMode = useSelector((state) => state.theme.mode) || "light";
  const colors = useSelector((state) => state.theme.colors[themeMode]);
  useEffect(() => {
   
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language; 
    document.documentElement.dir = direction; 
  }, [i18n.language]);

  const arabicFont = 'Tajawal, Arial, sans-serif';  
  const englishFont = 'Poppins, Arial, sans-serif';  
  const fontFamily = i18n.language === 'ar' ? arabicFont : englishFont;
  return <>
   <HelmetProvider>
  <ConfigProvider
  theme={{
    algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
    token:{
      colorPrimary: colors.primary,
      colorText: colors.textColor,
       borderRadius: 2,
       colorBgBase: colors.backgroundColor,
       fontFamily: fontFamily
       
    },
    components:{
      Table:{
        headerBg: colors.tableBg,
        footerBg: colors.tableBg,
        colorBgContainer: colors.tableBg, 
      }
    }
  }}
  >
  <RouterProvider router={Routers} />
  </ConfigProvider>
   </HelmetProvider>


  </>
}

export default App
