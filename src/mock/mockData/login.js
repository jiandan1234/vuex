import Mock from "mockjs"
const Random = Mock.Random

const login =function(userinfo){
  console.log("userinfo",userinfo);
  let userinfo=[];
  for (let i =0;i<1;i++){
    let obj={
      id:i+1,
      username:Random.name(0,10),
      password:Random.range(6),
      realname:Random.cname(),
      idTpye:Random.natural(0,10),
      age:Random.natural(0,2)
    }
    userinfo.push(obj)
  }
  return {datas:userinfo}
}
export default login