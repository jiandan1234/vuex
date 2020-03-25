import MOCK from "mockjs"
const Random = MOCK.Random

const custdata=function(cust){
  console.log("cust",cust);
  status:200;
  message: 'success';
  let tabledatas=[];
  for (let i =0;i<10;i++){
    let obj={
      id:i+1,
      date:Random.date("yyyy-MM-dd"),
      name:Random.cname(),
      address:Random.province()+Random.city(),
      zip:Random.zip(),
    }
    tabledatas.push(obj)
  }
  return {datas:tabledatas}
}
export default custdata