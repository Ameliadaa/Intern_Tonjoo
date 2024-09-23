import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios;

// import Axios from 'axios';

// const axios = Axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Ensure this environment variable is correctly set.
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//     },
//     withCredentials: true, // Make sure this is correctly set to handle cookies
// });

// export default axios;
