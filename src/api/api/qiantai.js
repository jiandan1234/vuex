import request from "@/api/index.js"
function tabledata(data){
  return request({
    url:"/customer/tabledata",
    method:"get",
    data
  })
}
export default tabledata