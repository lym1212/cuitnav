//实例化localsearch
var localp = new BMap.LocalSearch(map, {
    renderOptions:{map, panel: "results"}, onSearchComplete:function(results){
        if(localp.getStatus() == BMAP_STATUS_SUCCESS){
        	if (titlen == "education") {    // 教学设施
        		document.getElementById("education").classList.add("poiselected");
	        	var div = document.getElementById("edcu");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("education").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "edcu") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
				        		var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.onclick = function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var i = 0; i < poi.length; i++) {
								if (poi[i].id != "education") {
									poi[i].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "dormitory") {    // 宿舍
        		document.getElementById("dormitory").classList.add("poiselected");
	        	var div = document.getElementById("ss");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("dormitory").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "ss") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
				        		var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.onclick = function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "dormitory") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "stadium") {     // 体育场馆
        		document.getElementById("stadium").classList.add("poiselected");
	        	var div = document.getElementById("tyc");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("stadium").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "tyc") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
        						var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.onclick = function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "stadium") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "scenicspot") {     // 景点
        		document.getElementById("scenicspot").classList.add("poiselected");
	        	var div = document.getElementById("jd");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("scenicspot").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "jd") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
        						var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.onclick = function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "scenicspot") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "canyinxn") {     // 餐饮 校内
        		document.getElementById("canyinxn").classList.add("poiselected");
	        	var div = document.getElementById("cy");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("canyinxn").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "cy") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") != -1) {    // 是否在校内
	        						var pt = document.createElement("p");
	        						if (results.getPoi(j).address.split("#")[2] == 3) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[2] == 4) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[2] == 5) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else{
					        			pt.innerHTML = results.getPoi(j).title;
					        		}
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			tmpt = 1;
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			var intxt = this.innerText;
					        			if (intxt.indexOf("推荐度") == -1) {
					        				local.search(intxt, {customData: {geotableId: 199734}});
					        			}else{
					        				local.search(intxt.split("(")[0], {customData: {geotableId: 199734}});
					        			}
					        		}
	        					}	
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "canyinxn") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "canyinxw") {     // 餐饮 校外
        		document.getElementById("canyinxw").classList.add("poiselected");
	        	var div = document.getElementById("cyxw");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("canyinxw").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "cyxw") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") == -1) {    // 是否在校内
	        						var pt = document.createElement("p");
					        		if (results.getPoi(j).address.split("#")[1] == 3) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 4) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 5) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else{
					        			pt.innerHTML = results.getPoi(j).title;
					        		}
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			tmpt = 1;
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			var intxt = this.innerText;
					        			if (intxt.indexOf("推荐度") == -1) {
					        				local.search(intxt, {customData: {geotableId: 199734}});
					        			}else{
					        				local.search(intxt.split("(")[0], {customData: {geotableId: 199734}});
					        			}
					        		}
	        					}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "canyinxw") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "service") {     // 生活服务 校内
        		document.getElementById("service").classList.add("poiselected");
	        	var div = document.getElementById("serv");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("service").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "serv") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") != -1) {  
					        		var pt = document.createElement("p");
					        		if (results.getPoi(j).address.split("#")[2] == 3) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[2] == 4) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[2] == 5) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else{
					        			pt.innerHTML = results.getPoi(j).title;
					        		}
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			tmpt = 1;
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			var intxt = this.innerText;
					        			if (intxt.indexOf("推荐度") == -1) {
					        				local.search(intxt, {customData: {geotableId: 199734}});
					        			}else{
					        				local.search(intxt.split("(")[0], {customData: {geotableId: 199734}});
					        			}
					        		}
					        	}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "service") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "servicexw") {     // 生活服务 校外
        		document.getElementById("servicexw").classList.add("poiselected");
	        	var div = document.getElementById("servxw");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("servicexw").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "servxw") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") == -1) {  
					        		var pt = document.createElement("p");
					        		if (results.getPoi(j).address.split("#")[1] == 3) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 4) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 5) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else{
					        			pt.innerHTML = results.getPoi(j).title;
					        		}
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			tmpt = 1;
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			var intxt = this.innerText;
					        			if (intxt.indexOf("推荐度") == -1) {
					        				local.search(intxt, {customData: {geotableId: 199734}});
					        			}else{
					        				local.search(intxt.split("(")[0], {customData: {geotableId: 199734}});
					        			}
					        		}
					        	}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "servicexw") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "yule") {     // 休闲娱乐 校内
        		document.getElementById("yule").classList.add("poiselected");
	        	var div = document.getElementById("yl");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("yule").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "yl") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") != -1) {  
					        		var pt = document.createElement("p");
					        		pt.innerText = results.getPoi(j).title;
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			local.search(this.innerText,  {customData: {geotableId: 199734}});
					        		}
					        	}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "yule") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "yulexw") {     // 休闲娱乐 校外
        		document.getElementById("yulexw").classList.add("poiselected");
	        	var div = document.getElementById("ylxw");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("yulexw").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "ylxw") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
	        					if (results.getPoi(j).address.indexOf("true") == -1) {  
					        		var pt = document.createElement("p");
					        		if (results.getPoi(j).address.split("#")[1] == 3) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 4) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else if (results.getPoi(j).address.split("#")[1] == 5) {
					        			pt.innerHTML = results.getPoi(j).title + '(推荐度：'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+'<span style="color:yellow"><i class="fas fa-star"></i></span>'
					        				+ '<span style="color:yellow"><i class="fas fa-star"></i></span>' +')';
					        		}else{
					        			pt.innerHTML = results.getPoi(j).title;
					        		}
					        		pt.style.margin = "5px";
					        		pt.style.textAlign = "center";
					        		pt.style.borderBottom = "1px solid #B2B0B0";
					        		div.appendChild(pt);
					        		pt.onclick = function(){
					        			tmpt = 1;
					        			document.getElementById("point").style.display = "none";
					        			document.getElementById("container").style.display = "block";
					        			var intxt = this.innerText;
					        			if (intxt.indexOf("推荐度") == -1) {
					        				local.search(intxt, {customData: {geotableId: 199734}});
					        			}else{
					        				local.search(intxt.split("(")[0], {customData: {geotableId: 199734}});
					        			}
					        		}
					        	}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "yulexw") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "churukou") {    // 出入口
        		document.getElementById("churukou").classList.add("poiselected");
	        	var div = document.getElementById("crk");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("churukou").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "crk") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
				        		var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.onclick = function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		}
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "churukou") {
									poi[j].classList.remove("poiselected");
								}
							}
	        			}
	        		}
	        	}
        	}
        	if (titlen == "busstop") {    // 公交站
        		document.getElementById("busstop").classList.add("poiselected");
	        	var div = document.getElementById("bus");
	        	if (div.innerHTML != " ") {
	        		div.innerHTML = " ";
	        	}
	        	if (div.style.display == "block") {
	        		div.style.display = "none";
	        		document.getElementById("busstop").classList.remove("poiselected");
	        	} else {
	        		var pois = document.getElementsByClassName("pt");
	        		for (var i = 0; i < pois.length; i++) {
	        			if (pois[i].id == "bus") {
	        				pois[i].style.display = "block";
	        				for (var j = 0; j < results.getCurrentNumPois(); j++) {
				        		var pt = document.createElement("p");
				        		pt.innerText = results.getPoi(j).title;
				        		pt.style.margin = "5px";
				        		pt.style.textAlign = "center";
				        		pt.style.borderBottom = "1px solid #B2B0B0";
				        		div.appendChild(pt);
				        		pt.addEventListener("click", function(){
				        			document.getElementById("point").style.display = "none";
				        			document.getElementById("container").style.display = "block";
				        			local.search(this.innerText, {customData: {geotableId: 199734}});
				        		});
				        		// pt.onclick = function(){
				        		// 	document.getElementById("point").style.display = "none";
				        		// 	document.getElementById("container").style.display = "block";
				        		// 	local.search(this.innerText,  {customData: {geotableId: 199734}});
				        		// }
        					}	
	        			} else{
	        				pois[i].style.display = "none";
	        				var poi = document.getElementsByClassName("poilist");
							for (var j = 0; j < poi.length; j++) {
								if (poi[j].id != "busstop") {
									poi[j].classList.remove("poiselected");
								}
							}
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
function poilist(){
	var poi = document.getElementsByClassName("poilist");
	for (var i = 0; i < poi.length; i++) {
		poi[i].onclick = function(){			
			titlen = this.id;
			localp.search(" ", {customData: {geotableId: 199734, tags: this.innerText}});
		}
	}
}
addLoadEvent(poilist);