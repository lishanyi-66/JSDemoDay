
window.onload=function(){
    let arr = ['web前端','HTML核心','css核心','Vue','CSS+HTML','Javascript',]
    let input=document.getElementById('value')
    let show = document.getElementById('show')
// console.log(input)
// 键盘按下事件
    input.onkeyup=function(){
        show.style.display="block"
        //  设置空元素
        let str=''
        arr.forEach((item)=>{
            let res= item.indexOf(input.value)
            // console.log(res)
            if(res!=-1){
                str += "<p>"+item+"</p>" ;
                // 插入HTML元素要加上双引号
            }
            
        })
        // 如果input.value为空或者str为false 给用户提示
        if(!input.value||!str){
            show.innerHTML="<p>暂无结果</p>"
        }else{
            show.innerHTML=str
        }
        // console.log(str)
        
    }
    
    // 
    input.onblur=function(){
        show.style.display="none";
        input.value="";
    }
}