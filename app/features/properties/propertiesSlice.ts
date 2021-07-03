import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const propertiesApi = createApi({
    reducerPath: 'propertyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://stageapi.jaisalmertrust.com/' }),
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => `properties`,
        }),
        getPropertyByName: builder.query<any, string>({
            query: (name) => `properties/${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPropertiesQuery, useGetPropertyByNameQuery } = propertiesApi