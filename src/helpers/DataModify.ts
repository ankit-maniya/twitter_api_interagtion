const removeDubFromArray = (data: any) => {
    let res = [ ...new Set(data)];
    return res;
}

export {
    removeDubFromArray
}