package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Dao.OrderDao;
import com.my_bookstore.Entity.Cart;
import com.my_bookstore.Entity.Order;
import com.my_bookstore.Entity.OrderProduct;
import com.my_bookstore.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderDao orderDao;

    @Override
    public List<Order> getOrdersByUserAuth(Integer id) {return orderDao.getOrdersByUserAuth(id);}

    @Override
    public List<Order> getOrders()
    {
        return orderDao.getOrders();
    }

    @Transactional
    @Override
    public Order addOrder(String ordertime, String orderstate, Integer id)
    {
        List<Cart> Carts = orderDao.getCartsByUserAuth(id);
        Order order = new Order();
        if (Carts != null) {

            Double _total = (double) 0;
            order.setTotal_price(_total);
            order.setOrdertime(ordertime);
            order.setOrderstate(orderstate);
            order.setUserAuth(orderDao.GetUserAuth(id));

            //int result = 10 / 0;
            orderDao.setOrder(order);
            //int result = 10 / 0;
            for (Cart cart : Carts) {
                orderDao.UpdateInventory(cart.getPurchasenum(), cart.getBook().getBookId());

                OrderProduct op = new OrderProduct();
                op.setPurchaseNum(cart.getPurchasenum());
                op.setBook(cart.getBook());
                op.setOrdering(order);
                orderDao.setOrderProduct(op);
//            order.setOrderProducts(op);
                System.out.println(op);
                _total += cart.getPurchasenum() * cart.getBook().getPrice();
            }
            order.setTotal_price(_total);
            orderDao.setOrder(order);
            orderDao.DeleteCartByUserAuth(id);
//            int result = 10 / 0;
            return order;
        }
        return order;
    }

    @Override
    public void DeleteOrder(Integer id)
    {
        Order order = orderDao.GetOrder(id);
        List<OrderProduct> ops= order.getOrderProducts();
        for (int i = 0; i < ops.size(); i++) orderDao.DeleteOrderproduct(ops.get(i).getOrderproductId());
        orderDao.DeleteOrder(id);

    }
}
