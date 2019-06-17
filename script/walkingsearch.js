// 我的位置
function myPoi(){
    var geolocationwk = new BMap.Geolocation();
    geolocationwk.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var end = document.getElementById("endpoi");
            start = r.point;
            localwk.search(end.value, {customData: {geotableId: 199734 }});
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
}

function myPoitwo(){
    var geolocationwk = new BMap.Geolocation();
    geolocationwk.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var end = r.point;
            walking.search(start,end);
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
}

// 实例化LocalSearch类
var localwk = new BMap.LocalSearch(map, {
    renderOptions:{map, panel: "results", autoViewport:false}, onSearchComplete:function(results){
        if(localwk.getStatus() == BMAP_STATUS_SUCCESS){            
            if (i==0) {
            	i++;
            	start = results.getPoi(0);
                loadXMLDoc();
                xmlDoc=xhttp.responseXML;
                var pname = xmlDoc.getElementsByTagName("name");
                for (var j = 0; j < pname.length; j++) {
                    var pnametxt = pname[j].childNodes[0].nodeValue;
                    if (start.title == pnametxt) {
                        var sp = xmlDoc.getElementsByTagName("start");
                        var ptxt = sp[j].childNodes[0].nodeValue;
                        var sx = ptxt.split(",")[0];
                        var sy = ptxt.split(",")[1];
                        var spoint = new BMap.Point(sx,sy);
                        start = spoint;
                        break;
                    }
                }
                var end = document.getElementById("endpoi");
                if (end.value != "") {
                    localwk.search(end.value, {customData: {geotableId: 199734 }});
                }else{
                    myPoitwo();
                }
            	
            	// return;
            }
            if (i!=0) {
                // loadXMLDoc();
                // xmlDoc=xhttp.responseXML;
                mq = false;
                var pname = xmlDoc.getElementsByTagName("name");
                for (var j = 0; j < pname.length; j++) {
                    var pnametxt = pname[j].childNodes[0].nodeValue;
                    if (localwk.getResults().getPoi(0).title == pnametxt) {
                        mq = true;
                        var sp = xmlDoc.getElementsByTagName("start");
                        var ptxt = sp[j].childNodes[0].nodeValue;
                        var sx = ptxt.split(",")[0];
                        var sy = ptxt.split(",")[1];
                        var spoint = new BMap.Point(sx,sy);
                        endp = spoint;
                        break; 
                    }
                }
                if (mq == true) {
                    walking.search(start, endp);
                }else{
                    walking.search(start, localwk.getResults().getPoi(0));
                }
            	
                map.addEventListener("zoomstart", function(){ 
                    map.clearOverlays();
                    walking.search(start, localwk.getResults().getPoi(0));
                });
            	return;
            }
        }else{
            if (tmptw == 1) {
                tmptw++;
                tmp = localwk.getResults().keyword;
                tmp = tmp.substring(0,tmp.length-tmptw);
                localwk.search(tmp,{
                    customData: {
                        geotableId: 199734
                    }
                });
            }else{
                tmp = tmp.substring(0,tmp.length-tmptw);
                localwk.search(tmp,{
                    customData: {
                        geotableId: 199734
                    }
                });
            }
        }
    },onMarkersSet:function(pois){
            for (var i = 0; i < pois.length; i++) {
                map.removeOverlay(pois[i].marker);
            }
        }, pageCapacity:100
});
//实例化walkingroute类
var walking = new BMap.WalkingRoute(map, 
	{renderOptions:{map: map, autoViewport: true}});
// var walkings = new BMap.WalkingRoute(map, 
//     {renderOptions:{map: map, autoViewport: false}});
function walkingSearch(){
	if (!document.getElementById("startpoi")) { return false; }
	if (!document.getElementById("endpoi")) { return false; }
	if (!document.getElementById("btnsearch")) { return false; }
	if (!document.getElementById("switch")) { return false; }

	var start = document.getElementById("startpoi");
	var end = document.getElementById("endpoi");
	var wks = document.getElementById("btnsearch");
	var rev = document.getElementById("switch");
    var srchresult = document.getElementsByClassName("searchresult");

	wks.onclick = function(){
        for (var k = 0; k < srchresult.length; k++) {
            srchresult[k].style.display = "none";
        }
        if(start.value != ""){
            var m = document.getElementById("container");
            m.style.display = "block";
            i=0;
            tmptw=1;
            localwk.search(start.value, {customData: {geotableId: 199734 }});
        } else {
            var m = document.getElementById("container");
            m.style.display = "block";
            i=1;
            myPoi();
        }
	}
    rev.onclick = function(){
        if (start.value != "") {
            var startv = start.value;
            var endv = end.value;
            start.setAttribute("value", endv);
            end.setAttribute("value", startv);
            start.value = endv;
            end.value = startv;
        }else{
            var startv = start.value;
            var endv = end.value;
            start.setAttribute("value", endv);
            end.value = "";
            end.setAttribute("placeholder","我的位置");
        }
        
    }
}
addLoadEvent(walkingSearch);

