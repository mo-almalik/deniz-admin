import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice"
import sidebarReducer from "./features/sidebar/sidebarSliec"
import authSlice from "./features/auth/authSlice"
import { businessSlice } from "./features/business/businessApi";
import { partnerSlice } from "./features/partner/partnerApi";
import { AboutSlice } from "./features/About/AboutApi";


export default configureStore({
    reducer: {
        // theme
        theme: themeReducer, 
        // toggleSidebar 
        sidebar: sidebarReducer,
        // auth slice options
        auth: authSlice,
        // business slice options
        [businessSlice.reducerPath]: businessSlice.reducer,
        // partner slice options
        [partnerSlice.reducerPath]: partnerSlice.reducer,
        // about us slice options
        [AboutSlice.reducerPath]: AboutSlice.reducer
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        businessSlice.middleware,
        partnerSlice.middleware,
        AboutSlice.middleware,
    ),
});
