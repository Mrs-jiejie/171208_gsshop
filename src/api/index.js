// import { get } from './ajax'
/*
api 接口
*/

import ajax from'./ajax'
import axios from'axios'
// // const BASE_URL = '/http://localhost:4000'
// const BASE_URL = 'http://localhost:4000'


// 1.获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// export function reqAddress(data){
//     return get('/position/116.36867 40.10038',data)
// }
// 2.获取食品分类信息
export const reqFootCategorys = () => ajax ("/index_category")
// 3.根据经纬度获取商品列表
export const reqShops = (data) => ajax('/shops')
// 4.获取一次性验证码
// 5.用户名密码登录
// 6.发送短信验证码
// 7.发送手机号验证码
// 8.手机号验证码登录
// 9.根据会话获取用户信息
// 10.用户登录
