//package com.gateway.Feign;
//
//import com.gateway.Entity.ResultData;
//import org.springframework.cloud.openfeign.FeignClient;
//import org.springframework.stereotype.Component;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@FeignClient("timesnap-user-center")
//@Component
//public interface UserCenter {
//
//    @RequestMapping("/checkToken")
//    public ResultData<Boolean> CheckUser(@RequestParam("token")String token);
//}
