import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispath) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
};
export const signup = (formData, history) => async (dispath) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
};