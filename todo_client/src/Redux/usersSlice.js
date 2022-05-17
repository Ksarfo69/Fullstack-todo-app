import {createSlice} from '@reduxjs/toolkit'


const usersSlice = createSlice({
    name: 'Users',
    initialState: {
        userInfo: null,
        authPending: false,
        authError: false,
        authSuccess: false,
        registrationSuccess: false,
        registrationError: false,
        registrationPending: false,
        wrongPassmatch: false
    },
    reducers: {
        loginStart: (state) => {
            state.authPending = true
        },
        loginSuccess: (state, action) => {
            state.authPending = false;
            state.userInfo = action.payload;
            state.authSuccess = true;
            state.authError = false
        },
        loginError: (state) => {
            state.authPending = false;
            state.authError = true;
        },
        loginEnd: (state) => {
            state.authError = false;
        },
        registrationStart: (state) => {
            state.registrationPending = true
        },
        registrationSuccess: (state, action) => {
            state.registrationPending = false;
            state.registrationSuccess = true;
            state.registrationError = false
        },
        registrationError: (state) => {
            state.registrationPending = false;
            state.registrationError = true;
        },
        registrationEnd: (state) => {
            state.registrationSuccess = false;
        },
        logout: (state) => {
            state.userInfo = null
        }
}
})


export const {loginStart, loginSuccess, loginError, loginEnd, registrationStart, registrationSuccess, registrationError, registrationEnd, logout} = usersSlice.actions
export default usersSlice.reducer