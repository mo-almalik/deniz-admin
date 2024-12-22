import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme/themeSlice"
import sidebarReducer from "./features/sidebar/sidebarSliec"

import authSlice from "./features/auth/authSlice"


export default configureStore({
    reducer: {
        // theme
        theme: themeReducer, 
        // toggleSidebar 
        sidebar: sidebarReducer,
        // auth slice options
        auth: authSlice,

        

   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        
    ),
});
