// 封装一个随机生成6位验证码的函数
function getVerifyCode(){
    let str="abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ0123456789";
    let length=str.length
    let strcode=""
    for(let i=0;i<6;i++){
        strcode+=str[parseInt(Math.random()*length)]
    }
    return strcode
}
