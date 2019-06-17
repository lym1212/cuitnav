//实例化localsearch
var localmkr = new BMap.LocalSearch(map, {
    renderOptions:{map, panel: "results",  autoViewport:false}, 
        onSearchComplete:function(results){
        if(localmkr.getStatus() == BMAP_STATUS_SUCCESS){
            
        }
    }, onMarkersSet:function(pois){
            for (var i = 0; i < pois.length; i++) {
            	map.removeOverlay(pois[i].marker);
            }
            // 添加所有标注
            for (var i = 0; i < pois.length; i++) { 
                // 宿舍
                if (pois[i].address == 1) {
                    myIcon = new BMap.Icon("image/sushe.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 吃的
                if (pois[i].address.split("#")[0] == 21) {
                    myIcon = new BMap.Icon("image/chide.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 喝的
                if (pois[i].address.split("#")[0] == 22) {
                    myIcon = new BMap.Icon("image/hede.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 生活服务
                if (pois[i].address.split("#")[0] == 3) {
                    myIcon = new BMap.Icon("image/fuwu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 31) {   // ATM
                    myIcon = new BMap.Icon("image/atm.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 32) {   // 超市
                    myIcon = new BMap.Icon("image/chaoshi.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 33) {    // 快递点
                    myIcon = new BMap.Icon("image/kuaidi.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 34) {     // 打印店
                    myIcon = new BMap.Icon("image/dayin.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 35) {     // 校医院
                    myIcon = new BMap.Icon("image/xiaoyiyuan.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address.split("#")[0] == 36) {    // 华联
                    myIcon = new BMap.Icon("image/gouwu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 教学楼
                if (pois[i].address == 4) {
                    myIcon = new BMap.Icon("image/jiaoxuelou.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 41) {   // 图书馆
                    myIcon = new BMap.Icon("image/tushuguan.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 体育场馆
                if (pois[i].address == 5) {   // 田径场
                    myIcon = new BMap.Icon("image/paobu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 51) {   // 羽毛球场
                    myIcon = new BMap.Icon("image/yumaoqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 52) {   // 乒乓球场
                    myIcon = new BMap.Icon("image/pingpangqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 53) {   // 网球场
                    myIcon = new BMap.Icon("image/wangqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 54) {    // 排球场
                    myIcon = new BMap.Icon("image/paiqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 55) {   // 足球场
                    myIcon = new BMap.Icon("image/zuqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                if (pois[i].address == 56) {     // 篮球场
                    myIcon = new BMap.Icon("image/lanqiu.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 景点
                if (pois[i].address == 6) {
                    myIcon = new BMap.Icon("image/jingdian.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 休闲娱乐
                if (pois[i].address.split("#")[0] == 7) {
                    myIcon = new BMap.Icon("image/wangba.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 出入口
                if (pois[i].address == 8) {
                    myIcon = new BMap.Icon("image/churukou.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
                // 公交站
                if (pois[i].address == 9) {
                    myIcon = new BMap.Icon("image/bus.png",new BMap.Size(16,16));
                    var pt = pois[i].point;
                    addmarker(pt);
                }
            }
            if (map.getZoom() == 16) {
                var poimkr = map.getOverlays();
                for (var j = 0; j < poimkr.length; j++) {
                    for (var k = j; k < poimkr.length; k++) {
                        if (j != k) {
                            var dist = map.getDistance(poimkr[j].point,poimkr[k].point);
                            if (dist < 200 && poimkr[j].isVisible() == true) {
                                poimkr[k].hide();
                            }
                        }
                    }
                }
            }
            if (map.getZoom() == 17) {
                var poimkr = map.getOverlays();
                for (var j = 0; j < poimkr.length; j++) {
                    for (var k = j; k < poimkr.length; k++) {
                        if (j != k) {
                            var dist = map.getDistance(poimkr[j].point,poimkr[k].point);
                            if (dist < 100 && poimkr[j].isVisible() == true) {
                                poimkr[k].hide();
                            }
                        }   
                    }
                }
            }
            if (map.getZoom() == 18) {
                var poimkr = map.getOverlays();
                for (var j = 0; j < poimkr.length; j++) {
                    for (var k = j; k < poimkr.length; k++) {
                        if (j != k) {
                            var dist = map.getDistance(poimkr[j].point,poimkr[k].point);
                            if (dist < 50 && poimkr[j].isVisible() == true) {
                                poimkr[k].hide();
                            }
                        }  
                    }
                }
            }
        }, pageCapacity:100
});

function addmarker(point){
	var mkr = new BMap.Marker(point, {icon: myIcon});
    mkr.disableMassClear();
    map.addOverlay(mkr);
    var localinfo = new BMap.LocalSearch(map, {
        renderOptions:{map, panel: "results", autoViewport:false}, 
            onSearchComplete:function(results){
                if(localinfo.getStatus() == BMAP_STATUS_SUCCESS){
                    for (var i = 0; i < results.getCurrentNumPois(); i++) {
                        if (results.getPoi(i).point.lng == pointmkr.lng && results.getPoi(i).point.lat == pointmkr.lat) {
                            var name = results.getPoi(i).title;
                            if (results.getPoi(i).address.indexOf("true") == -1 ) {
                                contents = '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                if (results.getPoi(i).address.split("#")[1] == 3){
                                    if(results.getPoi(i).address.split("#")[2]) {
                                        contents = '<p>'+ '推荐度：' 
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                        + '<p>'+ '地址：'+ results.getPoi(i).address.split("#")[2] +'</p>'
                                        + '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                    }else{
                                        contents = '<p>'+ '推荐度：' 
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                        + '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                    }
                                }else if (results.getPoi(i).address.split("#")[1] == 4) {
                                    if(results.getPoi(i).address.split("#")[2]) {
                                        contents = '<p>'+ '推荐度：' 
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                        + '<p>'+ '地址：'+ results.getPoi(i).address.split("#")[2] +'</p>'
                                        + '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                    }else{
                                        contents = '<p>'+ '推荐度：' 
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                        + '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                    }
                                }else if (results.getPoi(i).address.split("#")[1] == 5) {
                                    if(results.getPoi(i).address.split("#")[2]) {
                                        contents = '<p>'+ '推荐度：' 
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                        + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                        + '<p>'+ '地址：'+ results.getPoi(i).address.split("#")[2] +'</p>'
                                        + '<input id="qidian" type="button" value="从这里出发">' 
                                        + '<input id="zhongdian" type="button" value="到这里去">';
                                    }else{
                                        contents = '<p>'+ '推荐度：' 
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
                                if (results.getPoi(i).address.split("#")[2] == 3) {
                                    contents = '<p>'+ '推荐度：' 
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                    + '<input id="qidian" type="button" value="从这里出发">' 
                                    + '<input id="zhongdian" type="button" value="到这里去">';
                                }else if (results.getPoi(i).address.split("#")[2] == 4) {
                                    contents = '<p>'+ '推荐度：' 
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                    + '<input id="qidian" type="button" value="从这里出发">' 
                                    + '<input id="zhongdian" type="button" value="到这里去">';
                                }else if (results.getPoi(i).address.split("#")[2] == 5) {
                                    contents = '<p>'+ '推荐度：' 
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>'
                                    + '<span style="color:yellow"><i class="fas fa-star"></i></span>' + '</p>'
                                    + '<input id="qidian" type="button" value="从这里出发">' 
                                    + '<input id="zhongdian" type="button" value="到这里去">';
                                }else{
                                    contents = '<input id="qidian" type="button" value="从这里出发">' 
                                    + '<input id="zhongdian" type="button" value="到这里去">';
                                }
                            }                         
                            var searchInfoWindow = new BMapLib.SearchInfoWindow(map, contents, {
                                title  : name,      //标题
                                panel  : "panel",         //检索结果面板
                                enableAutoPan : true,     //自动平移
                                enableSendToPhone: false,
                                searchTypes   :[
                                ]
                            });
                            searchInfoWindow.open(results.getPoi(i).point);
                            var qidian = document.getElementById("qidian");
                            var zhongdian = document.getElementById("zhongdian");
                            if (window.location.href.indexOf("index") != -1) {
                                qidian.onclick = function(){
                                    var search = document.getElementById("search");
                                    var wk = document.getElementById("walking2");
                                    search.style.display = "none";
                                    wk.style.display = "block";
                                    searchInfoWindow.close();
                                    var p = document.getElementById("startpoi");
                                    p.value=name;
                                }
                                zhongdian.onclick = function(){
                                    var search = document.getElementById("search");
                                    var wk = document.getElementById("walking2");
                                    search.style.display = "none";
                                    wk.style.display = "block";
                                    searchInfoWindow.close();
                                    var p = document.getElementById("endpoi");
                                    p.value=name;
                                }
                            }else if (window.location.href.indexOf("walking") != -1) {
                                qidian.onclick = function(){
                                    searchInfoWindow.close();
                                    var p = document.getElementById("startpoi");
                                    p.value=name;
                                }
                                zhongdian.onclick = function(){
                                    searchInfoWindow.close();
                                    var p = document.getElementById("endpoi");
                                    p.value=name;
                                }
                            }else if (window.location.href.indexOf("allpoint") != -1) {
                                qidian.onclick = function(){
                                    var wk = document.getElementById("walking2");
                                    wk.style.display = "block";
                                    searchInfoWindow.close();
                                    var p = document.getElementById("startpoi");
                                    p.value=name;
                                }
                                zhongdian.onclick = function(){
                                    var wk = document.getElementById("walking2");
                                    wk.style.display = "block";
                                    searchInfoWindow.close();
                                    var p = document.getElementById("endpoi");
                                    p.value=name;
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
    mkr.addEventListener("click", function(e){
        pointmkr = mkr.point;
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "宿舍"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "餐饮"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "生活服务"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "教学设施"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "体育场馆"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "休闲娱乐"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "景点"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "公交站"}});
        localinfo.search(" ",  {customData: {geotableId: 199734, 
            tags: "出入口"}});
    });
	
}
function addmkr(){
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "宿舍"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "餐饮"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "生活服务"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "教学设施"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "体育场馆"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "休闲娱乐"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "景点"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "公交站"}});
	localmkr.search(" ",  {customData: {geotableId: 199734, 
		tags: "出入口"}});
}
addLoadEvent(addmkr);
map.addEventListener("zoomstart", addmkr);
