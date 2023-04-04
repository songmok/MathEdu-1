import { createSlice } from "@reduxjs/toolkit";

export interface userType {
    id: string;
    imageURL: string;
    name: string;
    no: number;
    user: string;
    classNo: number;
    teacherNo: number;
}

const initialState: userType = {
    id: "",
    imageURL: "",
    name: "",
    no: 0,
    user: "",
    classNo: 0,
    teacherNo: 0,
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
            state.classNo = action.payload.classNo;
            state.teacherNo = action.payload.teacherNo;
        },
        logoutUser(state) {
            state.id = "";
            state.imageURL = "";
            state.name = "";
            state.no = 0;
            state.user = "";
            state.classNo = 0;
            state.teacherNo = 0;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
