//package com.gateway.utils.Token;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//import org.springframework.stereotype.Component;
//import org.springframework.web.context.request.RequestContextHolder;
//import org.springframework.web.context.request.ServletRequestAttributes;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.Date;
//import java.util.List;
//
//@Component
//public class TokenUtil {
//    /**
//     *
//     * @param token
//     * @return userId
//     * 获取制定token中某个属性值
//     */
//    public static String getUsername(String token) {
//        List<String> list = JWT.decode(token).getAudience();
//        String username = JWT.decode(token).getAudience().get(0);
//        return username;
//    }
//
//    /**
//     * 获取request
//     * @return
//     */
//    public static HttpServletRequest getRequest() {
//        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder
//                .getRequestAttributes();
//        return requestAttributes == null ? null : requestAttributes.getRequest();
//    }
//
//
//    /**
//     *
//     * @param request
//     * @return
//     * 获取token
//     */
//    public String getToken(HttpServletRequest request) {
//        String authorizationHeader = request.getHeader("Authorization");
//        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
//        {
//            return authorizationHeader.substring(7);
//        }
//        return null;
//    }
//
//    public static String getTokenFromHeader(String value)
//    {
//        return value.substring(7);
//    }
//}
