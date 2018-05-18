

var url = "http://backend.hm-keji.com:"

//用户管理后台
var url_backend_school = `${url}19100`;

//缓存服务
var url_service_cache = `${url}18001`;

var config = {


  //获取用户信息，根据手机号码
  user_by_phone: `${url_backend_school}/user/phone`,

  //统计所有接口
  statistics_all: `${url_service_cache}/statistics_all`,
 
  //统计某用户
  statistics_user: `${url_service_cache}/user/id`,

};



module.exports = config