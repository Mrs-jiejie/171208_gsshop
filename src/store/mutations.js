/*
直接更新state的多个方法对象
mutaion-types  常量类型
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_ShOPS
} from './mutation-types'

export default {
    // 方法
[RECEIVE_ADDRESS] (state,{address}) {
    // 获取后台数据后,给数据赋值
    state.address = address
},
[RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
    // console.log(state.categorys);
},
[RECEIVE_ShOPS] (state,{shops}) {
    state.shops = shops.shoplist
}
}