var request = require("request");
var cheerio = require("cheerio");

var news = function() {
  request({
    url: "http://design.nfu.edu.tw/bin/home.php",
    method: "GET"
  }, function(error, response, body) {
    if (error || !body) {
      return;
    }
    var $ = cheerio.load(body);
    var titles = $(".ptname");
    var message = $(".message");
    //console.log(titles.length, message.length);
    for(var i=0; i<7; i++){
      //titles_text
      var titles_text = titles[String(i)]['children'][0]['children'][0]['data'];
      //titles_link
      var titles_link = titles[String(i)]['children'][0]['attribs']['href'];
      //date_text
      var date_text = message[String(i+1)]['children'][0]['next']['children'][0]['data'];
      //message_text
      var message_text = '';
      for(var j=0; j<message[String(i)]['children'].length; j++){
        var a = message[String(i)]['children'][j];
        if (a['type']=='text'){
            message_text += a['data'];
        }
        if (a['type']=='tag' && a['name']=='p'){
            message_text += a['children'][0]['data'];
        }
      }
      console.log(titles_text +'\n'+ titles_link +'\n'+ date_text + message_text);
      console.log("----------");
      /*
      if(i%2==1){
        document.write("<div class=\"row\">");
      };
      document.write("<div class=\"col-sm-6\">");
      document.write("<div class=\"panel panel-default\">");
      document.write("<div class=\"panel-heading\">");
      document.write("<h2 class=\"panel-title\">"+titles_text+"</h2>");
      document.write("</div>");
      document.write("<div class=\"panel-body lead\">");
      document.write(date_text+"<br>"+message_text+"<br><a href=\""+titles_link+"\">");
      document.write("</div>");
      document.write("</div>");
      document.write("</div>");
      if(i%2==1){
        document.write("</div>");
      };
      */
    }
    //var b = 0;
    //console.log(titles[String(b)]['children']);
    //console.log(message[String(b)]['children'][3]['children'][0]['data']);
  });
};

news();