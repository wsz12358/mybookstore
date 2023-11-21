package com.my_bookstore.ServiceImpl;

import com.my_bookstore.Entity.TimeStamp;
import com.my_bookstore.Service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;

import java.util.Date;

@Service
@Scope("session")
public class TimeServiceImpl implements TimeService {

    @Autowired
    TimeStamp timeStamp;

    @Override
    public void BeginTimer() {
        Date date = new Date();
        timeStamp.setBegintime(date);
    }

    @Override
    public void StopTimer() {
        System.out.println(timeStamp);
        Date date = new Date();
        System.out.println((date.getTime() - timeStamp.getBegintime().getTime()) / 1000);
    }
}
