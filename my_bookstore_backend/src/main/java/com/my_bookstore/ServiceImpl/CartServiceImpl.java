package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Dao.CartDao;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    CartDao cartDao;

    @Override
    public List<Cart> GetCart(Integer id)
    {
        return cartDao.getCartsByUserAuth(id);
    }

    @Override
    public void DeleteCart(Integer id)
    {
        cartDao.DeleteByUserAuth(id);
    }

    @Override
    public Cart setCart(Integer purchasenum, Integer bookid, Integer userauthid)
    {
        Cart cart = null;
        cart = cartDao.GetCartByBookAndUserAuth(cartDao.getBook(bookid), userauthid);
        if (cart == null) {
            cart = new Cart();
            cart.setPurchasenum(purchasenum);
            cart.setBook(cartDao.getBook(bookid));
            cart.setUserAuth(cartDao.getUserAuth(userauthid));
            cartDao.SetCart(cart);
            return cart;
        } else {
            cartDao.ChangeCart(cart.getPurchasenum() + purchasenum, cart.getCartId());
            return cart;
        }
    }


}
