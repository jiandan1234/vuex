// import axios from "axios"
// import qs from "qs"
// import { config } from "shelljs"

// const service = axios.create({
//   timeout:5000
// })

// // 请求处理
// service.interceptors.request.use(
//   config=>{
//     return config
//   },
//   error=>{
//     console.log(error)
//     return Promise.reject(error)
//   }

// )
// // 响应处理
// service.interceptors.response.use(
//   response=>{
//     const res =response.data
//     return res
//   },
//   error=>{
//     console.log("err"+error)
//     return Promise.reject(error)
//   }
// )

// // 请求分为get、post
// // axios对于get和post的参数的处理方式不同
// function http (config){
//   if(config.method.toLowerCase()==="post"){
//     config.data =qs.stringify(config.data,{arrayFormat:"repeat",allowDots:true})
//   }else{
//     config.params=config.data;
//   }
//   return service(config);
// }

// export default http

import axios from "axios"

axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"

// 请求拦截器
axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})
// 响应拦截器
// axios.interceptors.response.ues(function(response){
//     return response;
// },function(error){
//     return Promise.reject(error);
// }
// )

// 封装axios的post请求
export function fetch(url,parms){
    return new Promise((resolve,reject)=>{
        axios.post(url,parms)
        .then(response=>{
            resolve(response.data);
        })
        .catch((error)=>{
            reject(error);
        })
    })
}

export default {
    get_news(url,parms){
        return fetch(url,parms)
    }
}