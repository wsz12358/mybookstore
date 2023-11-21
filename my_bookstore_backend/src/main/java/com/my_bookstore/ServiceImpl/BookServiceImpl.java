package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Dao.BookDao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.BookType;
import com.my_bookstore.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
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
    public Book findBookById(Integer id){
        return bookDao.findOne(id);
    }
    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public void addBook(Book book)
    {
        bookDao.addBook(book);
    }

    @Override
    public void deleteBook(Integer id)
    {
        bookDao.deleteBook(id);
    }

    @Override
    public void UpdateBook(String name, String author, String image, String isbn, Integer inventory, Integer id)
    {
        bookDao.UpdateBook(name, author, image, isbn, inventory, id);
    }

    @Override
    public List<Book> FindSimilarBooks(String type)
    {
        List<BookType> types = bookDao.FindSimilarType(type);
        List<Book> res = new ArrayList<>();
        for (BookType booktype: types)
        {
            List<Book> thistype = bookDao.FindBookByType(booktype.getType());
            res.addAll(thistype);
        }
        return res;
    }

}
