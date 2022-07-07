import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { userService } from '../../services/UserServices'
import { hideLoading, showLoading } from "./loadingSlice"
import { Notification } from "../../components/antd/notification/notification.component";
import history from "../../history";


export const userLogin = createAsyncThunk(
    "/",
    async (dataInfo, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            dispatch(showLoading());
            const { data } = await userService.login(dataInfo);
            localStorage.setItem("user-smso-logged", JSON.stringify(data));
            dispatch(hideLoading());
            Notification("success", "Logged in successfully", "top")
            history.push("/");
        } catch (error) {
            Notification("warning", "You have wrong email or password", "top")
            console.log(error)
            dispatch(hideLoading());
        }
    }
);

export const userRegister = createAsyncThunk(
    "/registerUser",
    async (dataInfo, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            dispatch(showLoading());
            await userService.register(dataInfo);
            dispatch(hideLoading());
            Notification("success", "You have successfully registered", "top")
        } catch (error) {
            Notification("warning", "You have failed to register", "top")
            console.log(error);
            dispatch(hideLoading());
        }
    }
);

export const getAllUserList = createAsyncThunk(
    "/Users",
    async (_, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            dispatch(showLoading());
            const response = await userService.getAllUsers();
            dispatch(hideLoading());
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getOneUser = createAsyncThunk(
    "/users/getOneUser",
    async (id, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            dispatch(showLoading());
            const response = await userService.getOneUser(id);
            dispatch(hideLoading());
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "/users/deleteUser",
    async (id, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;

        try {
            await userService.deleteUser(id);
            dispatch(showLoading());
            Notification("success", "Xóa thành công", "top");
            dispatch(getAllUserList());
            setTimeout(() => {
                dispatch(hideLoading());
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    "/users/updateUser",
    async (data, thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        try {
            dispatch(showLoading());
            await userService.updateUser(data.id, data.inputValue);
            dispatch(hideLoading());
            Notification("success", "Cập nhật thành công", "top");
        } catch (error) {
            console.log(error);
        }
    }
);


const initialState = {
    userList: [],
    user: {},
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUserList.fulfilled.type]: (state, action) => {
            state.userList = action.payload;
        },
        [getOneUser.fulfilled.type]: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;