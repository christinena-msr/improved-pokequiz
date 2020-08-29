import axios from 'Axios';


// export const loginUser = (userData) => {
//     return axios.post('/api/passport/login', userData);
// }

export const loginUser = (userData) => {
    return { success: true, user: userData};
}

// export const signupUser = (userData) => {
//     return axios.post('/api/passport/signup', userData)
// }

export const signupUser = (userData) => {
    return { success: true, user: userData};
}

// export const logoutUser = () => {
//     return axios.get('/api/passport/logout');
// }

export const logoutUser = () => {
    return { success: true };
}