import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user state
type TUserState = {
    user: null | object;
    token: string | null;
};

// Initial state, properly typed
const initialState: TUserState = {
    user: null,
    token: null,
};

// Create the slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: object; token: string }>) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

// Export the actions and reducer
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const userCurrentToken=(state: { auth: { token: any; }; })=>state.auth.token
export const userCurrentUser=(state: { auth: { user: any; }; })=>state.auth.user