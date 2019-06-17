export const ADD_FRUIT = 'ASYNC_ADD_FRUIT';

export const addFruit = (value) => (dispatch) => {
    // 此处做一些异步操作，记录日志等
    setTimeout(() => {
        dispatch({
            type: ADD_FRUIT,
            payload: value
        })
    }, 2000);
}