package com.my_bookstore.DaoImpl;

import com.alibaba.fastjson.JSON;
import com.my_bookstore.Dao.BookDao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.BookIcon;
import com.my_bookstore.Entity.BookType;
import com.my_bookstore.Repository.BookIconRepository;
import com.my_bookstore.Repository.BookRepository;
import com.my_bookstore.Repository.BookTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.time.Duration;
import java.util.List;
import java.util.Optional;

@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookIconRepository bookIconRepository;

    @Autowired
    private BookTypeRepository bookTypeRepository;
    @Autowired
    private RedisTemplate redisTemplate;
    @Override
    public Book findOne(Integer id){
        String key = String.valueOf(id);
        String json = JSON.toJSONString(redisTemplate.opsForValue().get(key));
        if (!json.equals("null"))
        {
            Book book = JSON.parseObject(json, Book.class);
            System.out.println("get book " + key + " from redis, value is " + json);
            return book;
        }
        Book book = bookRepository.getOne(id);
        Optional<BookIcon> icon = bookIconRepository.findById(id);
        if (icon.isPresent())
        {
            book.setImage(icon.get().getIconBase64());
        }
        else
        {
            book.setImage(null);
        }
        redisTemplate.opsForValue().set(key, JSON.toJSON(book), Duration.ofMinutes(30));
        System.out.println("set book " + key + " into redis");
        return book;
    }
    @Override
    public List<Book> getBooks() {
        List<Book> books =  bookRepository.getBooks();
        for (int i = 0; i < books.size(); i++)
        {
            Book book = books.get(i);
            Optional<BookIcon> icon = bookIconRepository.findById(book.getBookId());
            if (icon.isPresent())
            {
                book.setImage(icon.get().getIconBase64());
            }
            else
            {
                book.setImage(null);
            }
            books.set(i, book);
        }
        return books;
    }

    @Override
    public void addBook(Book book)
    {
        bookRepository.save(book);
        BookIcon bookIcon = new BookIcon(book.getBookId(), book.getImage());
        bookIconRepository.save(bookIcon);
    }

    @Override
    public void deleteBook(Integer id)
    {
        String key = String.valueOf(id);
        Boolean del = redisTemplate.delete(key);
        System.out.println("delete book " + key + " from redis, result is " + del);
        bookRepository.deleteBookByBookId(id);
        bookIconRepository.deleteById(id);
    }

    @Override
    public void UpdateBook(String name, String author, String image, String isbn, Integer inventory, Integer id)
    {
        String key = String.valueOf(id);
        bookRepository.UpdateBook(name, author, image, isbn, inventory, id);
        Boolean del = redisTemplate.delete(key);
        BookIcon bookIcon = bookIconRepository.findById(id).get();
        bookIcon.setIconBase64(image);
        bookIconRepository.save(bookIcon);
        System.out.println("delete book " + key + " from redis, result is " + del);
    }

    @Override
    public List<BookType> FindSimilarType(String type)
    {
        return bookTypeRepository.getSimilarBookTypes(type);
    }

    @Override
    public List<Book> FindBookByType(String type)
    {
        List<Book> books = bookRepository.getBooksByType(type);
        for (int i = 0; i < books.size(); i++)
        {
            Book book = books.get(i);
            Optional<BookIcon> icon = bookIconRepository.findById(book.getBookId());
            if (icon.isPresent())
            {
                book.setImage(icon.get().getIconBase64());
            }
            else
            {
                book.setImage(null);
            }
            books.set(i, book);
        }
        return books;
    }
}
