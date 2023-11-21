package com.my_bookstore.Dao;
import com.my_bookstore.Entity.Book;

import java.util.List;

public interface BookDao {

    List<Book> getBooks();

    Book findBookByAuthor(String name);
}
