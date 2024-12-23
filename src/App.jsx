import { useEffect } from 'react'
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { darkAlgorithm, defaultAlgorithm } from "antd/lib/theme";
import Routers from './routers/router';
import './i18n';
import { checkAuth } from './features/auth/authSlice';
import Loading from './components/Loading';
import { Bounce, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { i18n } = useTranslation();
  const themeMode = useSelector((state) => state.theme.mode) || "light";
  const colors = useSelector((state) => state.theme.colors[themeMode]);
  const arabicFont = 'Tajawal, Arial, sans-serif';
  const englishFont = 'Poppins, Arial, sans-serif';
  const fontFamily = i18n.language === 'ar' ? arabicFont : englishFont;
  const toastDir = i18n.language === "ar" ? true : false;

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = direction;
  }, [i18n.language]);

  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(checkAuth())
    }
  }, [dispatch, isAuthenticated])

  if (isLoading) {
    return <Loading />
  }


  return <>
    <HelmetProvider>
      <ConfigProvider
        theme={{
          algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: colors.primary,
            colorText: colors.textColor,
            borderRadius: 2,
            colorBgBase: colors.backgroundColor,
            fontFamily: fontFamily,

          },
          components: {
            Table: {
              headerBg: colors.tableBg,
              footerBg: colors.tableBg,
              colorBgContainer: colors.tableBg,
            },
            Card: {
              borderRadiusLG: 12,
            }
          }
        }}
      >
        <RouterProvider router={Routers} />
        <ToastContainer
          position="top-center"
          toastStyle={{
            fontFamily: i18n.language === 'ar' ? arabicFont : englishFont
          }}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={toastDir}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        theme="light"
        transition={Bounce}
          />
      </ConfigProvider>
    </HelmetProvider>


  </>
}

export default App
