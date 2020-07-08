// 是否登陆过期
function isLogin(){
   this.axios.interceptors.response.use(function(response){
        return response
      },(error)=>{
        let res = error.response;
         if(res.status == 401){
             console.log(res)
          return false
         }
      });
}
//监听滑动条事件
function listenScroll(){

}

export {
    isLogin,
    listenScroll
}