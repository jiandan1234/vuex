// index作为mock的索引
import Mock from "mockjs"
import custdata from "./mockData/custdata"
import login from "./mockData/login"

// 客户信息
Mock.mock("/customer/tabledata","get",custdata);
Mock.mock("/checklogin","post",login)