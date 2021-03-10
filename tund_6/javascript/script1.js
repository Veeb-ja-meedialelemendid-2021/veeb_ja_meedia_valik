let message = "See tõesti töötab!"; //varasemalt kasutati muutujate jaoks lühendit var
let picurl = "../../../../media/photos/TLU_600x400/";
let picnameprefix = "tlu_";
let picext = ".jpg";
let minpicnum = 1;
let maxpicnum = 43;
let picnum = 1;
let picchange = 0;

window.onload = function(){
	//alert("See töötab!");
	//console.log("Sõnum on: " + message);
	putOpeningTime();
	putRandomPic();
	document.getElementById("tlu_pic").addEventListener("click", putRandomPic);
	clockTick();
	//let timer = setInterval(clockTick, 500); //clearInterval(timer);
	document.getElementById("nextphoto").addEventListener("click", nextPhoto);
}

function nextPhoto(){
	picnum ++;
	if(picnum > maxpicnum){
		picnum = minpicnum;
	}
	putPhoto();
}

function putRandomPic(){
	let randomnum = minpicnum + Math.round(Math.random() * (maxpicnum - minpicnum));
	picnum = randomnum;
	putPhoto();
}

function putPhoto(){
	if(picchange%2 == 0){
		document.getElementById("tlu_pic2").src = picurl + picnameprefix + picnum + picext;
		document.getElementById("tlu_pic2").style.opacity = 1;
	} else {
		document.getElementById("tlu_pic").src = picurl + picnameprefix + picnum + picext;
		document.getElementById("tlu_pic2").style.opacity = 0;
	}
	picchange ++;
}

function putOpeningTime(){
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds(); 
	document.getElementById("timeplace").innerHTML = "Leht avati kell: " + currenthour +":" + currentminute + ":" + currentsecond +".";
}

function clockTick(){
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds();
	let secangle = currentsecond * 6;
	//transform: rotate(45deg)
	document.getElementById("secondhand").style.transform = "rotate(" + secangle + "deg)";
	//setTimeout(clockTick, 1000);
	requestAnimationFrame(clockTick);
}