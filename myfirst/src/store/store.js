import { configureStore } from '@reduxjs/toolkit';

// const { createStore } = require("redux");

const initialState = {
    name: "",
    accountBalance: 0,
    adress: "",
    bankName: ""
}


function reducer(state = initialState, action) {

    switch (action.type) {
        case "withdra": return { ...state, accountBalance: state - action.accountBalance }
        case "deposit": return { ...state, accountBalance: state + action.accountBalance }
        default: return state
    }

}


const store = configureStore({
    reducer: reducer
});


export default store
