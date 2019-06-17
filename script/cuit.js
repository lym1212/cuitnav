var map = new BMap.Map('container', 
                {enableMapClick: false});     //创建地图对象  禁用底图可点
map.enableScrollWheelZoom();       //鼠标滑动缩放
var ctrpoint = new BMap.Point(103.994573,30.587268);
map.centerAndZoom(ctrpoint, 16);
map.setMaxZoom(19);
map.setMinZoom(16);

//叠加地图
var tileLayer = new BMap.TileLayer({transparentPng: true});
tileLayer.getTilesUrl = function(tileCoord, zoom) {
        var x = tileCoord.x;
        var y = tileCoord.y;
        return 'geoserver/tiles/' + zoom + '/tile-' + x + '_' + y + '.png';		
}
function add_tlcontrol(){
    map.addTileLayer(tileLayer);
}

// 添加放大缩小控件
var bsctrl = new BMap.NavigationControl(
    {anchor: BMAP_ANCHOR_BOTTOM_RIGHT, 
        type: BMAP_NAVIGATION_CONTROL_ZOOM});
function add_sfcontrol(){
    map.addControl(bsctrl);
}

//添加定位控件
var geoControl = new BMap.GeolocationControl();    //实例化定位控件
geoControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
});
function add_dwcontrol(){
    map.addControl(geoControl);
}

addLoadEvent(add_tlcontrol);
addLoadEvent(add_sfcontrol);
addLoadEvent(add_dwcontrol);





// function showInfo(e){
//     alert(e.point.lng + ", " + e.point.lat);
// }
// map.addEventListener("click", showInfo);
