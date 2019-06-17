//实例化localsearch
var localipt = new BMap.LocalSearch(map, {
    renderOptions:{map, panel: "results",  autoViewport:false}, onSearchComplete:function(results){
        if(localipt.getStatus() == BMAP_STATUS_SUCCESS){
            if (ipt.id == "searchpoi") {
                var result = document.getElementsByClassName("searchresult");
                result[0].style.display = "block";
                if (document.getElementsByClassName("searchresult")[0].innerHTML != " ") {
                    document.getElementsByClassName("searchresult")[0].innerHTML = " ";
                }
                for (var i = 0; i < results.getCurrentNumPois(); i++) {
                    var name = results.getPoi(i).title;
                    var presult = document.createElement("p");
                    presult.innerText = name;
                    presult.style.margin = "5px";
                    presult.style.color = "black";
                    presult.style.fontSize = "16px";
                    presult.style.textAlign = "left";
                    result[0].appendChild(presult);
                    presult.onclick = function(){
                            var searchipt = document.getElementById("searchpoi");
                            searchipt.value = this.innerText;
                            result[0].style.display = "none";
                    }
                }
            }
            if (ipt.id == "startpoi") {
                var navi = document.getElementById("navi");
                var pageclick = navi.getElementsByTagName("a");
                var list = navi.getElementsByTagName("li");
                if (window.location.href.indexOf("index") != -1) {
                    var result = document.getElementsByClassName("searchresult");
                    result[1].style.display = "block";
                    if (document.getElementsByClassName("searchresult")[1].innerHTML != " ") {
                        document.getElementsByClassName("searchresult")[1].innerHTML = " ";
                    }
                    for (var i = 0; i < results.getCurrentNumPois(); i++) {
                        var name = results.getPoi(i).title;
                        var presult = document.createElement("p");
                        presult.innerText = name;
                        presult.style.margin = "5px";
                        presult.style.color = "black";
                        presult.style.fontSize = "16px";
                        presult.style.textAlign = "left";
                        result[1].appendChild(presult);
                        presult.onclick = function(){
                            var searchipt = document.getElementById("startpoi");
                            searchipt.value = this.innerText;
                            result[1].style.display = "none";
                        }
                    }
                }else if (window.location.href.indexOf("walking") != -1
                    || window.location.href.indexOf("allpoint") != -1) {
                    var result = document.getElementsByClassName("searchresult");
                    result[0].style.display = "block";
                    if (document.getElementsByClassName("searchresult")[0].innerHTML != " ") {
                        document.getElementsByClassName("searchresult")[0].innerHTML = " ";
                    }
                    for (var i = 0; i < results.getCurrentNumPois(); i++) {
                        var name = results.getPoi(i).title;
                        var presult = document.createElement("p");
                        presult.innerText = name;
                        presult.style.margin = "5px";
                        presult.style.color = "black";
                        presult.style.fontSize = "16px";
                        presult.style.textAlign = "left";
                        result[0].appendChild(presult);
                        presult.onclick = function(){
                                var searchipt = document.getElementById("startpoi");
                                searchipt.value = this.innerText;
                                result[0].style.display = "none";
                        }
                    }
                }     
            }
            if (ipt.id == "endpoi") {
                var navi = document.getElementById("navi");
                var pageclick = navi.getElementsByTagName("a");
                var list = navi.getElementsByTagName("li");
                if (window.location.href.indexOf("index") != -1) {
                    var result = document.getElementsByClassName("searchresult");
                    result[2].style.display = "block";
                    if (document.getElementsByClassName("searchresult")[2].innerHTML != " ") {
                        document.getElementsByClassName("searchresult")[2].innerHTML = " ";
                    }
                    for (var i = 0; i < results.getCurrentNumPois(); i++) {
                        var name = results.getPoi(i).title;
                        var presult = document.createElement("p");
                        presult.innerText = name;
                        presult.style.margin = "5px";
                        presult.style.color = "black";
                        presult.style.fontSize = "16px";
                        presult.style.textAlign = "left";
                        result[2].appendChild(presult);
                        presult.onclick = function(){
                            var searchipt = document.getElementById("endpoi");
                            searchipt.value = this.innerText;
                            result[2].style.display = "none";
                        }
                    }
                }else if (window.location.href.indexOf("walking") != -1
                    || window.location.href.indexOf("allpoint") != -1) {
                    var result = document.getElementsByClassName("searchresult");
                    result[1].style.display = "block";
                    if (document.getElementsByClassName("searchresult")[1].innerHTML != " ") {
                        document.getElementsByClassName("searchresult")[1].innerHTML = " ";
                    }
                    for (var i = 0; i < results.getCurrentNumPois(); i++) {
                        var name = results.getPoi(i).title;
                        var presult = document.createElement("p");
                        presult.innerText = name;
                        presult.style.margin = "5px";
                        presult.style.color = "black";
                        presult.style.fontSize = "16px";
                        presult.style.textAlign = "left";
                        result[1].appendChild(presult);
                        presult.onclick = function(){
                            var searchipt = document.getElementById("endpoi");
                            searchipt.value = this.innerText;
                            result[1].style.display = "none";
                        }
                    }
                }   
            }
        }
    }, onMarkersSet:function(pois){
            for (var i = 0; i < pois.length; i++) {
            	map.removeOverlay(pois[i].marker);
            }
        }, pageCapacity:100
});

function inputHint(){
    if (document.getElementById("searchpoi")) { 
        if (/msie/i.test(navigator.userAgent)) {//ie浏览器 
            document.getElementById('searchpoi').onpropertychange = function(){
                ipt = document.getElementById("searchpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            };
        } else {//非ie浏览器，比如Firefox 
            document.getElementById('searchpoi').addEventListener("input", function(){
                ipt = document.getElementById("searchpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            }, false);
        }
    }
	if (document.getElementById("startpoi")) { 
        if (/msie/i.test(navigator.userAgent)) {//ie浏览器 
            document.getElementById('startpoi').onpropertychange = function(){
                ipt = document.getElementById("startpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            };
        } else {//非ie浏览器，比如Firefox 
            document.getElementById('startpoi').addEventListener("input", function(){
                ipt = document.getElementById("startpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            }, false);
        }
    }
    if (document.getElementById("endpoi")) { 
        if (/msie/i.test(navigator.userAgent)) {//ie浏览器 
            document.getElementById('endpoi').onpropertychange = function(){
                ipt = document.getElementById("endpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            };
        } else {//非ie浏览器，比如Firefox 
            document.getElementById('endpoi').addEventListener("input", function(){
                ipt = document.getElementById("endpoi");
                var iptv = ipt.value;
                localipt.search(iptv, {customData: {geotableId: 199734 }});
            }, false);
        }
    }
}
addLoadEvent(inputHint);