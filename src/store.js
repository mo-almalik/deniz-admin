import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme/themeSlice"
import sidebarReducer from "./features/sidebar/sidebarSliec"


export default configureStore({
    reducer: {
        // theme
        theme: themeReducer, 
        // toggleSidebar 
        sidebar: sidebarReducer,
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
