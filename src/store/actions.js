/*
通过mutation间接更新state的多个方法的对象
*/
import {
    reqAddress,
    reqFootCategorys,
    reqShops
} from '../api/index'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_ShOPS
} from './mutation-types'

export default {
    // 异步获取地址
    async getAddress ({commit,state}){   //  getAddress (context){  context = store ,   {commit,state} =store
        // 发送异步ajax请求
        const geohash = state.latitude + ',' +state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },  
    async getCategorys ({commit}){    
        // 发送异步ajax请求
        const result = await reqFootCategorys()
    //   console.log();
        // 提交一个mutation
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },  
    async getShops ({commit,state}){ 
        // 发送异步ajax请求
        const data = {
            longitude:state.longitude,
            latitude:state.latitude
        }
        // {longitude,latitude} = state
        const result = await reqShops(data)
        // 提交一个mutation
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_ShOPS,{shops})
        }
    },  
}
