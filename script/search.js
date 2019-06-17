//实例化localsearch
var local = new BMap.LocalSearch(map, {
    renderOptions:{map, panel: "results"}, onSearchComplete:function(results){
        if(local.getStatus() == BMAP_STATUS_SUCCESS){
            
        }else{
            if (tmpt == 1) {
                tmpt++;
                var tmp = local.getResults().keyword;
                tmp = tmp.substring(0,tmp.length-tmpt);
                console.log(tmp);
                local.search(tmp,{
                    customData: {
                        geotableId: 199734
                    }
                });
            }else{
                tmp = tmp.substring(0,tmp.length-tmpt);
                console.log(tmp);
                local.search(tmp,{
                    customData: {
                        geotableId: 199734
                    }
                });
            }
        }
    }, onMarkersSet:function(pois){
        if (pois) {
            for (var i = 0; i < pois.length; i++) {
                map.removeOverlay(pois[i].marker);
            }
            map.clearOverlays();
            var pt = pois[0].point;
            var myicon = new BMap.Icon("image/marker.png", new BMap.Size(20, 20));
            var marker = new BMap.Marker(pt, {icon: myicon, 
                        offset: new BMap.Size(0, -8)});
            marker.setZIndex(9);
            map.addOverlay(marker);

            if (pois[0].address.indexOf("true") == -1 ) {
                content = '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                if (pois[0].address.split("#")[1] == 3){
                    if(pois[0].address.split("#")[2]) {
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<p>'+ '地址：'+ pois[0].address.split("#")[2] +'</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }else{
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }
                }else if (pois[0].address.split("#")[1] == 4) {
                    if(pois[0].address.split("#")[2]) {
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<p>'+ '地址：'+ pois[0].address.split("#")[2] +'</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }else{
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }
                }else if (pois[0].address.split("#")[1] == 5) {
                    if(pois[0].address.split("#")[2]) {
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<p>'+ '地址：'+ pois[0].address.split("#")[2] +'</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }else{
                        content = '<p>'+ '推荐度：' 
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                        + '<input id="qidian" type="button" value="从这里出发">' 
                        + '<input id="zhongdian" type="button" value="到这里去">';
                    }
                }    
            }else{
                if (pois[0].address.split("#")[2] == 3) {
                    content = '<p>'+ '推荐度：' 
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                    + '<input id="qidian" type="button" value="从这里出发">' 
                    + '<input id="zhongdian" type="button" value="到这里去">';
                }else if (pois[0].address.split("#")[2] == 4) {
                    content = '<p>'+ '推荐度：' 
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                    + '<input id="qidian" type="button" value="从这里出发">' 
                    + '<input id="zhongdian" type="button" value="到这里去">';
                }else if (pois[0].address.split("#")[2] == 5) {
                    content = '<p>'+ '推荐度：' 
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                    + '<input id="qidian" type="button" value="从这里出发">' 
                    + '<input id="zhongdian" type="button" value="到这里去">';
                }else{
                    content = '<input id="qidian" type="button" value="从这里出发">' 
                    + '<input id="zhongdian" type="button" value="到这里去">';
                }
            }  
            var name = pois[0].title;
            var infoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title  : name,      //标题
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                enableSendToPhone: false,
                searchTypes   :[
                ]
            });
            infoWindow.open(pt);

            map.addEventListener("zoomstart", function(){  
                map.clearOverlays();
                map.addOverlay(marker);
                infoWindow.open(pt);
            });
            if (!document.getElementById("qidian")) { return false; }
            if (!document.getElementById("zhongdian")) { return false; }
            var qidian = document.getElementById("qidian");
            var zhongdian = document.getElementById("zhongdian");
            if (window.location.href.indexOf("index") != -1) {
                qidian.onclick = function(){
                    var search = document.getElementById("search");
                    var wk = document.getElementById("walking2");
                    search.style.display = "none";
                    wk.style.display = "block";
                    infoWindow.close();
                    var p = document.getElementById("startpoi");
                    p.value=name;
                    map.removeOverlay(marker);
                }
                zhongdian.onclick = function(){
                    var search = document.getElementById("search");
                    var wk = document.getElementById("walking2");
                    search.style.display = "none";
                    wk.style.display = "block";
                    infoWindow.close();
                    var p = document.getElementById("endpoi");
                    p.value=name;
                    map.removeOverlay(marker);
                }
            }else if (window.location.href.indexOf("allpoint") != -1) {
                qidian.onclick = function(){
                    var wk = document.getElementById("walking2");
                    wk.style.display = "block";
                    infoWindow.close();
                    var p = document.getElementById("startpoi");
                    p.value=name;
                    map.removeOverlay(marker);
                }
                zhongdian.onclick = function(){
                    var wk = document.getElementById("walking2");
                    wk.style.display = "block";
                    infoWindow.close();
                    var p = document.getElementById("endpoi");
                    p.value=name;
                    map.removeOverlay(marker);
                }
            }
            
        }
            
        },pageCapacity:100
});

function searchPoi(){
    if (!document.getElementById("placeholder")) { return false; }
    if (!document.getElementById("searchpoi")) { return false; }
    if (!document.getElementsByClassName("searchresult")) { return false; }

    var spoi = document.getElementById("searchpoi");
    var ss = document.getElementById("placeholder");
    var srchresult = document.getElementsByClassName("searchresult");
    ss.onclick = function(){
        tmpt = 1;
        local.search(spoi.value,{
            customData: {
                geotableId: 199734
            }
        });
        srchresult[0].style.display = "none";
    };
}

addLoadEvent(searchPoi);