var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en";
var quote;
var author;
var colors = ["#A0A0A0","#909090","#808080","#707070","#686868","#585858","#484848","#383838","#282828","#181818","#080808"]
//loads document as soon as page loads
$(document).ready(function(){
  getQuote();
  $("#getMessage").on("click", function(){getQuote();});
})

function getQuote(){
  //retrieve quote from url
  $.getJSON(url, function(data){
    // Set to given variable
    quote = data.quoteText;
    if (data.quoteAuthor == ""){
      author = "Unknown Author";
    }else{
      author = data.quoteAuthor;
    }
  $("#quote1").html('"' + quote + '"');
  $("#author").html('- ' + author);
  })
  var color = Math.floor(Math.random() * colors.length );
  $("html body").animate({
    backgroundColor: colors[color],
    color:colors[color]
  },1000);
  $(".button").animate({
    backgroundColor:colors[color]
  },1000);
}
var twit = quote ;

function tweetTwit() {
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "-- " + author));
}
