package com.my_bookstore.DaoImpl;

import com.my_bookstore.Dao.OrderDao;
import com.my_bookstore.Entity.*;
import com.my_bookstore.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderProductRepository orderProductRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    BookIconRepository bookIconRepository;

    @Override
    public List<Order> getOrders()
    {
        return orderRepository.findAll();
    }

    @Override
    @Transactional
    public void setOrder(Order order)
    {
        orderRepository.save(order);
        //int result = 10 / 0;
    }

    @Override
    @Transactional
    public void setOrderProduct(OrderProduct op)
    {
        orderProductRepository.save(op);
        // int result = 10 / 0;
    }
  
    @Override
    public List<Cart> GetCarts()
    {
        return cartRepository.findAll();
    }

    @Override
    public void DeleteCartByUserAuth(Integer id)
    {
        cartRepository.deleteCartsByUserAuth(id);
    }

    @Override
    public void DeleteOrderproduct(Integer id)
    {
        orderProductRepository.deleteOrderProducts(id);
    }

    @Override
    public void DeleteOrder(Integer id)
    {
        orderRepository.deleteOrderById(id);
    }

    @Override
    public Order GetOrder(Integer id)
    {
        Order order =  orderRepository.getOrder(id);
        List<OrderProduct> ops = order.getOrderProducts();
        List<OrderProduct> new_ops = new ArrayList<>();
        for (OrderProduct orderProduct: ops)
        {
            Book book = orderProduct.getBook();
            Optional<BookIcon> icon = bookIconRepository.findById(book.getBookId());
            if (icon.isPresent())
            {
                book.setImage(icon.get().getIconBase64());
            }
            else
            {
                book.setImage(null);
            }
            orderProduct.setBook(book);
            new_ops.add(orderProduct);
        }
        order.setOrderProducts(new_ops);
        return order;
    }

    @Override
    public UserAuth GetUserAuth(Integer id){return userAuthRepository.findUserAuthByUserId(id);}

    @Override
    public List<Cart> getCartsByUserAuth(Integer id){return cartRepository.findCartsByUserAuth(id);}

    @Override
    public List<Order> getOrdersByUserAuth(Integer id){
        List<Order> new_orders = new ArrayList<>();
        List<Order> old_orders = orderRepository.getOrdersByUser(id);
        for (Order order: old_orders)
        {
            List<OrderProduct> ops = order.getOrderProducts();
            List<OrderProduct> new_ops = new ArrayList<>();
            for (OrderProduct orderProduct: ops)
            {
                Book book = orderProduct.getBook();
                Optional<BookIcon> icon = bookIconRepository.findById(book.getBookId());
                if (icon.isPresent())
                {
                    book.setImage(icon.get().getIconBase64());
                }
                else
                {
                    book.setImage(null);
                }
                orderProduct.setBook(book);
                new_ops.add(orderProduct);
            }
            order.setOrderProducts(new_ops);
            new_orders.add(order);
        }
        return new_orders;
    }

    @Override
    public void UpdateInventory(Integer num, Integer id) {bookRepository.UpdateInventory(num ,id);}
}
