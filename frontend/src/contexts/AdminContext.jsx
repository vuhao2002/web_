import axios from 'axios';
import React from 'react';
import { apiUrl } from './constants';
import { adminReducer } from '../reducers/adminReducer';

import {
    ACCOUNT_LOADED_SUCCESS,
    ACCOUNT_LOADED_FAIL,
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    UPDATE_ACCOUNT,
    FIND_ACCOUNT,
} from '../contexts/constants';

export const AdminContext = React.createContext();

const AdminContextProvider = ({ children }) => {
    const [accountState, dispatch] = React.useReducer(adminReducer, {
        account: null,
        accounts: [],
        accountLoading: true,
    });

    const [showToast, setShowToast] = React.useState({
        show: false,
        message: '',
        type: null,
    });

    const getAccounts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/admin/account`);
            if (response.data.success) {
                dispatch({
                    type: ACCOUNT_LOADED_SUCCESS,
                    payload: validateData(response.data.accounts),
                });
            }
        } catch (error) {
            dispatch({ type: ACCOUNT_LOADED_FAIL });
        }
    };

    const addAccount = async (newAccount) => {
        try {
            const response = await axios.post(`${apiUrl}/admin/account/create`, newAccount);
            if (response.data.success) {
                dispatch({ type: ADD_ACCOUNT, payload: response.data.account });
                return response.data;
            }
        } catch (error) {
            console.log('addAccount: ', error);
        }
    };

    const validateData = (data) => {
        return data.map((dataItem) => {
            return {
                ...dataItem,
                id: dataItem._id,
            };
        });
    };

    const value = { getAccounts, showToast, setShowToast, addAccount, accountState };
    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminContextProvider;
