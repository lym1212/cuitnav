function clickhighlight(){
    var navi = document.getElementById("navi");
    var pageclick = navi.getElementsByTagName("a");
    var list = navi.getElementsByTagName("li");
    for (var i = 0; i < pageclick.length; i++) {
        link = pageclick[i].getAttribute("href");
        if (window.location.href.indexOf(link) != -1) {
            list[i].style.backgroundColor = "#77AAD8";
            var sp = list[i].getElementsByTagName("span");
            sp[0].style.color = "white";
        }
    }
}
addLoadEvent(clickhighlight);