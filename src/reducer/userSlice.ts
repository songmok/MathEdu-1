import { createSlice } from "@reduxjs/toolkit";

interface userType {
    id: string;
    imageURL: string;
    name: string;
    no: number;
}

const initialState: userType = { id: "", imageURL: "", name: "", no: 0 };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.id = action.payload.id;
            state.imageURL = action.payload.imageURL;
            state.name = action.payload.name;
            state.no = action.payload.no;
        },
        logoutUser(state) {
            state.id = "";
            state.imageURL = "";
            state.name = "";
            state.no = 0;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
