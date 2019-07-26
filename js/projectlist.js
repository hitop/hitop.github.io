function plist() {
	let pli = list => `
		<li><a target="_blank" href="${list.url}"><img src="${list.preview}"><h3>${list.name}</h3><p>${list.description}</p></a></li>
	`
	let pquery = new XMLHttpRequest();
    pquery.open("GET","data/ProjectList.json",true);
    pquery.send();
    pquery.onreadystatechange=function(){
        if(pquery.readyState==4&&pquery.status==200){
        	let plists = JSON.parse(pquery.responseText);
            for(let plist in plists){
            	document.getElementById('pjlist').innerHTML += pli(plists[plist])
            }
        }
    }
}

plist()