package com.my_bookstore.Controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.my_bookstore.Constant.BookConstant;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.BookIcon;
import com.my_bookstore.Entity.BookType;
import com.my_bookstore.Repository.BookTypeRepository;
import com.my_bookstore.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @ClassName BookController
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/6 16:07
 */


@RequestMapping("/book")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private BookTypeRepository bookTypeRepository;
    @RequestMapping("/getBooks")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @RequestMapping("/getBook")
    public Book getBook(@RequestParam("id") Integer id){
        return bookService.findBookById(id);
    }

    @RequestMapping("/addBook")
    public JSONObject addBook(@RequestBody Map<String, String> params)
    {
        Book book = new Book();
        book.setName(params.get(BookConstant.NAME));
        book.setType(params.get(BookConstant.TYPE));
        book.setAuthor(params.get(BookConstant.AUTHOR));
        book.setPrice(Double.valueOf(params.get(BookConstant.PRICE)));
        book.setDescription(params.get(BookConstant.DESCRIPTION));
        book.setInventory(Integer.valueOf(params.get(BookConstant.INVENTORY)));
        book.setImage(params.get(BookConstant.IMAGE));
        bookService.addBook(book);
        return (JSONObject) JSON.toJSON(book);
    }

    @RequestMapping("/deleteBook")
    public JSONObject deleteBook(@RequestBody Map<String, String> params)
    {
        String id = params.get(BookConstant.ID);
        bookService.deleteBook(Integer.valueOf(id));
        JSONObject object = new JSONObject();
        object.put("mes", "success");
        return object;
    }

    @RequestMapping("/updateBook")
    public JSONObject updateBook(@RequestBody Map<String, String> params)
    {
        String name = params.get(BookConstant.NAME);
        String author = params.get(BookConstant.AUTHOR);
        String image = params.get(BookConstant.IMAGE);
        String isbn = params.get(BookConstant.ISBN);
        String inventory = params.get(BookConstant.INVENTORY);
        String id = params.get(BookConstant.ID);

        bookService.UpdateBook(name, author, image, isbn, Integer.valueOf(inventory), Integer.valueOf(id));
        return (JSONObject) JSON.toJSON(bookService.findBookById(Integer.valueOf(id)));
    }

    @RequestMapping("/findtype")
    public List<Book> FindType(@RequestBody Map<String, String> params)
    {
        String type = params.get(BookConstant.TYPE);
        return bookService.FindSimilarBooks(type);

    }

    @RequestMapping("/test")
    public void test(@RequestParam("type1") String type1, @RequestParam("type2") String type2)
    {
        BookType bookType1 = bookTypeRepository.findByType(type1);
        BookType bookType2 = bookTypeRepository.findByType(type2);

        System.out.println(bookType1);
        bookType1.isSimiliarTo(bookType2);
        bookTypeRepository.save(bookType1);
    }

    @RequestMapping("/test1")
    public List<BookType> test2(@RequestParam("type1") String type1)
    {
        BookType bookType1 = new BookType(type1);
        return bookTypeRepository.getSimilarBookTypes(type1);
    }
}
