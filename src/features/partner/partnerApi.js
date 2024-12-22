import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const axiosBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
})


export const partnerSlice = createApi({
    reducerPath: "partner",
    baseQuery: axiosBaseQuery,
    tagTypes: ['Partners'],
    endpoints: (builder) => ({
        getPartners: builder.query({
            query: ({ page = 1, limit=10, search }) => {
                const params = new URLSearchParams({ page, limit });
                if (search) {
                    params.append("search", search);
                }
                return `/partners?${params.toString()}`;
            },
            providesTags: ["Partners"],
        }),
        createPartner: builder.mutation({
            query: (partner) => ({
                url: "/partners",
                method: "POST",
                body: partner,
            }),
            invalidatesTags: ['Partners'],
        }),

        deletePartner: builder.mutation({
            query: (id) => ({
                url: `/partners/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Partners'],
        })
    })

})
    


export const {useGetPartnersQuery, useCreatePartnerMutation,useDeletePartnerMutation} = partnerSlice