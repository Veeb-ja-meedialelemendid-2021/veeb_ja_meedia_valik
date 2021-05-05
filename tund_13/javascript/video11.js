let movie;
let title_num = 0;
let movie_title;

window.onload = function() {
	movie = document.getElementById("movie");
	//console.log(movie.textTracks);
	set_titles();
	document.getElementById("subtitle_change_btn").addEventListener("click", change_subtitle_lang);
	document.getElementById("brightness_btn").addEventListener("input", set_filter);
	document.getElementById("contrast_btn").addEventListener("input", set_filter);
	document.getElementById("saturate_btn").addEventListener("input", set_filter);
	document.getElementById("hue-rotate_btn").addEventListener("input", set_filter);
	document.getElementById("blur_btn").addEventListener("input", set_filter);
}

function set_filter(){
	//CSS:      filter: none;     filter: brightness(90%) contrast(110%) saturate(120%);
	let filter = "";
	filter = "brightness(" + document.getElementById("brightness_btn").value + "%)";
	filter += " contrast(" + document.getElementById("contrast_btn").value + "%)";
	filter += " saturate(" + document.getElementById("saturate_btn").value + "%)";
	filter += " hue-rotate(" + document.getElementById("hue-rotate_btn").value + "deg)";
	filter += " blur(" + document.getElementById("blur_btn").value + "px)";
	movie.style.filter = filter;
}

function set_titles(){
	for(let i = 0; i < movie.textTracks.length; i ++){
		if(movie.textTracks[i].language == "et"){
			title_num = i;
		}
	}
	movie_title = movie.textTracks[title_num];
	movie_title.mode = "hidden"; //disabled   hidden   showing
	movie_title.addEventListener("cuechange", display_titles);
}

function display_titles(){
	let current_title = "";
	if(movie_title.activeCues.length > 0){
		for(let i = 0; i < movie_title.activeCues.length; i ++){
			current_title += movie_title.activeCues[i].id + ": " + movie_title.activeCues[i].text + "\n";
		}
	}
	document.getElementById("subtitle_place").innerHTML = current_title;
}

function change_subtitle_lang(){
	movie_title.mode = "disabled";
	movie_title.removeEventListener("cuechange", display_titles);
	title_num ++;
	if(title_num >= movie.textTracks.length){
		title_num = 0;
	}
	movie_title = movie.textTracks[title_num];
	movie_title.mode = "hidden";
	movie_title.addEventListener("cuechange", display_titles);
}