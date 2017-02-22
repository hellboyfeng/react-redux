export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const LOADDATA = 'LOADDATA'
export const GETSUCCESS = 'GETSUCCESS'
export const REFRESHDATA = 'REFRESHDATA'
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax


// 这里的方法返回一个action对象
export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('http://dd.xiya3333.com/ddtalk/approve/apps?userid=6000724&organcode=0000&kind=83')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded() {

    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
