import { EDIT_USER } from "../constant"

//创建增加一个人的action动作对象
export const editUser = userObj => ({type:EDIT_USER,data:userObj})