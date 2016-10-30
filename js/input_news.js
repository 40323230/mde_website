var news_list = [
    {
        titles_text:"2016 第九屆生物機電盃田間機器人競賽公告",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44549,r198-1.php",
        date_text:"2016-09-05",
        message_text:"詳細內容，請參閱附件。",
    },
    {
        titles_text:"105學年度第1學期網路選課「加退選」時程及選課注意事項公告",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44510,r198-1.php",
        date_text:"2016-08-18",
        message_text:"詳細內容，請參閱附件。",
    },
    {
        titles_text:"元翎精密公司徵才公告",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44394,r198-1.php",
        date_text:"2016-07-04",
        message_text:"詳細內容，請參閱下列網址。",
    },
    {
        titles_text:"第二屆全球傳動智能自動化競賽，即日起開始報名~",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44109,r198-1.php",
        date_text:"2016-06-23",
        message_text:"因應我國生產力4.0產業與技術之發展策略，臺北科技大學與全球傳動協力舉辦競賽，希望結合學術理論與產業實務，鼓勵在校師生激發巧思與創造力，充分應用相關產品，並整合其他機電、自動化技術轉化成創新智能產品，藉此發掘相關產業人才，有效促進產學合作，...",
    },
    {
        titles_text:"2016走馬飛車無動力造型車大賽",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44038,r198-1.php",
        date_text:"2016-06-23",
        message_text:"2016「走馬飛車」的無動力造型車大賽總獎金為50萬元整，另有前35隊報名5000元的補助金及外籍隊伍前五隊8000元的補助金，走馬飛車粉絲專業：走...",
    },
    {
        titles_text:"2016神腦原鄉踏查紀錄片競賽-我的家鄉很有視",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44037,r198-1.php",
        date_text:"2016-06-22",
        message_text:"神腦原鄉踏查紀錄片競賽，向你徵求你的家鄉故事 不管是人物、事件、歷史、文化，只要你拿起攝影機，拍下你獨一無二的觀即日起至9月30日 神腦基金會邀請你一起來參加這場紀錄盛會最高獎金10萬元，總獎金60萬 ...",
    },
    {
        titles_text:"國家中山科學研究院105年延攬大學院校優秀學生獎助金",
        titles_link:"http://design.nfu.edu.tw/files/14-1036-44015,r198-1.php",
        date_text:"2016-06-15",
        message_text:"詳細內容，請參閱附件。",
    },
]

for(var i=0; i<news_list.length; i++){
    var value = news_list[i];
    if(i%2==1){document.write("<div class=\"row\">")};
    document.write("<div class=\"col-sm-6\">");
    document.write("<div class=\"panel panel-default\">");
    document.write("<div class=\"panel-heading\">");
    document.write("<h2 class=\"panel-title\">"+value.titles_text+"</h2>");
    document.write("</div>");
    document.write("<div class=\"panel-body lead\">");
    document.write("日期："+value.date_text+"<br>"+value.message_text+"<br><a href=\""+value.titles_link+"\">瞭解更多→</a>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    if(i%2==1){document.write("</div>")};
};