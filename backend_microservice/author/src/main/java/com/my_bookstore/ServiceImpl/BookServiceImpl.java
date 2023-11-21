package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Dao.BookDao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public String getAuthorByName(String name){
        Book book = bookDao.findBookByAuthor(name);
        return book.getAuthor();
    }
    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }


}
