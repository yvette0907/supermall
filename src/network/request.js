import axios from 'axios'
// export function request(config) {
//     //1.创建实例
//     const instance = axios.create({
//         baseUrl: 'http://106.54.54.237:8000/api/v1',
//         // timeout: 5000
//     })
//     instance.interceptors.request.use(config => {
//         console.log(config);
//         return config
//     }, err => {
//         console.log(err);
//     })
//     instance.interceptors.response.use(res => {
//         console.log(res);
//         return res.data;
//     }, err => {
//         console.log(err);
//     })

//     return instance(config)
// }
export function request(config) {
    // 1.创建实例
    const instance = axios.create({
            baseURL: 'http://106.54.54.237:8000/api/v1',
            timeout: 5000
        })
        // 2. axios拦截器
        // 2.1 请求拦截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);
        //1.比如config中的一些信息不符合服务器的要求

        //2.比如发送网络请求时，都希望在界面中显示一个请求的图标

        //3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err);
    })

    //2.2响应拦截
    instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        }, err => {
            console.log(err);
        })
        //3.发送真正的网络请求
    return instance(config)

}