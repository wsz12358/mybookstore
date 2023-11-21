package com.my_bookstore.Controller;
import com.alibaba.fastjson.JSONArray;
import com.my_bookstore.Entity.User;
import com.my_bookstore.Entity.UserAuth;
import com.my_bookstore.Service.LoginService;
import com.my_bookstore.Constant.LoginConstant;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import java.util.Map;

@RequestMapping("/log")
@RestController
@Scope("session")
public class LoginController {

    @Autowired
    LoginService loginService;

    @Autowired
    WebApplicationContext applicationContext;

    @Autowired
    TimeService timeService;

    //acoustic:
    //登陆服务 使用fetch通过body发送请求 post类型为"POST"
    @RequestMapping("/login")
    public JSONObject login(@RequestBody Map<String, String> params) {
        String username = params.get(LoginConstant.USERNAME);
        String password = params.get(LoginConstant.PASSWORD);
        UserAuth userauth = loginService.checkUserAuth(username, password);
        timeService = applicationContext.getBean(TimeService.class);
        System.out.println(timeService);
        timeService.BeginTimer();
        return (JSONObject) JSON.toJSON(userauth);
    }

    @RequestMapping("/banchange")
    public JSONObject ChangeBan(@RequestBody Map<String, String> params) {
        String id = params.get(LoginConstant.USERID);
        loginService.UpdateUserAuth(Integer.valueOf(id));
        UserAuth userauth = loginService.getUserAuthById(Integer.valueOf(id));
        return (JSONObject) JSON.toJSON(userauth);
    }

    @RequestMapping("/getall")
    public JSONArray GetAll(@RequestBody Map<String, String> params) {
        return JSON.parseArray(JSON.toJSONString(loginService.getUsers()));
    }

    @RequestMapping("/add")
    public JSONObject addUser(@RequestBody Map<String, String> params) {
        String username = params.get(LoginConstant.USERNAME);
        String password = params.get(LoginConstant.PASSWORD);
        String email = params.get(LoginConstant.EMAIL);
        System.out.println(loginService.ifUserAuthExist(username));
        if (loginService.ifUserAuthExist(username) == null) {

            return (JSONObject) JSON.toJSON(loginService.addUser(username, password, email));
        }
        return (JSONObject) JSON.toJSON(null);
    }

    @RequestMapping("/logout")
    public JSONObject Logout()
    {
        timeService.StopTimer();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("redirect", "true");
        return jsonObject;
    }
}
