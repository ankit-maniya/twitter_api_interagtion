
const successRes = (data: any, status=200) => {
    return {
        data,
        status,
        message: 'Data Fetched Successfully!'
    }
}

export {
    successRes
}