import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserServices } from "./user-services";

const initialState = {
    user: {},
    status: 'idle',
}
const userServices = new UserServices();

export const getUserByIdAsync = createAsyncThunk(
    'user/getUserByIdAsync',
    async (id) => {
        const response = await userServices.getUserById(id, (user) => console.log('Callback in userSlicer: ', user));
        // console.log('resp: ', response)
        return response;
    }
)

export const getNewUserAsync = createAsyncThunk(
    'user/getNewUser',
    async () => {
        const response = await userServices.getNewUser((newUser) => console.log('Callback in userSlicer (new): ', newUser));
        // console.log('resp new: ', response)
        return response;
    }
)

// export const setEmailAsync = createAsyncThunk(
//     'user/setEmailAsync',
//     async (id, email) => {
//         console.log('setEmailAsync: ', id, email)
//         const response = await userServices.setUserEmail(id, email, (email) => console.log('Callback in userSlicer (email): ', email));

//         console.log('resp email: ', response)
//         return response;
//     }
// )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log('action.payload: ', action.payload)
                state.user = action.payload;
            })
            .addCase(getNewUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getNewUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log('action.payload: ', action.payload)
                state.user = action.payload;
            })
        // .addCase(setEmailAsync.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(setEmailAsync.fulfilled, (state, action) => {
        //     state.status = 'idle';
        //     console.log('action.payload: ', action)
        //     state.user.email = action.payload;
        // });
    },
});

export default userSlice.reducer;