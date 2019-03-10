export const asyncChangeValue = (value) => (dispatch) => {
    // 此处做一些异步操作，记录日志等
    setTimeout(() => {
        dispatch({
            type: 'ASYNC_CHANGE_VALUE',
            payload: value
        })
    }, 2000);
}