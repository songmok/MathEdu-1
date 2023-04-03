import { createSlice } from "@reduxjs/toolkit";

export interface userType {
    id: string;
    imageURL: string;
    name: string;
    no: number;
    user: string;
}

const initialState: userType = {
    id: "",
    imageURL: "",
    name: "",
    no: 0,
    user: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.id = action.payload.id;
            state.imageURL = action.payload.imageURL;
            state.name = action.payload.name;
            state.no = action.payload.no;
            state.user = action.payload.user;
        },
        logoutUser(state) {
            state.id = "";
            state.imageURL = "";
            state.name = "";
            state.no = 0;
            state.user = "";
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
