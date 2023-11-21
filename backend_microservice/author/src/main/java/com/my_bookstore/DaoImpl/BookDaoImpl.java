package com.my_bookstore.DaoImpl;

import com.my_bookstore.Dao.BookDao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }

    @Override
    public Book findBookByAuthor(String name)
    {
        return bookRepository.findBookByName(name);
    }


}
