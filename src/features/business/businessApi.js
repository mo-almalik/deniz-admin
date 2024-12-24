import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
})

export const businessSlice = createApi({
    reducerPath: "business",
    baseQuery: axiosBaseQuery,
    tagTypes: ['Businesses'],
    endpoints: (builder) => ({
        // get all businesses
        getBusinesses: builder.query({
            query: ({ page = 1, limit=10, search }) => {
                const params = new URLSearchParams({ page, limit });
                if (search) {
                    params.append("search", search);
                }
                return {
                    url: "/business-units",
                    params,
                };
            },
            providesTags: ["Businesses"],
            // transformResponse: (response) => response.data.data,
        }),

        // get business by id
        getBusinessById: builder.query({
            query: (id) => ({
                url: `/business-units/${id}`,
                method: 'GET',

            }),
            providesTags: ["Businesses"],
        }),

        // create business
        createBusiness: builder.mutation({
            query: (business) => ({
                url: "/business-units",
                method: "POST",
                body: business,
            }),
            invalidatesTags: ['Businesses'],
        }),

        // update business
        updateBusiness: builder.mutation({
            query: ({id,business}) => ({
                url: `/business-units/${id}`,
                method: "PUT",
                body: business,
            }),
            invalidatesTags: ['Businesses'],
        }),

        // delete business
        deleteBusiness: builder.mutation({
            query: (id) => ({
                url: `/business-units/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Businesses'],
        })

    })

})


export const { useGetBusinessesQuery, useGetBusinessByIdQuery, useCreateBusinessMutation, useUpdateBusinessMutation, useDeleteBusinessMutation } = businessSlice