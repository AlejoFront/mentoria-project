
export function clearData<T>(data: T) {
    let payload: T = {} as T;
    for (const key  in data) {
        if(data[key] !== ''){
            payload[key] = data[key]
        }
    }
    return payload;
}