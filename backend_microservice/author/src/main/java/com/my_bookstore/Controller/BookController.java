package com.my_bookstore.Controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Constant.BookConstant;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @ClassName BookController
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/6 16:07
 */
@RequestMapping("/author")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/getBooks")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }


    @RequestMapping("/author")
    public JSONObject addBook(@RequestBody Map<String, String> params)
    {
        Book book = new Book();
        String name = params.get(BookConstant.NAME);
        JSONObject obj = new JSONObject();
        obj.put("name", bookService.getAuthorByName(name));
        return obj;
    }

}
