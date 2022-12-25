export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8081'
        : 'https://sleepy-inlet-56101.herokuapp.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'

// Admin - account
export const ACCOUNT_LOADED_SUCCESS = "ACCOUNT_LOADED_SUCCESS"
export const ACCOUNT_LOADED_FAIL = "ACCOUNT_LOADED_FAIL"
export const ADD_ACCOUNT = "ADD_ACCOUNT"
export const DELETE_ACCOUNT = "DELETE_ACCOUNT "
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT"
export const FIND_ACCOUNT = "FIND_ACCOUNT"