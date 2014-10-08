function Pendulum(node){
	var style = window.getComputedStyle(node);
	var info = {
		global:{
			speed: 1,
			timer: null,
			time: 0,
			timeDelay: 0.05,
			g: 9.81
		},
		pendulum: {
			angle: 0,
			cur_angle: 0
		},
		start_point:{
			x: (parseInt(style.width)/2),
			y: 0
		},
		thread: {
			length: 100
		},
		ball: {
			width: 40,
			height: 40,
		}
	};
	var container, thread, ball;
	function init(){
		container = document.createElement('div');
		container.style.position = 'absolute';
		container.style.width = '1px';
		container.style.height = info.thread.length + info.ball.height + 'px';
		container.style.left = info.start_point.x + 'px';
		var middle = (info.thread.length + info.ball.height) / 2;
		container.style.top = (info.start_point.y - middle/2) + 'px';

		thread = document.createElement('div');
		thread.style.height = info.thread.length + 'px';
		thread.style.width = '1px';
		thread.style.backgroundColor = 'black';
		thread.style.position = 'absolute';
		thread.style.top = middle*2 + 'px';
		thread.style.left = 0 + "px";
		container.appendChild(thread);

		ball = document.createElement('div');
		ball.style.width = ball.style.height = info.ball.width + 'px';
		ball.style.borderRadius = info.ball.width/2 + 'px';
		ball.style.border = '1px solid black';
		ball.style.position = 'absolute';
		ball.style.top = middle*2 + info.thread.length + 'px';
		ball.style.left = -info.ball.width/2 + 'px';
		container.appendChild(ball);

		node.appendChild(container);
	}
	init();

	this.setAngle = function(ang, redraw){
		info.pendulum.angle = ang;
		if(redraw)
			this.reDraw();
	}

	this.setPos = function(x, y, redraw){
		info.start_point.x = x;
		info.start_point.y = y;
		if(redraw)
			this.reDraw();
	};
	this.ballResize = function (w, h, redraw){
		info.ball.width = w;
		info.ball.height = h;
		if(redraw)
			this.reDraw();
	};
	this.setLength = function(l, redraw){
		info.thread.length = l;
		if(redraw)
			this.reDraw();
	};

	this.reDraw = function(){
		container.style.height = 2*(info.thread.length + info.ball.height) + 'px';
		container.style.left = info.start_point.x + 'px';
		var middle = (info.thread.length + info.ball.height) / 2;
		container.style.top = (info.start_point.y - middle) + 'px';
		container.style.transform = 'rotate(' + info.pendulum.cur_angle + 'deg)';

		ball.style.width = ball.style.height = info.ball.width + 'px';
		ball.style.borderRadius = info.ball.width/2 + 'px';
		ball.style.top = info.thread.length + middle*2 + 'px';
		ball.style.left = -info.ball.width/2 + 'px';

		thread.style.top = middle*2 + 'px';
		thread.style.height = info.thread.length + 'px';
	};
	this.setSpeed = function (sp){
		info.global.speed = sp;
		this.stop();
		if(info.global.timer !== null)
			this.run();
	};
	this.run = function(){
		var scope = this;
		info.global.timer = setInterval(function(){
			info.global.time += info.global.timeDelay;
			info.pendulum.cur_angle = info.pendulum.angle*Math.cos((Math.sqrt(info.global.g/info.thread.length)*info.global.time));
			scope.reDraw();
		},2000/info.global.speed);
	};
	this.stop = function(reset){
		clearInterval(info.global.timer);
		info.global.timer = null;
		if(reset){
			info.global.time = 0;
			info.pendulum.cur_angle = info.pendulum.angle;
			this.setAngle(info.pendulum.angle);
		}
	};
}