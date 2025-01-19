import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";

const baseQuery = fetchBaseQuery({ 
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    }
});

const baseQueryWithRefrehsToken=async(args,api,extraOption)=>{
const result= await baseQuery(args,api,extraOption)
console.log(result);
}
const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefrehsToken,
    endpoints: () => ({})
});

export default baseApi;
