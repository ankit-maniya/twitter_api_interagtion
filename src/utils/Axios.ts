import axios from 'axios'
import { TWITTER_BEARER_TOKEN } from '../configs';

axios.interceptors.request.use(
    function (req: any) {
        req.time = { startTime: new Date() };
        req.headers['Authorization'] = `Bearer ${TWITTER_BEARER_TOKEN}`;
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    function (res: any) {
        res.config.time.endTime = new Date();
        res.duration =
            res.config.time.endTime - res.config.time.startTime;
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// axios
//     .get("http://localhost:3000")
//     .then((res: any) => {
//         console.log(res.duration)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export { axios as API }