function Pendulum(node){
	var style = window.getComputedStyle(node);
	var info = {
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

	var container = document.createElement('div');
	container.style.position = 'absolute';
	container.style.width = 0;
	container.style.height = info.thread.length + info.ball.height + 'px';
	container.style.left = info.start_point.x + 'px';
	container.style.top = info.start_point.y + 'px';

	var thread = document.createElement('div');
	thread.style.height = info.thread.length + 'px';
	thread.style.width = '1px';
	thread.style.backgroundColor = 'black';
	thread.style.position = 'absolute';
	thread.style.top = 0+ 'px';
	thread.style.left = 0 + "px";
	container.appendChild(thread);

	var ball = document.createElement('div');
	ball.style.width = ball.style.height = info.ball.width + 'px';
	ball.style.borderRadius = info.ball.width/2 + 'px';
	ball.style.border = '1px solid black';
	ball.style.position = 'absolute';
	ball.style.top = info.thread.length + 'px';
	ball.style.left = -info.ball.width/2 + 'px';
	container.appendChild(ball);

	node.appendChild(container);

	var angle = 0;

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
		container.style.height = info.thread.length + info.ball.height + 'px';
		container.style.left = info.start_point.x + 'px';
		container.style.top = info.start_point.y + 'px'; 

		ball.style.width = ball.style.height = info.ball.width + 'px';
		ball.style.borderRadius = info.ball.width/2 + 'px';
		ball.style.top = info.thread.length + 'px';
		ball.style.left = -info.ball.width/2 + 'px';

		thread.style.height = info.thread.length + 'px';
	}
}