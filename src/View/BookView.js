import React from "react";
import {Button, Layout} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/bookview.css"
import {SideBar} from "../Components/SideBar";
import {DetailList} from "../Components/DetailList";
import {BookCover} from "../Components/BookCover";
import {Introduction} from "../Components/Introduction";
import {useLocation} from "react-router-dom";

const {Header,Content} = Layout;

const data1 = [
    {
        id: 1,
        type: "编程",
        inventory: 1000,
        author: "凯S.霍斯特曼",
        image: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        name: 'Java核心技术卷II',
        price: '95.20',
        description: "本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",
    }
    ,
    {
        id: 2,
        type: "编程",
        inventory: 1200,
        author: "兰德尔·E·布莱恩特",
        image: "http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg",
        name: '深入理解计算机系统',
        price: '136.90',
        description: "程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！",
    },
    {
        id: 3,
        type: "编程",
        inventory: 1000,
        author: "梅耶",
        image: "http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
        name: "Effective C++",
        price: "51.30",
        description: "大师名著纵横二十载，稳居任一荐书单三甲；称职程序员傍身绝学，通向C++精微奥妙之门。",
    }
    ,
    {
        id: 4,
        type: "儿童文学",
        inventory: 1000,
        author: "圣-埃克苏佩里",
        image: "http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
        name: "小王子",
        price: "8.89",
        description: "豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生。"
    }
    ,
    {
        id: 5,
        type: "编程",
        inventory: 9096,
        author: "Bruce Eckel",
        image: "http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg",
        name: "Java编程思想",
        price: "91.20",
        description: "Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。"
    }
    ,
    {
        id: 6,
        type: "魔幻小说",
        inventory: 123,
        author: "克里斯˙梅森",
        image: "http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg",
        name: "魔兽世界编年史套装(全三卷)",
        price: "449.20",
        description: "暴雪官方历时二十年编纂而成的史料！三卷《魔兽世界编年史》将呈现大量从未公布的精美原画和插图，读者在阅读故事之余，更能享受一次视觉上的饕餮盛宴，是魔兽粉丝收藏的优选。"
    }
    ,
    {
        id: 7,
        type: "科幻小说",
        inventory: 14414,
        author: "刘慈欣",
        image: "http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg",
        name: "三体：全三册",
        price: "50.20",
        description: "刘慈欣代表作，亚洲首部“雨果奖”获奖作品！"
    }
    ,
    {
        id: 8,
        type: "世界名著",
        inventory: 388,
        author: "雨果",
        image: "http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg",
        name: "悲惨世界（上中下）（精装版）",
        price: "104.00",
        description: "《悲惨世界》是雨果在流亡期间写的长篇小说，是他的代表作，也是世界文学宝库的珍品之一。\n" +
            "    《悲惨世界》通过冉阿让等人的悲惨遭遇以及冉阿让被卞福汝主教感化后一系列令人感动的事迹，深刻揭露和批判了19世纪法国封建专制社会的腐朽本质及其罪恶现象，对穷苦人民在封建重压下所遭受的剥削欺诈和残酷迫害表示了悲悯和同情。"
    }
    ,
    {
        id: 9,
        type: "社会小说",
        inventory: 123,
        author: "乔治·奥威尔",
        image: "http://img3m1.ddimg.cn/82/3/25229341-1_w_2.jpg",
        name: "动物农场",
        price: "20.40",
        description: "也译“动物庄园”，是“一代人的冷峻良知”乔治·奥威尔经典的讽喻之作。虽然这一场荒诞的动物革命走向歧途，但正是因为这样我们才了解“把权力关进制度的笼子”的重要性。"
    }
    ]
export const BookView = () => {


       const query = useLocation();
       let bookInfo = data1[0];
        for (var i = 0; i < data1.length; i++)
        {
            if (data1[i].id == query.search.substr(4))
            {
                bookInfo = data1[i];
            }
        }

        return <div>
                    <Layout>
                        <Header>
                            <HeaderInfo />
                        </Header>
                        <Layout>
                            <SideBar />
                            <Content>
                                <div className={"detailcontent cover_details"}>
                                    <div className={"cover"}>
                                        <BookCover info = {bookInfo}/>
                                    </div>
                                    <div className={"details"}>
                                        <DetailList info = {bookInfo}/>
                                    </div>
                                </div>
                                <div className={"detailcontent introduction"}>
                                    <Introduction info = {bookInfo}/>
                                </div>
                                <div className={"detailcontent buttons"}>
                                    <Button> Back </Button>
                                    <Button> Add to cart </Button>
                                    <Button> Purchase now </Button>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
}
