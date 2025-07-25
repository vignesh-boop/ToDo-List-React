import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userName:"",
    mobileNumber:"",
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        setUser:(state , action)=>{
            state.userName = action.payload.userName;
            state.mobileNumber=action.payload.mobileNumber;
        },
        clearUser:(state)=>{
            state.userName="";
            state.mobileNumber="";
        },
    }
})

export const {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;