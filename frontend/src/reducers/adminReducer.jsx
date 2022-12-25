import {
    ACCOUNT_LOADED_SUCCESS,
    ACCOUNT_LOADED_FAIL,
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    UPDATE_ACCOUNT,
    FIND_ACCOUNT,
} from '../contexts/constants';

export const adminReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACCOUNT_LOADED_SUCCESS:
            return {
                ...state,
                accounts: payload,
                accountLoading: false,
            };

        case ACCOUNT_LOADED_FAIL:
            return {
                ...state,
                accounts: [],
                accountsLoading: false,
            };

        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, { ...payload, id: payload._id }],
            };

        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter((account) => account._id !== payload),
            };

        case FIND_ACCOUNT:
            return { ...state, account: payload };

        case UPDATE_ACCOUNT:
            const newaccounts = state.accounts.map((account) =>
                account._id === payload._id ? payload : account,
            );

            return {
                ...state,
                accounts: newaccounts,
            };

        default:
            return state;
    }
};
