import VueCookies from 'vue-cookie';
// 是否登录过期
function isLogin() {
    if (VueCookies.get('token')) {
        return true
    } else {
        return false
    }
}

//获取user信息
function getUser() {
    let user = localStorage.getItem('user');
    return JSON.parse(user)
}

//时间戳转换
function changeTime(value) {
    let time = new Date(Number(value * 1000));
    if (time.toDateString() === new Date().toDateString()) {
        //今天 
        return `${time.getHours()}:${time.getMinutes()}`
    } else if (time.getFullYear() == new Date().getFullYear()) {
        //今年
        return `${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
    } else {
        //其他年
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
    }
}
//获取unix格式的时间戳
function getTime() {
    return Number(new Date().getTime()/1000);
}

export default {
    isLogin,
    getUser,
    changeTime,
    getTime
}