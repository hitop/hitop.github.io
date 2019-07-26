function getAjax(url, success) {
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.send();
	return xhr;
}

function flistSc() {
	var listSc, lihtml="";
	getAjax('./data/listSc.json', function (data) {
		let vad = JSON.parse(data)
		listSc = vad[0]
	
		for(var key in listSc){
			lihtml += "<li><h2>" + key + " - <i><a href='" + listSc[key]["url"] + "' target='_blank'>下载链接</a></i></h2>"
			if (listSc[key].hasOwnProperty("img")) {
				lihtml += "<img src='" + listSc[key]["img"] + "' alt='" + key + "'>";
			}
			lihtml += "<p><big><b>功能：</b></big>" + listSc[key]["fcn"] + "</p><p><big><b>使用方法：</b></big>" + listSc[key]["htu"] + "</p><p class='rupdate'><b>最近更新：</b><i>" + listSc[key]["udate"] + "</i></p></li>"
		}
		document.getElementById('listSc').innerHTML = lihtml
		
	})
}

flistSc();