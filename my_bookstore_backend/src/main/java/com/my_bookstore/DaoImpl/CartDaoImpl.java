package com.my_bookstore.DaoImpl;

import com.my_bookstore.Dao.CartDao;
import com.my_bookstore.Entity.Book;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.UserAuth;
import com.my_bookstore.Repository.BookRepository;
import com.my_bookstore.Repository.CartRepository;
import com.my_bookstore.Repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserAuthRepository userAuthRepository;

    @Override
    public List<Cart> GetCarts()
    {
        return cartRepository.findAll();
    }

    @Override
    public void SetCart(Cart cart)
    {
        cartRepository.save(cart);
    }

    @Override
    public Cart GetCartByBookAndUserAuth(Book book, Integer id)
    {
        return cartRepository.findCartByBook(book, id);
    }

    @Override
    public Integer ChangeCart(Integer purchasenum, Integer id)
    {
        return cartRepository.findCartByBook2(purchasenum, id);
    }

    @Override
    public void DeleteByUserAuth(Integer id)
    {
        cartRepository.deleteCartsByUserAuth(id);
    }

    @Override
    public Book getBook(Integer id){
        return bookRepository.getOne(id);
    }

    @Override
    public List<Cart> getCartsByUserAuth(Integer id){return cartRepository.findCartsByUserAuth(id);}

    @Override
    public UserAuth getUserAuth(Integer id){return userAuthRepository.findUserAuthByUserId(id);}
}
