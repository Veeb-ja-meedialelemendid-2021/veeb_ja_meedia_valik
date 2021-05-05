let canvas;
let ctx;
let base_r = 15;
let ball_list = [];
let elements_limit = 18;

window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	init_game();
}

function init_game(){
	add_elements();
	//moving();
}

function add_elements(){
	//ball = new Game_ball(x, y, r);
	for(let i = 0; i < elements_limit; i ++){
		let x = canvas.width / 2;
		let y = canvas.height / 2;
		let r = base_r + Math.round(Math.random() * 15);
		ball_list.push(new Game_ball(x, y, r));
	}
	move_elements();
}

function move_elements(){
	canvas.width = canvas.width;
	//ball.move_self();
	//ball.draw_self();
	for(let i = 0; i < ball_list.length; i ++){
		ball_list[i].move_self();
		ball_list[i].draw_self();
	}
	requestAnimationFrame(move_elements);
}

//defineerin klassi ehk mängu elemendi "prototüübi"
class Game_ball{
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.speed_x = 0;
		this.speed_y = 0;
		this.set_speed();
		this.draw_self();
	}
	
	set_speed(){
		while(this.speed_x == 0 && this.speed_y == 0){
			this.speed_x = 4 - Math.round(Math.random() * 8);
			this.speed_y = 4 - Math.round(Math.random() * 8);
		}
	}
	
	draw_self(){
		ctx.fillStyle = "#FF00CC";
		ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.fill();
		ctx.closePath();
	}
	
	move_self(){
		this.x += this.speed_x;
		this.y += this.speed_y;
		//kontrolilin, kas on servani jõudnud, põrkame
		if(this.x <= this.r || this.x >= canvas.width - this.r){
			this.speed_x *= -1;
		}
		if(this.y <= this.r || this.y >= canvas.height - this.r){
			this.speed_y *= -1;
		}
	}
}//klass lõppeb

function moving(){
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = canvas.width;
	//canvas.height = canvas.height;
	ctx.fillStyle = "#FF00CC";
	//muudan asukohta
	x += speed_x;
	y += speed_y;
	//kontrolilin, kas on servani jõudnud, põrkame
	if(x <= r || x >= canvas.width - r){
		speed_x *= -1;
	}
	if(y <= r || y >= canvas.height - r){
		speed_y *= -1;
	}
	ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.fill();
	ctx.closePath();
	requestAnimationFrame(moving);
}

