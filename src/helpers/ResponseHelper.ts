
const successRes = (data?: any, message='', status=200) => {
    
    const res = {
        response: [],
        status,
        type: 'success',
        message: 'Data Fetched Successfully!',
    };

    if(data)
        res.response = data;

    if(message)
        res.message = message;

    return res;
}

const errorRes = (message='', data?: any, status=404) => {
    
    const res = {
        response: [],
        message: '',
        status,
        type: 'error',
    };

    if(data)
        res.response = data;

    if(message)
        res.message = message;

    return res;
}

export {
    successRes,
    errorRes
}