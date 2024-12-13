import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme/themeSlice"


export default configureStore({
    reducer: {
        // theme
        theme: themeReducer, 
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
