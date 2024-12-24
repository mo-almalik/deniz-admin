import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
})

export const AboutSlice = createApi({
    reducerPath :"about",
    baseQuery: axiosBaseQuery,
    tagTypes: ['About'],
    endpoints: (builder) => ({
        getAbout: builder.query({
            query: () => ({
                url: "/info",
                method: "GET",
            }),
            providesTags: ['About'],
        }),

        // create about
        createAbout: builder.mutation({
            query: (about) => ({
                url: "/info",
                method: "POST",
                body: about,
            }),
            nvalidatesTags: ['About'],
        }),

        // update about
        updateAbout: builder.mutation({
            query: ({id,about}) => ({
                url: `/info/`,
                method: "PUT",
                body: about,
            }),
            nvalidatesTags: ['About'],
        }),

        // delete about
        deleteAbout: builder.mutation({
            query: (id) => ({
                url: `/info/${id}`,
                method: "DELETE",
            }),
            nvalidatesTags: ['About'],
        }),

    })
   
})


export const { useGetAboutQuery, useCreateAboutMutation, useUpdateAboutMutation, useDeleteAboutMutation } = AboutSlice