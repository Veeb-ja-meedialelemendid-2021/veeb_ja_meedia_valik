let sound_url = "../../../../media/sounds/kellaheli/";
let time_words = [];
let clock_speaker = new Audio();
let prev_hour = new Date().getHours();

function init_clock(){
	clockTick();
	document.getElementById("speak_btn").addEventListener("click", tell_time);
}

function clockTick(){
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds();
	let secangle = currentsecond * 6;
	let minangle = currentminute * 6 + currentsecond * .1;
	let hourangle = currenthour * 30 + currentminute * .5;
	//transform: rotate(45deg)
	document.getElementById("secondhand").style.transform = "rotate(" + secangle + "deg)";
	document.getElementById("minutehand").style.transform = "rotate(" + minangle + "deg)";
	document.getElementById("hourhand").style.transform = "rotate(" + hourangle + "deg)";
	//kelllöögid
	//if(prev_hour != currenthour){
		//prev_hour = currenthour;
	if(currentminute == 0 && currentsecond == 0 && currenttime.getMilliseconds() < 1000/60){
		if(document.getElementById("allow_bell_btn").checked){
			//vaatame, mitu korda lüüa ja laustame löömist
			//vaja on loendurina kasutada löökide arvu muutujat
			
		}
	}
	
	//setTimeout(clockTick, 1000);
	requestAnimationFrame(clockTick);
}

function tell_time(){
	time_words.push("kellon");
	let currenttime = new Date();
	num_to_words(currenttime.getHours());
	time_words.push("ja");
	num_to_words(currenttime.getMinutes());
	if(currenttime.getMinutes() == 1){
		time_words.push("minut");
	} else {
		time_words.push("minutit");
	}
	console.log(time_words);
	clock_speaker.addEventListener("ended", speak_time);
	speak_time();
}

function speak_time(){
	if(time_words.length > 0){
		clock_speaker.src = sound_url + time_words[0] + ".mp3";
		clock_speaker.play();
		time_words.shift();
	} else {
		clock_speaker.removeEventListener("ended", speak_time);
	}
}


function num_to_words(num_value){
	if(num_value <= 10){
		time_words.push(num_value);
	} else {
		let tens = Math.floor(num_value / 10);
		let ones = num_value % 10;
		if(tens == 1){
			time_words.push(ones);
			time_words.push("teist");
		} else {
			time_words.push(tens);
			time_words.push("kymmend");
			if(ones > 0){
				time_words.push(ones);
			}
		}
	}
}