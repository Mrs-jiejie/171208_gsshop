/*
axios 请求封装
返回值: promise 对象 (异步返回的数据是 reponse.data) 
*/
import axios from 'axios'
export default function ajax(url,data={},type = 'GET'){
  axios.defaults.baseURL = 'https://mockapi.eolinker.com/VI7eRPX8f70f4286dedb017506dd716bd0f349f57e128ef'
  return  new Promise(function(resolve,reject){
          //  执行异步函数
              let promise
              if (type === 'GET') {
                  // 准备url query参数数据
                  let dataStr = '' // 数据拼接字符串
                  Object.keys(data).forEach(key =>{
                      dataStr += key + '=' + data[key] + '$'
                  })
                  if(dataStr !== ''){
                      dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                      url = url + '?' + dataStr
                  }
                  // 发送get请求
                  promise = axios.get(url)
              }else{
                  // 发送get请求
                  promise = axios.post(url,data)
              }
              promise.then(response => {
                  // 成功调用resolve()
                  resolve(response.data)
              }).catch(error =>{
                 // 失败调用reject()
                  reject()
              }) 
          })
}



// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function get(url, params = {}) {

//     var aa = localStorage.getItem('token');
//     let headers = {
//       'Content-Type': 'application/json'
//     }
//     if (localStorage.getItem('token')) {
  
//       headers = {
//         'Content-Type': 'application/json',
//         'token': localStorage.getItem('token')
//       }
//     }
//     return new Promise((resolve, reject) => {
//       axios({
//           method: 'get',
//           url: url,
//           headers,
//           params: params
//         }).then(response => {
//           resolve(response.data);
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   }
  
  
//   /**
//    * 封装post请求
//    * @param url
//    * @param data
//    * @returns {Promise}
//    */
  
//   export function post(url, data = {}) {
//     //把拿到的taken存到localStorage,然后取出
//     let headers = {
//       'Content-Type': 'application/json'
//     }
//     if (localStorage.getItem('token')) {
//       headers = {
//         'Content-Type': 'application/json',
//         'token': localStorage.getItem('token')
//       }
//     }
//     return new Promise((resolve, reject) => {
//       axios({
//           method: 'post',
//           url: url,
//           headers,
//           data: data
//         })
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err)
//         })
//     })
//   }
  
//   /**
//  * 封装postJosn请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function postJosn(url, data = {}) {
//   let headers = {
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   }
//   if (localStorage.getItem('token')) {
//     headers = {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       'token': localStorage.getItem('token')
//     }
//   }
//   return new Promise((resolve, reject) => {
//     axios({
//         method: 'post',
//         url: url,
//         headers,
//         data: data
//       })
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err)
//       })
//   })
// }






